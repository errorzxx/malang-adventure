import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  CalendarDays,
  CheckCircle2,
  Mail,
  MessageSquare,
  Phone,
  Send,
  User,
  Users,
} from 'lucide-react';
import { tourPackages } from '../../data/packages';
import { bookingChecklist, whatsappLinkNumber } from '../../data/site';

const defaultFormData = {
  name: '',
  phone: '',
  email: '',
  travelers: '',
  travelDate: '',
  packageName: 'Premium Kashmir Tour (3★ Hotel)',
  message: '',
};

export default function InquiryForm({ compact = false }) {
  const [formData, setFormData] = useState(defaultFormData);
  const [touched, setTouched] = useState(false);

  const canSubmit = formData.name.trim() && formData.phone.trim();

  const whatsappLink = useMemo(() => {
    const text = [
      '*New Inquiry for Malang Adventures*',
      '',
      `*Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      `*Email:* ${formData.email || 'Not shared'}`,
      `*Travelers:* ${formData.travelers || 'Not sure yet'}`,
      `*Travel Date:* ${formData.travelDate || 'Flexible'}`,
      `*Package:* ${formData.packageName}`,
      `*Requirement:* ${formData.message || 'Please help me plan the trip.'}`,
    ].join('\n');

    return `https://wa.me/${whatsappLinkNumber}?text=${encodeURIComponent(text)}`;
  }, [formData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    if (!canSubmit) {
      event.preventDefault();
      setTouched(true);
    }
  };

  return (
    <section
      id="contact"
      className="relative z-10 bg-slate-950 px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {!compact && (
          <div className="mb-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.34em] text-amber-200">
                Plan Your Journey
              </p>
              <h2 className="mt-4 font-heading text-4xl font-black leading-tight text-white sm:text-6xl">
                Tell us the date. We will shape the route.
              </h2>
            </div>
            <p className="max-w-2xl text-sm font-medium leading-7 text-white/62 lg:ml-auto">
              Share your group size, preferred stay style, and travel window. The WhatsApp
              message is generated instantly with all your details.
            </p>
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <motion.aside
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-white/12 bg-white/[0.06] p-6 text-white backdrop-blur-xl"
          >
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-200">
              Booking Ready
            </p>
            <h3 className="mt-4 font-heading text-3xl font-black">Keep these details close.</h3>
            <div className="mt-7 space-y-3">
              {bookingChecklist.map((item) => (
                <div key={item} className="flex gap-3 border border-white/8 bg-slate-950/35 p-4">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-300" />
                  <p className="text-sm font-semibold leading-6 text-white/70">{item}</p>
                </div>
              ))}
            </div>
          </motion.aside>

          <motion.form
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-white/12 bg-slate-950/74 p-4 shadow-2xl shadow-black/25 backdrop-blur-2xl sm:p-6"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field
                label="Full Name"
                icon={User}
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Ali Khan"
                required
                invalid={touched && !formData.name.trim()}
              />
              <Field
                label="Phone Number"
                icon={Phone}
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 99771 10166"
                required
                invalid={touched && !formData.phone.trim()}
              />
              <Field
                label="Email Address"
                icon={Mail}
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="ali@example.com"
              />
              <Field
                label="Travelers"
                icon={Users}
                name="travelers"
                value={formData.travelers}
                onChange={handleInputChange}
                placeholder="4 adults"
              />
              <Field
                label="Travel Date"
                icon={CalendarDays}
                name="travelDate"
                value={formData.travelDate}
                onChange={handleInputChange}
                placeholder="January / flexible"
              />
              <div className="space-y-2">
                <label className="ml-1 text-[0.65rem] font-black uppercase tracking-[0.2em] text-cyan-200">
                  Package
                </label>
                <select
                  name="packageName"
                  value={formData.packageName}
                  onChange={handleInputChange}
                  className="h-[54px] w-full border border-white/10 bg-white/6 px-4 text-sm font-bold text-white outline-none transition-colors focus:border-cyan-300"
                >
                  {tourPackages.map((pkg) => (
                    <option key={pkg.id} value={pkg.title} className="bg-slate-950">
                      {pkg.title}
                    </option>
                  ))}
                  <option value="Custom Kashmir Group Plan" className="bg-slate-950">
                    Custom Kashmir Group Plan
                  </option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="ml-1 text-[0.65rem] font-black uppercase tracking-[0.2em] text-cyan-200">
                  Requirements
                </label>
                <div className="relative">
                  <MessageSquare
                    size={18}
                    className="absolute left-4 top-5 text-white/35"
                  />
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about room sharing, group type, budget, or must-see places..."
                    className="w-full resize-none border border-white/10 bg-white/6 py-4 pl-12 pr-4 text-sm font-semibold text-white outline-none transition-colors placeholder:text-white/25 focus:border-cyan-300"
                  />
                </div>
              </div>
            </div>

            <a
              href={canSubmit ? whatsappLink : '#contact'}
              target={canSubmit ? '_blank' : undefined}
              rel={canSubmit ? 'noreferrer' : undefined}
              onClick={handleSubmit}
              className="mt-5 flex w-full items-center justify-center gap-3 bg-white px-5 py-5 text-sm font-black uppercase tracking-[0.18em] text-slate-950 shadow-xl shadow-black/20 transition-transform hover:-translate-y-0.5"
            >
              Send Inquiry to WhatsApp
              <Send size={18} />
            </a>

            {touched && !canSubmit && (
              <p className="mt-4 text-center text-xs font-bold text-amber-200">
                Name and phone number are required before WhatsApp opens.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  icon: Icon,
  label,
  invalid = false,
  name,
  onChange,
  placeholder,
  required = false,
  type = 'text',
  value,
}) {
  return (
    <div className="space-y-2">
      <label className="ml-1 text-[0.65rem] font-black uppercase tracking-[0.2em] text-cyan-200">
        {label}
        {required ? <span className="text-amber-200"> *</span> : null}
      </label>
      <div className="relative">
        <Icon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/35" />
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={[
            'h-[54px] w-full border bg-white/6 py-4 pl-12 pr-4 text-sm font-semibold text-white outline-none transition-colors placeholder:text-white/25 focus:border-cyan-300',
            invalid ? 'border-amber-300' : 'border-white/10',
          ].join(' ')}
        />
      </div>
    </div>
  );
}
