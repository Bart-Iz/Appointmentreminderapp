import { User, Mail, Phone, Bell, ChevronRight, Calendar } from 'lucide-react';

interface ProfileProps {
  profile: {
    name: string;
    gender: string;
    phone: string;
  };
  onUpdateProfile: (profile: any) => void;
}

export function Profile({ profile, onUpdateProfile }: ProfileProps) {
  const preferences = [
    {
      service: 'Barber',
      interval: 30,
      enabled: true
    },
    {
      service: 'Hair Salon',
      interval: 60,
      enabled: true
    },
    {
      service: 'Spa',
      interval: 90,
      enabled: false
    },
    {
      service: 'Auto Service',
      interval: 180,
      enabled: true
    }
  ];

  return (
    <div className="p-4 space-y-6 pb-20">
      {/* Header */}
      <div className="pt-4">
        <h1 className="mb-1">Profile</h1>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </div>

      {/* Profile Info */}
      <div className="bg-card border border-border rounded-xl p-4 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-primary" />
          </div>
          <div className="flex-1">
            <h2>{profile.name}</h2>
            <p className="text-sm text-muted-foreground capitalize">{profile.gender}</p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-3 text-sm">
            <Phone className="w-5 h-5 text-muted-foreground" />
            <span>{profile.phone}</span>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-primary" />
          <h2>Reminder Preferences</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Customize when you receive reminders for different services
        </p>

        <div className="space-y-2">
          {preferences.map((pref, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-xl p-4 flex items-center justify-between"
            >
              <div className="flex-1">
                <h3 className="mb-1">{pref.service}</h3>
                <p className="text-sm text-muted-foreground">
                  Remind me every {pref.interval} days
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={pref.enabled}
                  onChange={() => {}}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-switch-background peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Seasonal Suggestions */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          <h2>Seasonal Suggestions</h2>
        </div>
        <div className="bg-card border border-border rounded-xl p-4 flex items-center justify-between">
          <div className="flex-1">
            <h3 className="mb-1">Special Occasion Reminders</h3>
            <p className="text-sm text-muted-foreground">
              Get personalized suggestions for Valentine's Day, holidays, and more
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={true}
              onChange={() => {}}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-switch-background peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>
      </div>

      {/* Account Actions */}
      <div className="space-y-2">
        <button className="w-full bg-card border border-border rounded-xl p-4 flex items-center justify-between hover:bg-accent/50 transition-colors">
          <span>Edit Profile</span>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </button>
        <button className="w-full bg-card border border-border rounded-xl p-4 flex items-center justify-between hover:bg-accent/50 transition-colors">
          <span>Payment Methods</span>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </button>
        <button className="w-full bg-card border border-border rounded-xl p-4 flex items-center justify-between hover:bg-accent/50 transition-colors">
          <span>Notification Settings</span>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      {/* Backend Notice */}
      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
        <p className="text-sm text-yellow-700 dark:text-yellow-300">
          💡 <strong>Note:</strong> This is a frontend prototype. Connect Supabase from the Make
          settings page to enable data persistence and automated reminder notifications.
        </p>
      </div>
    </div>
  );
}
