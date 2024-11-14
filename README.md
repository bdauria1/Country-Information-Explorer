# Country Information Explorer 🌍

A React application to explore information about countries around the world using the REST Countries API. Users can search for countries, filter by region, and view detailed information about each country.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Future Improvements](#future-improvements)

## Features
- **Country Search**: Search for countries by name.
- **Region Filter**: Filter countries by region.
- **Dynamic Country Details**: Click on a country to view detailed information on a separate page.
- **Responsive Design**: Adjusts for various screen sizes.
- **Conditional Rendering**: Search and filter components are hidden while viewing country details.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) and npm installed on your machine.

### Steps
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/country-information-explorer.git
   ```

2. Navigate to the project directory:
    ```bash
    cd country-information-explorer
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```
5. Open your browser and go to http://localhost:3000.

## Usage
1. Search: Type a country's name in the search bar to find specific countries.
2. Filter by Region: Use the dropdown to filter countries by continent.
3. View Details: Click on a country's name to view details such as native name, population, region, subregion, capital, top-level domain, currencies, languages, and border countries.

## Project Structure
``` plaintext
├── public
│   └── index.html
├── src
│   ├── components
│   │   └── Country.tsx       # Component for displaying country details
│   ├── App.tsx               # Main App component
│   ├── App.css               # Stylesheet for the application
│   ├── index.tsx             # Entry point for React application
│   └── index.css             # Global styles
└── README.md
```

## Technologies Used
* React: JavaScript library for building user interfaces.
* React Router: Library for client-side routing.
* TypeScript: Adds static typing to JavaScript.
* REST Countries API: Provides country information data.
* CSS: Styles the components.

## Future Improvements
* Error Handling: Improve error handling for network requests.
* Enhanced Search and Filter: Allow for filtering by other criteria, like currency or language.
* Pagination: Add pagination for improved performance with a large dataset.
* Caching: Cache the API response to reduce the number of API calls.

