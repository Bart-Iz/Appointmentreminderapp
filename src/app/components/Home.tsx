import { Bell, Calendar, ChevronRight, Sparkles } from 'lucide-react';

interface HomeProps {
  onBookNow: () => void;
}

export function Home({ onBookNow }: HomeProps) {
  const upcomingAppointments = [
    {
      id: 1,
      business: 'Classic Cuts Barbershop',
      service: 'Haircut & Beard Trim',
      date: '2026-04-08',
      time: '2:00 PM',
      image: '💈'
    }
  ];

  const reminders = [
    {
      id: 1,
      type: 'overdue',
      business: 'Classic Cuts Barbershop',
      message: "Hello! It's been a month since your last visit. Maybe it's time for a new haircut?",
      lastVisit: '2026-03-06',
      daysAgo: 31
    },
    {
      id: 2,
      type: 'seasonal',
      business: 'Serenity Spa & Wellness',
      message: "Valentine's Day is coming up! Book a couples massage for you and your partner.",
      occasion: "Valentine's Day",
      date: '2026-02-14'
    }
  ];

  return (
    <div className="p-4 space-y-6 pb-20">
      {/* Header */}
      <div className="pt-4">
        <h1 className="mb-1">Welcome back, Alex</h1>
        <p className="text-muted-foreground">Manage your appointments</p>
      </div>

      {/* Smart Reminders */}
      {reminders.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-primary" />
            <h2>Smart Reminders</h2>
          </div>
          {reminders.map((reminder) => (
            <div
              key={reminder.id}
              className="bg-accent/50 border border-border rounded-xl p-4 space-y-3"
            >
              {reminder.type === 'seasonal' && (
                <div className="flex items-center gap-2 text-primary">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm">Special Occasion</span>
                </div>
              )}
              <div>
                <h3 className="mb-1">{reminder.business}</h3>
                <p className="text-sm text-muted-foreground">{reminder.message}</p>
              </div>
              {reminder.type === 'overdue' && (
                <p className="text-xs text-muted-foreground">
                  Last visit: {new Date(reminder.lastVisit).toLocaleDateString()} ({reminder.daysAgo} days ago)
                </p>
              )}
              <button
                onClick={onBookNow}
                className="w-full bg-primary text-primary-foreground px-4 py-2.5 rounded-lg flex items-center justify-center gap-2"
              >
                Book Now
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Upcoming Appointments */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          <h2>Upcoming</h2>
        </div>
        {upcomingAppointments.length > 0 ? (
          upcomingAppointments.map((apt) => (
            <div
              key={apt.id}
              className="bg-card border border-border rounded-xl p-4 flex items-center gap-4"
            >
              <div className="text-4xl">{apt.image}</div>
              <div className="flex-1">
                <h3 className="mb-1">{apt.business}</h3>
                <p className="text-sm text-muted-foreground mb-2">{apt.service}</p>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-muted-foreground">
                    {new Date(apt.date).toLocaleDateString('en-US', {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{apt.time}</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <p>No upcoming appointments</p>
            <button
              onClick={onBookNow}
              className="mt-4 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg"
            >
              Book Your First Appointment
            </button>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={onBookNow}
          className="bg-primary text-primary-foreground p-4 rounded-xl text-left"
        >
          <Calendar className="w-6 h-6 mb-2" />
          <p>Book New</p>
        </button>
        <button className="bg-card border border-border p-4 rounded-xl text-left">
          <Bell className="w-6 h-6 mb-2" />
          <p>Reminders</p>
        </button>
      </div>
    </div>
  );
}
