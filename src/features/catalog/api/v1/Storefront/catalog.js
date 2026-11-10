
export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      error: "Método no permitido",
    });
  }

  try {
    const url = new URL(
      "https://xapi.madebyblume.com/v1/storefront/catalog"
    );

    // Parámetros recibidos desde el frontend
    const { productType, gender } = req.query;

    if (productType) {
      url.searchParams.set("productType", productType);
    }

    if (gender) {
      const genders = Array.isArray(gender) ? gender : [gender];

      genders.forEach((value) => {
        url.searchParams.append("gender", value);
      });
    }

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "x-store-host": "www.cachoscr.com",
      },
    });

    const data = await response.json();

    return res.status(response.status).json(data);
  } catch (error) {
    console.error("Error consultando el catálogo:", error);

    return res.status(500).json({
      error: "No se pudo consultar el catálogo",
      details: error.message,
    });
  }
}
