export default async function handler(req, res) {
    const { getJson } = require("serpapi");
    
    try {
      const result = await new Promise((resolve, reject) => {
        getJson({
          engine: "google_maps",
          ll: "@40.7455096,-74.0083012,14z",
          q: "Hospital in austin",
          api_key: process.env.SERPAPI_KEY // Store on server side
        }, (json) => {
          resolve(json);
        });
      });
      
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }