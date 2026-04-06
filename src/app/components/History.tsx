import { Clock, Calendar, ChevronRight } from 'lucide-react';

export function History() {
  const appointments = [
    {
      id: 1,
      business: 'Classic Cuts Barbershop',
      service: 'Haircut',
      date: '2026-03-06',
      time: '2:00 PM',
      price: 35,
      image: '💈',
      category: 'Barber',
      reminderSent: true,
      nextReminderDate: '2026-04-05'
    },
    {
      id: 2,
      business: 'Elegance Hair Salon',
      service: 'Cut & Color',
      date: '2026-01-15',
      time: '10:00 AM',
      price: 120,
      image: '💇‍♀️',
      category: 'Hair Salon',
      reminderSent: false,
      nextReminderDate: '2026-03-16'
    },
    {
      id: 3,
      business: 'QuickFix Auto Service',
      service: 'Oil Change',
      date: '2025-10-20',
      time: '9:00 AM',
      price: 45,
      image: '🔧',
      category: 'Auto Service',
      reminderSent: false,
      nextReminderDate: '2026-04-18'
    },
    {
      id: 4,
      business: 'Serenity Spa & Wellness',
      service: 'Deep Tissue Massage',
      date: '2025-12-14',
      time: '3:00 PM',
      price: 90,
      image: '🧖‍♀️',
      category: 'Spa',
      reminderSent: false,
      nextReminderDate: '2026-03-14'
    }
  ];

  const getDaysAgo = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date('2026-04-06');
    const diffTime = Math.abs(today.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const groupedAppointments = {
    thisMonth: appointments.filter(apt => {
      const date = new Date(apt.date);
      return date.getMonth() === 2 && date.getFullYear() === 2026;
    }),
    earlier: appointments.filter(apt => {
      const date = new Date(apt.date);
      return !(date.getMonth() === 2 && date.getFullYear() === 2026);
    })
  };

  return (
    <div className="p-4 space-y-6 pb-20">
      {/* Header */}
      <div className="pt-4">
        <h1 className="mb-1">Appointment History</h1>
        <p className="text-muted-foreground">Track your past visits</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
          <p className="text-2xl mb-1">{appointments.length}</p>
          <p className="text-sm text-muted-foreground">Total Visits</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <p className="text-2xl mb-1">
            {appointments.filter(a => a.reminderSent).length}
          </p>
          <p className="text-sm text-muted-foreground">Active Reminders</p>
        </div>
      </div>

      {/* This Month */}
      {groupedAppointments.thisMonth.length > 0 && (
        <div className="space-y-3">
          <h3>March 2026</h3>
          {groupedAppointments.thisMonth.map((apt) => (
            <div
              key={apt.id}
              className="bg-card border border-border rounded-xl p-4 space-y-3"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{apt.image}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="mb-1 truncate">{apt.business}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{apt.service}</p>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(apt.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{apt.time}</span>
                    </div>
                    <span>•</span>
                    <span>${apt.price}</span>
                  </div>
                </div>
              </div>
              {apt.reminderSent && (
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-3 py-2 text-sm text-blue-700 dark:text-blue-300">
                  ✓ Reminder sent ({getDaysAgo(apt.date)} days ago)
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Earlier */}
      {groupedAppointments.earlier.length > 0 && (
        <div className="space-y-3">
          <h3>Earlier</h3>
          {groupedAppointments.earlier.map((apt) => (
            <div
              key={apt.id}
              className="bg-card border border-border rounded-xl p-4 space-y-3"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{apt.image}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="mb-1 truncate">{apt.business}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{apt.service}</p>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(apt.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <span>•</span>
                    <span>${apt.price}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {getDaysAgo(apt.date)} days ago
                  </p>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                Next reminder: {new Date(apt.nextReminderDate).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
