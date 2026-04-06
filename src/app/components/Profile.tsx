import { User, Phone, ChevronRight, Settings, Camera, Palette, Type } from 'lucide-react';
import { useState } from 'react';

interface ProfileProps {
  profile: {
    name: string;
    gender: string;
    phone: string;
  };
  onUpdateProfile: (profile: any) => void;
}

export function Profile({ profile, onUpdateProfile }: ProfileProps) {
  const [fontSize, setFontSize] = useState(16);
  const [colorScheme, setColorScheme] = useState('default');

  const colorSchemes = [
    { id: 'default', name: 'Default', primary: '#3b82f6' },
    { id: 'purple', name: 'Purple', primary: '#9333ea' },
    { id: 'green', name: 'Green', primary: '#10b981' },
    { id: 'orange', name: 'Orange', primary: '#f59e0b' }
  ];

  return (
    <div className="p-4 space-y-6 pb-20">
      {/* Header */}
      <div className="pt-4">
        <h1 className="mb-1">Profile</h1>
        <p className="text-muted-foreground">Manage your account settings</p>
      </div>

      {/* Profile Info */}
      <div className="bg-card border border-border rounded-xl p-4 space-y-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-primary" />
            </div>
            <button className="absolute bottom-0 right-0 w-7 h-7 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1">
            <h2>{profile.name}</h2>
            <p className="text-sm text-muted-foreground capitalize">{profile.gender}</p>
          </div>
        </div>

        <div className="space-y-3 pt-2 border-t border-border">
          <div className="flex items-center gap-3 text-sm">
            <Phone className="w-5 h-5 text-muted-foreground" />
            <span>{profile.phone}</span>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="space-y-3">
        <h2>Personal Information</h2>
        <div className="space-y-2">
          <button className="w-full bg-card border border-border rounded-xl p-4 flex items-center justify-between hover:bg-accent/50 transition-colors">
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Full Name</p>
              <p>{profile.name}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="w-full bg-card border border-border rounded-xl p-4 flex items-center justify-between hover:bg-accent/50 transition-colors">
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Phone Number</p>
              <p>{profile.phone}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="w-full bg-card border border-border rounded-xl p-4 flex items-center justify-between hover:bg-accent/50 transition-colors">
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Gender</p>
              <p className="capitalize">{profile.gender}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Appearance Customization */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Palette className="w-5 h-5 text-primary" />
          <h2>Appearance</h2>
        </div>

        {/* Color Scheme */}
        <div className="bg-card border border-border rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="mb-1">Color Scheme</h3>
              <p className="text-sm text-muted-foreground">Choose your preferred theme</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {colorSchemes.map((scheme) => (
              <button
                key={scheme.id}
                onClick={() => setColorScheme(scheme.id)}
                className={`p-3 rounded-lg border-2 transition-all ${
                  colorScheme === scheme.id
                    ? 'border-primary'
                    : 'border-border'
                }`}
              >
                <div
                  className="w-full h-8 rounded"
                  style={{ backgroundColor: scheme.primary }}
                />
                <p className="text-xs mt-2 text-center">{scheme.name}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Font Size */}
        <div className="bg-card border border-border rounded-xl p-4 space-y-3">
          <div className="flex items-center gap-2">
            <Type className="w-5 h-5 text-primary" />
            <div className="flex-1">
              <h3 className="mb-1">Font Size</h3>
              <p className="text-sm text-muted-foreground">Adjust text size: {fontSize}px</p>
            </div>
          </div>
          <input
            type="range"
            min="14"
            max="20"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Small</span>
            <span>Medium</span>
            <span>Large</span>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Settings className="w-5 h-5 text-primary" />
          <h2>Settings</h2>
        </div>
        <div className="space-y-2">
          <button className="w-full bg-card border border-border rounded-xl p-4 flex items-center justify-between hover:bg-accent/50 transition-colors">
            <span>Notifications</span>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="w-full bg-card border border-border rounded-xl p-4 flex items-center justify-between hover:bg-accent/50 transition-colors">
            <span>Privacy & Security</span>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="w-full bg-card border border-border rounded-xl p-4 flex items-center justify-between hover:bg-accent/50 transition-colors">
            <span>Payment Methods</span>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="w-full bg-card border border-border rounded-xl p-4 flex items-center justify-between hover:bg-accent/50 transition-colors">
            <span>Help & Support</span>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
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
