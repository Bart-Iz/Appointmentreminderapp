import { Clock, Calendar, ChevronRight } from 'lucide-react';

export function History() {
  const appointments = [
    {
      id: 1,
      business: 'Classic Cuts Barbershop',
      service: 'Haircut & Beard Trim',
      date: '2026-04-08',
      time: '2:00 PM',
      price: 40,
      image: '💈',
      status: 'upcoming'
    },
    {
      id: 2,
      business: 'Classic Cuts Barbershop',
      service: 'Haircut',
      date: '2026-03-06',
      time: '2:00 PM',
      price: 35,
      image: '💈',
      status: 'completed'
    },
    {
      id: 3,
      business: 'Elegance Hair Salon',
      service: 'Cut & Color',
      date: '2026-01-15',
      time: '10:00 AM',
      price: 120,
      image: '💇‍♀️',
      status: 'completed'
    },
    {
      id: 4,
      business: 'Serenity Spa & Wellness',
      service: 'Deep Tissue Massage',
      date: '2025-12-14',
      time: '3:00 PM',
      price: 90,
      image: '🧖‍♀️',
      status: 'completed'
    },
    {
      id: 5,
      business: 'QuickFix Auto Service',
      service: 'Oil Change',
      date: '2025-10-20',
      time: '9:00 AM',
      price: 45,
      image: '🔧',
      status: 'completed'
    }
  ];

  const getDaysAgo = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date('2026-04-06');
    const diffTime = today.getTime() - date.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getDaysUntil = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date('2026-04-06');
    const diffTime = date.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const upcomingAppointments = appointments.filter(apt => apt.status === 'upcoming');
  const pastAppointments = appointments.filter(apt => apt.status === 'completed');

  return (
    <div className="p-4 space-y-6 pb-20">
      {/* Header */}
      <div className="pt-4">
        <h1 className="mb-1">My Appointments</h1>
        <p className="text-muted-foreground">View your booking history</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
          <p className="text-2xl mb-1">{upcomingAppointments.length}</p>
          <p className="text-sm text-muted-foreground">Upcoming</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <p className="text-2xl mb-1">{pastAppointments.length}</p>
          <p className="text-sm text-muted-foreground">Completed</p>
        </div>
      </div>

      {/* Upcoming Appointments */}
      {upcomingAppointments.length > 0 && (
        <div className="space-y-3">
          <h2>Upcoming</h2>
          {upcomingAppointments.map((apt) => (
            <div
              key={apt.id}
              className="bg-card border-2 border-primary/30 rounded-xl p-4"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{apt.image}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="mb-1 truncate">{apt.business}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{apt.service}</p>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="flex items-center gap-1 text-primary">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(apt.date).toLocaleDateString('en-US', {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <span className="text-muted-foreground">•</span>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{apt.time}</span>
                    </div>
                  </div>
                  <p className="text-xs text-primary mt-2">
                    In {getDaysUntil(apt.date)} days
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Past Appointments */}
      <div className="space-y-3">
        <h2>Past Visits</h2>
        {pastAppointments.map((apt) => (
          <div
            key={apt.id}
            className="bg-card border border-border rounded-xl p-4"
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
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
