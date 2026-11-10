
export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {
    const url = new URL(
      "https://xapi.madebyblume.com/v1/storefront/catalog"
    );

    url.searchParams.set("productType", "CALZADO");

    const upstream = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "x-store-host": "www.cachoscr.com"
      }
    });

    const responseText = await upstream.text();

    return res.status(200).json({
      diagnostic: true,
      upstreamStatus: upstream.status,
      upstreamResponse: responseText
    });

  } catch (error) {
    return res.status(500).json({
      diagnostic: true,
      error: error.message
    });
  }
}
