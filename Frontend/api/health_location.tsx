const { getJson } = require("serpapi");

export interface Health {
    facility_name:string;
    street_address:{latitude:string,longitude:string};
    occupancy_type:string;
    website?:{url:string};
}

export const fetchHealth = async () : Promise<Health> => {
    const response = await fetch("https://data.austintexas.gov/resource/6v78-dj3u.json")
    const data =  await response.json()
    return data
}



export const fetchLocations = async () => {
  const response = await fetch('/api/search-locations');
  const data = await response.json();
  console.log("Location", data);
  return data;
}
 