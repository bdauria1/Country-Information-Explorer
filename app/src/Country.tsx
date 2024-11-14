import React from 'react';
import { useParams } from 'react-router-dom';
import './Country.css';

interface CountryProps {
  countries: Array<{
    cca3: string;
    flags: {
      png: string;
    };
    name: {
      common: string;
      nativeName?: {
        [key: string]: {
          common: string;
        };
      };
    };
    population: number;
    region: string;
    subregion?: string;
    capital?: string[];
    tld?: string[];
    currencies?: {
      [key: string]: {
        name: string;
      };
    };
    languages?: {
      [key: string]: string;
    };
    borders?: string[];
  }>;
}

const CountryDetails: React.FC<CountryProps> = ({ countries }) => {
  const { countryCode } = useParams<{ countryCode: string }>();
  const country = countries.find((c) => c.cca3 === countryCode);

  if (!country) return <p>Country not found</p>;

  return (
    <div className="country-details-container">
      <div className="country-details">
        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} className="country-flag" />
        <h2>{country.name.common}</h2>
        <p><strong>Native Name:</strong> {Object.values(country.name.nativeName || {}).map(name => name.common).join(', ')}</p>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Subregion:</strong> {country.subregion || 'N/A'}</p>
        <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
        <p><strong>Top-Level Domain:</strong> {country.tld ? country.tld[0] : 'N/A'}</p>
        <p><strong>Currencies:</strong> {country.currencies ? Object.values(country.currencies).map(curr => curr.name).join(', ') : 'N/A'}</p>
        <p><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
        <p><strong>Border Countries:</strong> {country.borders ? country.borders.join(', ') : 'None'}</p>
      </div>
    </div>
  );
}

export default CountryDetails;