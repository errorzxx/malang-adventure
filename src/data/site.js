import {
  BadgeCheck,
  BedDouble,
  Binoculars,
  CalendarDays,
  Camera,
  Car,
  CheckCircle2,
  Compass,
  HeartHandshake,
  Hotel,
  MapPinned,
  MessageCircle,
  Mountain,
  Route,
  ShieldCheck,
  Sparkles,
  Star,
  Train,
  Utensils,
  Waves,
} from 'lucide-react';

export const whatsappNumber = '9977110166';
export const whatsappLinkNumber = `91${whatsappNumber}`;
export const whatsappMessage = encodeURIComponent(
  "Hello Malang Adventures! I want to plan a Kashmir trip."
);

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Packages', href: '/#packages' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const heroStats = [
  { value: '9', label: 'day signature route' },
  { value: '6+', label: 'Kashmir highlights' },
  { value: '24/7', label: 'trip assistance' },
  { value: 'Indore', label: 'departure base' },
];

export const trustMarkers = [
  {
    title: 'Doorstep Planning',
    copy: 'Train, hotel, route, food, and transfers arranged into one clear journey.',
    Icon: Route,
  },
  {
    title: 'Local Rhythm',
    copy: 'Plans adapt around snow, road conditions, local union rules, and real travel pace.',
    Icon: Compass,
  },
  {
    title: 'Safer Movement',
    copy: 'Clear policies, verified stays, and practical guidance before every departure.',
    Icon: ShieldCheck,
  },
];

export const experienceSteps = [
  {
    label: '01',
    title: 'Pick Your Base',
    copy: 'Choose the farmhouse route for value or the premium hotel route for a softer landing.',
    Icon: Hotel,
  },
  {
    label: '02',
    title: 'Lock Your Seat',
    copy: 'Confirm the group, travel dates, ID details, and advance booking amount.',
    Icon: Train,
  },
  {
    label: '03',
    title: 'Travel North',
    copy: 'Move from Indore to Jammu, then into Srinagar with sightseeing built around the route.',
    Icon: Car,
  },
  {
    label: '04',
    title: 'Live The Valley',
    copy: 'Dal Lake, Gulmarg, Sonmarg, Pahalgam, bonfire nights, and slow mountain mornings.',
    Icon: Mountain,
  },
];

export const destinationHighlights = [
  {
    slug: 'srinagar',
    name: 'Srinagar',
    region: 'Gardens, Dal Lake, Houseboats',
    image: '/images/srinagar.jpg',
    accent: 'from-cyan-500/70 to-emerald-500/70',
    bestFor: 'First evening, shikara rides, lakeside photos',
    days: '2-3 days',
    Icon: Waves,
  },
  {
    slug: 'gulmarg',
    name: 'Gulmarg',
    region: 'Snow Peaks, Gondola, Pine Forest',
    image: '/images/gulmarg.jpg',
    accent: 'from-sky-500/70 to-indigo-500/70',
    bestFor: 'Snow play, gondola views, wide alpine frames',
    days: '1 day',
    Icon: Mountain,
  },
  {
    slug: 'sonmarg',
    name: 'Sonmarg',
    region: 'Thajiwas Glacier, Sindh River',
    image: '/images/sonmarg.jpg',
    accent: 'from-amber-500/70 to-lime-500/70',
    bestFor: 'Glacier views, meadows, golden hour drives',
    days: '1 day',
    Icon: Binoculars,
  },
  {
    slug: 'pahalgam',
    name: 'Pahalgam',
    region: 'Apple Valley, Betaab Valley, Aru',
    image: '/images/pahalgam.jpg',
    accent: 'from-rose-500/70 to-orange-500/70',
    bestFor: 'Valleys, river bends, relaxed family time',
    days: '1-2 days',
    Icon: Camera,
  },
];

export const inclusionsPreview = [
  { label: 'Train Tickets', Icon: Train },
  { label: 'Hotel Stays', Icon: BedDouble },
  { label: 'Breakfast + Dinner', Icon: Utensils },
  { label: 'Sightseeing Cab', Icon: Car },
  { label: 'Trip Support', Icon: HeartHandshake },
  { label: 'Bonfire Add-on', Icon: Sparkles },
];

export const galleryMoments = [
  {
    title: 'Dal Lake Slow Morning',
    location: 'Srinagar',
    image: '/images/dal-lake.jpg',
    tone: 'Lake',
  },
  {
    title: 'Gulmarg Snowline',
    location: 'Gulmarg',
    image: '/images/gulmarg.jpg',
    tone: 'Snow',
  },
  {
    title: 'Sonmarg Meadow Run',
    location: 'Sonmarg',
    image: '/images/sonmarg.jpg',
    tone: 'Meadow',
  },
  {
    title: 'Pahalgam Valley Light',
    location: 'Pahalgam',
    image: '/images/pahalgam.jpg',
    tone: 'Valley',
  },
  {
    title: 'Indore Departure',
    location: 'Indore',
    image: '/images/indore-station.jpg',
    tone: 'Start',
  },
  {
    title: 'Return With Stories',
    location: 'Jammu to Indore',
    image: '/images/train-return.jpg',
    tone: 'Return',
  },
];

export const testimonials = [
  {
    quote:
      'The route felt thoughtfully paced. We saw every major place and still had enough breathing room for photos, food, and snow.',
    name: 'Ayesha Khan',
    trip: 'Premium Kashmir Tour',
    rating: 5,
  },
  {
    quote:
      'Clear payment policy, proper hotel coordination, and very responsive WhatsApp support. It felt easy from Indore itself.',
    name: 'Rohit Jain',
    trip: 'Farmhouse Kashmir Tour',
    rating: 5,
  },
  {
    quote:
      'The best part was how they handled weather changes. No confusion, just practical updates and a smooth backup plan.',
    name: 'Sana Qureshi',
    trip: 'Winter Group Batch',
    rating: 5,
  },
];

export const whyChooseUs = [
  'Indore-based planning with direct WhatsApp communication',
  'Transparent inclusions, exclusions, cancellation, and weather policy',
  'Balanced itineraries built for families, friends, couples, and student groups',
  'Photo-friendly routes across Dal Lake, Gulmarg, Sonmarg, and Pahalgam',
];

export const faqs = [
  {
    question: 'Are train tickets guaranteed?',
    answer:
      'Train tickets depend on availability and railway confirmation. The booking team shares the best available option and keeps the group updated.',
  },
  {
    question: 'Can the itinerary change?',
    answer:
      'Yes. Kashmir routes can shift because of snow, landslides, local restrictions, or road conditions. Safety and feasibility come first.',
  },
  {
    question: 'Is this good for families?',
    answer:
      'Yes. The route is designed for mixed groups with comfortable stays, planned sightseeing, and practical travel buffers.',
  },
  {
    question: 'How do I book?',
    answer:
      'Send your date, traveler count, preferred package, and ID details on WhatsApp. The team will confirm availability and payment steps.',
  },
];

export const pageKpis = [
  { label: 'Route Style', value: 'Rail + Road', Icon: Route },
  { label: 'Core Season', value: 'Winter + Summer', Icon: CalendarDays },
  { label: 'Support', value: 'WhatsApp First', Icon: BadgeCheck },
  { label: 'Trip Mood', value: 'Scenic + Social', Icon: Star },
];

export const bookingChecklist = [
  'Traveler names and valid government ID proof',
  'Preferred travel month and flexible backup dates',
  'Package choice: Farmhouse or Premium 3-star',
  'Room sharing preference and group size',
  'Any senior citizen, child, or special food requirement',
];

export const contactCards = [
  {
    title: 'Trip Planning',
    copy: 'Ask about dates, seat availability, package differences, and custom group plans.',
    cta: 'Start WhatsApp Chat',
    href: `https://wa.me/${whatsappLinkNumber}?text=${whatsappMessage}`,
    Icon: MessageCircle,
  },
  {
    title: 'Visit Base',
    copy: 'Malang Adventure Tour & Travels operates from Indore, Madhya Pradesh.',
    cta: 'View Destinations',
    href: '/destinations',
    Icon: MapPinned,
  },
  {
    title: 'Before Booking',
    copy: 'Keep your ID proof, traveler count, and expected date range ready.',
    cta: 'See Packages',
    href: '/#packages',
    Icon: CheckCircle2,
  },
];
