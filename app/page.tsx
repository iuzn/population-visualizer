import React from "react";
import PopulationViz from "@/components/PopulationVisualizer";
import countriesResponse from "@/data/countries.json";

interface Country {
  name: { common: string };
  population: number;
  region: string;
}

interface TreeNode {
  name: string;
  value: number;
  children?: TreeNode[];
}

const Page = () => {
  const countries = countriesResponse.data as Country[];
  if (!countries) {
    return <div>Loading...</div>;
  } // wait for data to load
  countries?.sort((a: Country, b: Country) => b.population - a.population); // sort by population

  // Group countries by continent
  const continents: { [key: string]: TreeNode[] } = {};
  for (const country of countries) {
    const continent = (continents[country.region] =
      continents[country.region] || []);
    continent.push({
      name: country.name.common,
      value: country.population,
    });
  }

  const root: TreeNode = {
    name: "root",
    value: 0,
    children: Object.entries(continents).map(([name, children]) => ({
      name,
      value: 0, // initial value, to be updated by d3 hierarchy calculation
      children,
    })),
  };

  // Here, we will pass the data to the client component
  return <PopulationViz data={root} />;
};

export default Page;
