import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Country from './Country';
import './App.css';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [countries, setCountries] = useState<any[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<any[]>([]);
  const [showSearchBar, setShowSearchBar] = useState<boolean>(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchCountries();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(event.target.value);
  };

  useEffect(() => {
    const filtered = countries.filter((country) => {
      const matchesRegion = selectedRegion ? country.region === selectedRegion : true;
      const matchesSearch = searchTerm ? country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) : true;
      return matchesRegion && matchesSearch;
    });
    setFilteredCountries(filtered);
  }, [searchTerm, selectedRegion, countries]);

  useEffect(() => {
    const handleScroll = () => {
      setShowSearchBar(window.scrollY < 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="header">
        <h1>Where in the world?</h1>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Home 
              searchTerm={searchTerm}
              handleSearchChange={handleSearchChange}
              selectedRegion={selectedRegion}
              handleRegionChange={handleRegionChange}
              filteredCountries={filteredCountries}
              showSearchBar={showSearchBar}
            />
          }
        />
        <Route path="/country/:countryCode" element={<Country countries={countries} />} />
      </Routes>
    </Router>
  );
};

const Home: React.FC<{
  searchTerm: string,
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  selectedRegion: string,
  handleRegionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
  filteredCountries: any[],
  showSearchBar: boolean
}> = ({ searchTerm, handleSearchChange, selectedRegion, handleRegionChange, filteredCountries, showSearchBar }) => {
  return (
    <>
      {showSearchBar && (
        <>
          <div className="searchbar">
            <input
              type="text"
              placeholder="Search for a country..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="filter">
            <select value={selectedRegion} onChange={handleRegionChange}>
              <option value="">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </>
      )}
      <div className="card-container">
        {filteredCountries.map((country) => (
          <div key={country.cca3} className="card">
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} className="flag" />
            <h2>
              <Link to={`/country/${country.cca3}`}>{country.name.common}</Link>
            </h2>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;