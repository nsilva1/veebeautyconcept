import { useState } from 'react';
import { Calendar, Clock, User, Phone, CheckCircle2, Sparkles } from 'lucide-react';

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    phone: ''
  });

  const today = new Date().toISOString().split('T')[0];

  const services = [
    "Braiding & Extensions", "Makeup", "Nail Services", 
    "Wig Installation", "Lashes & Brows"
  ];

  const timeSlots = ["08:30 AM","09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM",];

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const isContactValid = formData.name.trim() !== '' && formData.phone.trim() !== '';

  return (
    <section id="book" className="py-20 px-4 bg-secondary/10">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        
        {/* Progress Bar */}
        <div className="bg-primary p-6 text-white text-center">
          <h2 className="text-2xl font-bold">Book Your Experience</h2>
          <div className="flex justify-center gap-2 mt-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`h-1.5 w-12 rounded-full ${step >= i ? 'bg-white' : 'bg-white/30'}`} />
            ))}
          </div>
        </div>

        <div className="p-8 md:p-12">
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Sparkles className="text-primary" /> Select a Service
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((s) => (
                  <button
                    key={s}
                    onClick={() => { setFormData({ ...formData, service: s }); handleNext(); }}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      formData.service === s ? 'border-primary bg-primary/5' : 'border-gray-100 hover:border-primary/50'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Date & Time */}
          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Clock className="text-primary" /> Choose Date & Time
              </h3>
              <div className="space-y-4">
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input 
                    type="date"
                    min={today} 
                    className="w-full pl-10 p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none"
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((t) => (
                    <button
                      key={t}
                      onClick={() => setFormData({...formData, time: t})}
                      className={`p-2 text-sm rounded-md border ${formData.time === t ? 'bg-primary text-white' : 'bg-gray-50'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <button onClick={handleBack} className="flex-1 p-3 rounded-lg bg-gray-100 font-semibold">Back</button>
                <button 
                  onClick={handleNext} 
                  disabled={!formData.date || !formData.time}
                  className="flex-1 p-3 rounded-lg bg-primary text-white font-semibold disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Contact Info */}
          {step === 3 && (
            <div className="space-y-6 text-center">
              <h3 className="text-xl font-semibold text-left">Confirm Details</h3>
              <div className="space-y-4">
                <div className='flex items-center gap-3'>
                    <User />
                    <input 
                  placeholder="Your Full Name"
                  required
                  className="w-full p-3 rounded-lg border border-gray-200"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                </div>
                <div className='flex items-center gap-3'>
                    <Phone />
                    <input 
                  placeholder="Phone Number (Preferably WhatsApp)"
                  required
                  className="w-full p-3 rounded-lg border border-gray-200"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                </div>
              </div>
              <button 
                onClick={() => setStep(4)}
                disabled={!isContactValid}
                className="w-full cursor-pointer p-4 rounded-lg bg-accent text-white font-bold text-lg shadow-lg hover:scale-[1.02] transition"
              >
                Confirm Appointment
              </button>
            </div>
          )}

          {/* Step 4: Success Message */}
          {step === 4 && (
            <div className="text-center space-y-4 py-8">
              <div className="flex justify-center">
                <CheckCircle2 size={80} className="text-green-500 animate-bounce" />
              </div>
              <h3 className="text-3xl font-bold">Booking Confirmed!</h3>
              <p className="text-gray-600">
                Thank you, <span className='font-bold'>{formData.name}</span>. We'll see you on <span className='font-bold'>{new Date(formData.date).toLocaleDateString('en-US', {month:'short', day:'numeric'})}</span> at <span className='font-bold'>{formData.time}</span> for your <span className='font-bold'>{formData.service}</span> appointment.
              </p>
              <button onClick={() => {setFormData({...formData, name: '', phone: '', date: '', time: '', service: ''}); setStep(1)}} className="text-primary font-semibold hover:underline cursor-pointer">Book another session</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingForm;