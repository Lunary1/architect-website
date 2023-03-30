export async function getProjectById(options = {}) {
    const params = {
      ...options,
    };
  
  
    const paramString = Object.keys(params)
      .map((key) => `${key}=${encodeURIComponent(params[key])}`)
      .join("&");
  
    const results = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/search?${paramString}`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            process.env.CLOUDINARY_API_KEY +
              ":" +
              process.env.CLOUDINARY_API_SECRET
          ).toString("base64")}`,
        },
      }
    ).then((r) => r.json());
  
    return results;
  }