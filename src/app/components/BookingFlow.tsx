import { useState } from 'react';
import { X, Calendar, Clock, User, Check } from 'lucide-react';

interface BookingFlowProps {
  business: any;
  onClose: () => void;
  userProfile: any;
}

export function BookingFlow({ business, onClose, userProfile }: BookingFlowProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const services = business.services.map((service: string) => ({
    name: service,
    duration: business.avgDuration,
    price: service.includes('Couples') ? 150 : service.includes('Color') ? 85 : 35
  }));

  const availableDates = [
    { date: '2026-04-08', day: 'Tue', dayNum: '8' },
    { date: '2026-04-09', day: 'Wed', dayNum: '9' },
    { date: '2026-04-10', day: 'Thu', dayNum: '10' },
    { date: '2026-04-11', day: 'Fri', dayNum: '11' },
    { date: '2026-04-12', day: 'Sat', dayNum: '12' }
  ];

  const availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleConfirm = () => {
    setStep(4);
  };

  const renderStep = () => {
    if (step === 1) {
      return (
        <div className="space-y-4">
          <div>
            <h2 className="mb-1">Select a Service</h2>
            <p className="text-sm text-muted-foreground">Choose what you need</p>
          </div>
          <div className="space-y-2">
            {services.map((service: any, idx: number) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedService(service.name);
                  setStep(2);
                }}
                className={`w-full bg-card border rounded-xl p-4 flex items-center justify-between text-left hover:bg-accent/50 transition-colors ${
                  selectedService === service.name ? 'border-primary bg-primary/5' : 'border-border'
                }`}
              >
                <div>
                  <h3 className="mb-1">{service.name}</h3>
                  <p className="text-sm text-muted-foreground">{service.duration} min</p>
                </div>
                <p className="font-medium">${service.price}</p>
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (step === 2) {
      return (
        <div className="space-y-4">
          <div>
            <h2 className="mb-1">Pick a Date</h2>
            <p className="text-sm text-muted-foreground">When would you like to come in?</p>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {availableDates.map((date) => (
              <button
                key={date.date}
                onClick={() => {
                  setSelectedDate(date.date);
                  setStep(3);
                }}
                className={`p-3 rounded-xl border flex flex-col items-center gap-1 hover:bg-accent/50 transition-colors ${
                  selectedDate === date.date
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-card'
                }`}
              >
                <span className="text-xs text-muted-foreground">{date.day}</span>
                <span className="text-xl">{date.dayNum}</span>
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (step === 3) {
      return (
        <div className="space-y-4">
          <div>
            <h2 className="mb-1">Choose a Time</h2>
            <p className="text-sm text-muted-foreground">Available time slots</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {availableTimes.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`p-3 rounded-xl border text-sm hover:bg-accent/50 transition-colors ${
                  selectedTime === time
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-card'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
          {selectedTime && (
            <div className="space-y-3 pt-4">
              <div className="bg-accent/50 border border-border rounded-xl p-4 space-y-2">
                <h3>Booking Summary</h3>
                <div className="space-y-1 text-sm">
                  <p className="text-muted-foreground">
                    <span className="text-foreground">Service:</span> {selectedService}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-foreground">Date:</span>{' '}
                    {new Date(selectedDate!).toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-foreground">Time:</span> {selectedTime}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-foreground">Customer:</span> {userProfile.name}
                  </p>
                </div>
              </div>
              <button
                onClick={handleConfirm}
                className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-lg"
              >
                Confirm Booking
              </button>
            </div>
          )}
        </div>
      );
    }

    if (step === 4) {
      return (
        <div className="flex flex-col items-center justify-center py-12 space-y-4">
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center">
            <Check className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-center">Booking Confirmed!</h2>
          <p className="text-center text-muted-foreground px-8">
            Your appointment at {business.name} has been scheduled.
          </p>
          <div className="bg-accent/50 border border-border rounded-xl p-4 w-full max-w-sm space-y-2">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Date & Time</p>
                <p>
                  {new Date(selectedDate!).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                  })}{' '}
                  at {selectedTime}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Service</p>
                <p>{selectedService}</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 w-full max-w-sm">
            <p className="text-sm text-blue-700 dark:text-blue-300">
              📅 We'll remind you about your next visit in {business.reminderInterval} days based on
              typical {business.category.toLowerCase()} service intervals.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-full max-w-sm bg-primary text-primary-foreground px-4 py-3 rounded-lg"
          >
            Done
          </button>
        </div>
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="border-b border-border p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{business.image}</span>
          <div>
            <h2>{business.name}</h2>
            <p className="text-sm text-muted-foreground">{business.category}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-accent rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Progress */}
      {step < 4 && (
        <div className="px-4 py-3 border-b border-border">
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1 flex-1 rounded-full ${
                  s <= step ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">{renderStep()}</div>

      {/* Navigation */}
      {step > 1 && step < 4 && (
        <div className="border-t border-border p-4">
          <button
            onClick={() => setStep(step - 1)}
            className="w-full bg-secondary text-secondary-foreground px-4 py-3 rounded-lg"
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}
