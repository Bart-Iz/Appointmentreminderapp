import { Search, MapPin, Star, ChevronRight, Calendar, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

interface BusinessesProps {
  onSelectBusiness: (business: any) => void;
}

export function Businesses({ onSelectBusiness }: BusinessesProps) {
  const [selectedLocation, setSelectedLocation] = useState('Current Location');
  const [showFilters, setShowFilters] = useState(false);

  const businesses = [
    {
      id: 1,
      name: 'Classic Cuts Barbershop',
      category: 'Barber',
      rating: 4.8,
      reviews: 234,
      address: '123 Main St',
      distance: '0.3 mi',
      image: '💈',
      services: ['Haircut', 'Beard Trim', 'Hot Towel Shave'],
      avgDuration: 30,
      reminderInterval: 30,
      availableSlots: ['Today 2:00 PM', 'Today 4:30 PM', 'Tomorrow 10:00 AM']
    },
    {
      id: 2,
      name: 'Elegance Hair Salon',
      category: 'Hair Salon',
      rating: 4.9,
      reviews: 456,
      address: '456 Oak Ave',
      distance: '0.5 mi',
      image: '💇‍♀️',
      services: ['Cut & Style', 'Color', 'Highlights', 'Treatment'],
      avgDuration: 90,
      reminderInterval: 60,
      availableSlots: ['Tomorrow 9:00 AM', 'Tomorrow 1:00 PM', 'Wed 11:00 AM']
    },
    {
      id: 3,
      name: 'Serenity Spa & Wellness',
      category: 'Spa',
      rating: 5.0,
      reviews: 189,
      address: '789 Pine Rd',
      distance: '1.2 mi',
      image: '🧖‍♀️',
      services: ['Massage', 'Facial', 'Couples Massage', 'Manicure'],
      avgDuration: 60,
      reminderInterval: 90,
      availableSlots: ['Today 5:00 PM', 'Tomorrow 3:00 PM', 'Thu 1:00 PM']
    },
    {
      id: 4,
      name: 'QuickFix Auto Service',
      category: 'Auto Service',
      rating: 4.7,
      reviews: 312,
      address: '321 Elm St',
      distance: '2.1 mi',
      image: '🔧',
      services: ['Oil Change', 'Tire Rotation', 'Brake Service', 'Inspection'],
      avgDuration: 45,
      reminderInterval: 180,
      availableSlots: ['Today 8:00 AM', 'Today 12:00 PM', 'Tomorrow 9:00 AM']
    },
    {
      id: 5,
      name: 'Downtown Barbershop',
      category: 'Barber',
      rating: 4.6,
      reviews: 178,
      address: '555 Broadway',
      distance: '0.8 mi',
      image: '✂️',
      services: ['Haircut', 'Fade', 'Line Up', 'Kids Cut'],
      avgDuration: 30,
      reminderInterval: 30,
      availableSlots: ['Today 3:00 PM', 'Tomorrow 11:00 AM', 'Tomorrow 2:00 PM']
    },
    {
      id: 6,
      name: 'Luxe Nail Bar',
      category: 'Nail Salon',
      rating: 4.8,
      reviews: 267,
      address: '888 Park Pl',
      distance: '1.5 mi',
      image: '💅',
      services: ['Manicure', 'Pedicure', 'Gel Nails', 'Nail Art'],
      avgDuration: 60,
      reminderInterval: 21,
      availableSlots: ['Today 1:00 PM', 'Tomorrow 10:00 AM', 'Tomorrow 4:00 PM']
    }
  ];

  const categories = ['All', 'Barber', 'Hair Salon', 'Spa', 'Auto Service', 'Nail Salon'];

  return (
    <div className="p-4 space-y-4 pb-20">
      {/* Header */}
      <div className="pt-4">
        <h1 className="mb-1">Find & Book</h1>
        <p className="text-muted-foreground">Search businesses in your area</p>
      </div>

      {/* Location Selector */}
      <button className="w-full bg-card border border-border rounded-lg p-3 flex items-center gap-2 text-left">
        <MapPin className="w-5 h-5 text-primary" />
        <div className="flex-1">
          <p className="text-sm text-muted-foreground">Location</p>
          <p>{selectedLocation}</p>
        </div>
        <ChevronRight className="w-5 h-5 text-muted-foreground" />
      </button>

      {/* Search & Filters */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search services..."
            className="w-full pl-10 pr-4 py-3 bg-input-background rounded-lg outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="bg-card border border-border p-3 rounded-lg"
        >
          <SlidersHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-card border border-border rounded-xl p-4 space-y-3">
          <h3>Availability</h3>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm">
              Today
            </button>
            <button className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm">
              Tomorrow
            </button>
            <button className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm">
              This Week
            </button>
          </div>
        </div>
      )}

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              category === 'All'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Business List */}
      <div className="space-y-3">
        {businesses.map((business) => (
          <button
            key={business.id}
            onClick={() => onSelectBusiness(business)}
            className="w-full bg-card border border-border rounded-xl p-4 flex gap-4 text-left hover:bg-accent/50 transition-colors"
          >
            <div className="text-4xl flex-shrink-0">{business.image}</div>
            <div className="flex-1 min-w-0">
              <h3 className="mb-1 truncate">{business.name}</h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{business.rating}</span>
                  <span className="text-sm text-muted-foreground">({business.reviews})</span>
                </div>
                <span className="text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{business.category}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <MapPin className="w-4 h-4" />
                <span>{business.address}</span>
                <span>•</span>
                <span>{business.distance}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <Calendar className="w-4 h-4" />
                <span>Available: {business.availableSlots[0]}</span>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 self-center" />
          </button>
        ))}
      </div>
    </div>
  );
}
