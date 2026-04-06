import { Search, ChevronRight, Star, Heart, Tag } from 'lucide-react';

interface HomeProps {
  onBookNow: () => void;
  onCategorySelect: (category: string) => void;
  onBusinessSelect: (business: any) => void;
}

export function Home({ onBookNow, onCategorySelect, onBusinessSelect }: HomeProps) {
  const categories = [
    { id: 1, name: 'Vehicles', icon: '🚗', color: 'bg-blue-500' },
    { id: 2, name: 'Pets', icon: '🐾', color: 'bg-green-500' },
    { id: 3, name: 'Barber & Hairdresser', icon: '💈', color: 'bg-purple-500' },
    { id: 4, name: 'Beauty & Spa', icon: '💅', color: 'bg-pink-500' },
    { id: 5, name: 'Health & Fitness', icon: '💪', color: 'bg-orange-500' },
    { id: 6, name: 'Home Services', icon: '🔧', color: 'bg-yellow-500' }
  ];

  const favoriteBusinesses = [
    {
      id: 1,
      name: 'Classic Cuts Barbershop',
      category: 'Barber',
      rating: 5.0,
      visits: 12,
      image: '💈',
      lastVisit: '2026-03-06'
    },
    {
      id: 2,
      name: 'QuickFix Auto Service',
      category: 'Auto Service',
      rating: 4.9,
      visits: 8,
      image: '🔧',
      lastVisit: '2025-10-20'
    },
    {
      id: 3,
      name: 'Elegance Hair Salon',
      category: 'Hair Salon',
      rating: 5.0,
      visits: 5,
      image: '💇‍♀️',
      lastVisit: '2026-01-15'
    }
  ];

  const promotedBusinesses = [
    {
      id: 4,
      name: 'Serenity Spa & Wellness',
      category: 'Spa',
      rating: 5.0,
      image: '🧖‍♀️',
      promotion: '20% OFF First Visit',
      promotionColor: 'bg-red-500'
    },
    {
      id: 5,
      name: 'Paws & Claws Pet Grooming',
      category: 'Pet Grooming',
      rating: 4.8,
      image: '🐕',
      promotion: 'Free Nail Trim',
      promotionColor: 'bg-green-500'
    }
  ];

  return (
    <div className="p-4 space-y-6 pb-20">
      {/* Header */}
      <div className="pt-4">
        <h1 className="mb-1">Welcome back, Alex</h1>
        <p className="text-muted-foreground">Find your next appointment</p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search businesses..."
          onClick={onBookNow}
          className="w-full pl-10 pr-4 py-3 bg-input-background rounded-lg outline-none focus:ring-2 focus:ring-primary cursor-pointer"
        />
      </div>

      {/* Categories */}
      <div className="space-y-3">
        <h2>Categories</h2>
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category.name)}
              className="bg-card border border-border rounded-xl p-4 text-left hover:bg-accent/50 transition-colors"
            >
              <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center text-2xl mb-3`}>
                {category.icon}
              </div>
              <p className="text-sm">{category.name}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Favorite Businesses */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-primary" />
          <h2>Your Favorites</h2>
        </div>
        <div className="space-y-2">
          {favoriteBusinesses.map((business) => (
            <button
              key={business.id}
              onClick={() => onBusinessSelect(business)}
              className="w-full bg-card border border-border rounded-xl p-4 flex items-center gap-4 text-left hover:bg-accent/50 transition-colors"
            >
              <div className="text-4xl flex-shrink-0">{business.image}</div>
              <div className="flex-1 min-w-0">
                <h3 className="mb-1 truncate">{business.name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{business.rating}</span>
                  </div>
                  <span>•</span>
                  <span>{business.visits} visits</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          ))}
        </div>
      </div>

      {/* Promoted Businesses */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Tag className="w-5 h-5 text-primary" />
          <h2>Special Offers</h2>
        </div>
        <div className="space-y-2">
          {promotedBusinesses.map((business) => (
            <button
              key={business.id}
              onClick={() => onBusinessSelect(business)}
              className="w-full bg-card border border-border rounded-xl overflow-hidden text-left hover:bg-accent/50 transition-colors"
            >
              <div className={`${business.promotionColor} text-white px-4 py-2 text-sm text-center`}>
                {business.promotion}
              </div>
              <div className="p-4 flex items-center gap-4">
                <div className="text-4xl flex-shrink-0">{business.image}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="mb-1 truncate">{business.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{business.rating}</span>
                    </div>
                    <span>•</span>
                    <span>{business.category}</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
