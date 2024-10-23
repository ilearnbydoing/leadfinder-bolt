import React from 'react';
import { Star, Phone, Globe, MapPin } from 'lucide-react';
import { Business } from '../types/types';

interface BusinessCardProps {
  business: Business;
}

export default function BusinessCard({ business }: BusinessCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{business.name}</h3>
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-1">
          <Star className="h-5 w-5 text-yellow-400 fill-current" />
          <span className="font-medium">{business.rating}</span>
        </div>
        <span className="text-gray-500">({business.reviews} reviews)</span>
      </div>
      <div className="space-y-2 text-gray-600">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>{business.address}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <span>{business.phone}</span>
        </div>
        {business.website && (
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <a
              href={business.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Visit Website
            </a>
          </div>
        )}
      </div>
      <div className="mt-4">
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
          {business.category}
        </span>
      </div>
    </div>
  );
}