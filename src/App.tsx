import React, { useState } from 'react';
import { Building } from 'lucide-react';
import SearchForm from './components/SearchForm';
import ResultsList from './components/ResultsList';
import { generateSampleData } from './data/sampleData';
import { Business, SearchParams } from './types/types';

function App() {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (params: SearchParams) => {
    const results = generateSampleData(params.term, params.location);
    setBusinesses(results);
    setHasSearched(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Building className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Business Lead Finder
          </h1>
          <p className="text-xl text-gray-600">
            Discover and connect with businesses in your area
          </p>
        </div>

        <SearchForm onSearch={handleSearch} />

        {hasSearched && <ResultsList businesses={businesses} />}
      </div>
    </div>
  );
}

export default App;