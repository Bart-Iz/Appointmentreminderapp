import { useState } from 'react';
import { Home } from './components/Home';
import { Businesses } from './components/Businesses';
import { History } from './components/History';
import { Profile } from './components/Profile';
import { BookingFlow } from './components/BookingFlow';
import { Calendar, Clock, User, Home as HomeIcon } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedBusiness, setSelectedBusiness] = useState<any>(null);
  const [userProfile, setUserProfile] = useState({
    name: 'Alex Johnson',
    gender: 'male',
    phone: '+1 (555) 123-4567'
  });

  const renderScreen = () => {
    if (selectedBusiness) {
      return (
        <BookingFlow
          business={selectedBusiness}
          onClose={() => setSelectedBusiness(null)}
          userProfile={userProfile}
        />
      );
    }

    switch (activeTab) {
      case 'home':
        return <Home onBookNow={() => setActiveTab('businesses')} />;
      case 'businesses':
        return <Businesses onSelectBusiness={setSelectedBusiness} />;
      case 'history':
        return <History />;
      case 'profile':
        return <Profile profile={userProfile} onUpdateProfile={setUserProfile} />;
      default:
        return <Home onBookNow={() => setActiveTab('businesses')} />;
    }
  };

  return (
    <div className="size-full flex flex-col bg-background max-w-md mx-auto">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {renderScreen()}
      </div>

      {/* Bottom Navigation */}
      {!selectedBusiness && (
        <nav className="border-t border-border bg-card px-4 py-2 safe-area-inset-bottom">
          <div className="flex items-center justify-around">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                activeTab === 'home' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <HomeIcon className="w-5 h-5" />
              <span className="text-xs">Home</span>
            </button>
            <button
              onClick={() => setActiveTab('businesses')}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                activeTab === 'businesses' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <Calendar className="w-5 h-5" />
              <span className="text-xs">Book</span>
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                activeTab === 'history' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <Clock className="w-5 h-5" />
              <span className="text-xs">History</span>
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                activeTab === 'profile' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <User className="w-5 h-5" />
              <span className="text-xs">Profile</span>
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}
