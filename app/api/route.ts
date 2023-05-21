import countriesResponse from "@/data/countries.json";
interface Country {
  name: { common: string };
  population: number;
  region: string;
}
export async function GET(request: Request) {
  const countries = countriesResponse.data as Country[];
  const result = countries.map((country) => {
    return {
      name: country.name.common,
      population: country.population,
      region: country.region,
    };
  });
  return new Response(JSON.stringify(result), {
    headers: { "content-type": "application/json" },
  });
}
