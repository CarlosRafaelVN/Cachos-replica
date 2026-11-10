const UPSTREAM_ORIGIN = 'https://xapi.madebyblume.com';
const STORE_ORIGIN = 'https://www.cachoscr.com';

async function readBody(req) {
  if (req.body !== undefined) {
    if (typeof req.body === 'string' || Buffer.isBuffer(req.body)) {
      return req.body;
    }
    return JSON.stringify(req.body);
  }

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  return chunks.length ? Buffer.concat(chunks) : undefined;
}

function headerValue(value) {
  return Array.isArray(value) ? value.join(', ') : value;
}

export default async function handler(req, res) {
  const method = req.method;
  if (method !== 'GET' && method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    res.statusCode = 405;
    res.end('Method not allowed');
    return;
  }

  const incomingUrl = new URL(req.url || '/', 'https://vercel.local');
  const upstreamPath = incomingUrl.pathname.slice('/api'.length);
  if (
    upstreamPath !== '/v1/storefront' &&
    !upstreamPath.startsWith('/v1/storefront/')
  ) {
    res.statusCode = 404;
    res.end('Not found');
    return;
  }

  const upstreamUrl = new URL(
    `${upstreamPath}${incomingUrl.search}`,
    UPSTREAM_ORIGIN,
  );
  const headers = {
    Accept: headerValue(req.headers.accept) || 'application/json',
    Origin: STORE_ORIGIN,
    Referer: `${STORE_ORIGIN}/`,
    'x-store-host':
      headerValue(req.headers['x-store-host']) || 'www.cachoscr.com',
  };
  const contentType = headerValue(req.headers['content-type']);
  if (contentType) headers['Content-Type'] = contentType;

  try {
    const body = method === 'POST' ? await readBody(req) : undefined;
    const upstreamResponse = await fetch(upstreamUrl, {
      method,
      headers,
      body,
    });

    for (const name of ['content-type', 'cache-control', 'etag']) {
      const value = upstreamResponse.headers.get(name);
      if (value) res.setHeader(name, value);
    }

    res.statusCode = upstreamResponse.status;
    res.end(Buffer.from(await upstreamResponse.arrayBuffer()));
  } catch (error) {
    console.error('Storefront proxy request failed:', error);
    res.statusCode = 502;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: false,
      error: {
        code: 'UpstreamUnavailable',
        message: 'The storefront API could not be reached.',
      },
      data: null,
    }));
  }
}
