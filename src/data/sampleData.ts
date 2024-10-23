import { Business } from '../types/types';

export const generateSampleData = (term: string, location: string): Business[] => {
  const businesses: Business[] = [
    {
      id: '1',
      name: `${term} Solutions ${location}`,
      address: `123 Main St, ${location}`,
      rating: 4.8,
      reviews: 127,
      phone: '+1 (555) 123-4567',
      website: 'https://example.com',
      category: term,
    },
    {
      id: '2',
      name: `${location} ${term} Experts`,
      address: `456 Oak Avenue, ${location}`,
      rating: 4.5,
      reviews: 89,
      phone: '+1 (555) 234-5678',
      category: term,
    },
    {
      id: '3',
      name: `Premier ${term}`,
      address: `789 Pine Road, ${location}`,
      rating: 4.9,
      reviews: 234,
      phone: '+1 (555) 345-6789',
      website: 'https://example.com',
      category: term,
    },
  ];

  return businesses;
};