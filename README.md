# Population Visualization

Population Visualization is a web application that provides an interactive visualization of country populations worldwide. Built with React and TypeScript, it uses D3.js to generate a dynamic treemap diagram where each rectangle represents a country, sized proportionally to its population. The countries are grouped by continent and color-coded for easy visual interpretation.

## Features
- Dynamic treemap visualization: Countries are displayed as rectangles within their respective continent group, scaled according to population.
- Responsive design: The visualization adjusts to the full width and height of the screen.
- Interactive labels: Each rectangle displays the country name and population, sized according to the rectangle's dimensions for readability.
- Color-coding by continent: Each continent has a distinct color to provide clear distinction between regions.
- Data from REST Countries API: The project fetches the latest data from the REST Countries API, ensuring up-to-date and accurate representation.

## Getting Started
Clone this repository to your local machine and install the necessary dependencies using `pnpm i`. 

## Usage
Start the development server with `pnpm dev`. Open your browser and visit `http://localhost:3000` to view the visualization.

## Built With
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [D3.js](https://d3js.org/)
- [Axios](https://axios-http.com/)

## Contributing
We welcome contributions from the community. Please read our [contributing guidelines](CONTRIBUTING.md) for more information.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
