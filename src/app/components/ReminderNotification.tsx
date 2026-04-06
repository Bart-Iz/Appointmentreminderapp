import { X, Bell, Sparkles } from 'lucide-react';

interface ReminderNotificationProps {
  reminder: {
    id: number;
    type: 'time-based' | 'seasonal';
    business: string;
    message: string;
    lastVisit?: string;
    daysAgo?: number;
    occasion?: string;
  };
  onDismiss: () => void;
  onBookNow: () => void;
}

export function ReminderNotification({ reminder, onDismiss, onBookNow }: ReminderNotificationProps) {
  return (
    <div className="fixed top-4 left-4 right-4 z-50 animate-slide-down max-w-md mx-auto">
      <div className="bg-card border-2 border-primary shadow-2xl rounded-xl overflow-hidden">
        {/* Header */}
        <div className="bg-primary/10 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {reminder.type === 'seasonal' ? (
              <Sparkles className="w-5 h-5 text-primary" />
            ) : (
              <Bell className="w-5 h-5 text-primary" />
            )}
            <h3 className="text-primary">
              {reminder.type === 'seasonal' ? 'Special Occasion' : 'Reminder'}
            </h3>
          </div>
          <button
            onClick={onDismiss}
            className="w-6 h-6 rounded-full hover:bg-primary/20 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <div>
            <h3 className="mb-2">{reminder.business}</h3>
            <p className="text-sm text-muted-foreground">{reminder.message}</p>
          </div>

          {reminder.type === 'time-based' && reminder.lastVisit && (
            <p className="text-xs text-muted-foreground">
              Last visit: {new Date(reminder.lastVisit).toLocaleDateString()} ({reminder.daysAgo} days ago)
            </p>
          )}

          <button
            onClick={onBookNow}
            className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
