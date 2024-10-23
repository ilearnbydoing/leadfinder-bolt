import React from 'react';
import BusinessCard from './BusinessCard';
import { Business } from '../types/types';

interface ResultsListProps {
  businesses: Business[];
}

export default function ResultsList({ businesses }: ResultsListProps) {
  if (businesses.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-8">
        No results found. Try adjusting your search terms.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {businesses.map((business) => (
        <BusinessCard key={business.id} business={business} />
      ))}
    </div>
  );
}