
import React from 'react';
import { Dumbbell, Clock, Users, ShieldCheck, HeartPulse, Zap } from 'lucide-react';
import { NavItem, Review, Service, GalleryImage } from './types';

export const GYM_INFO = {
  name: "Oxygen Gym Karachi",
  address: "GPC 1 Scheme 24, Block 1, Gulshan-e-Iqbal, Karachi, Pakistan",
  phone: "+92 316 2128803",
  googleRating: 4.6,
  reviewCount: 19,
  hours: "Open 24/7",
  locationDetails: "Located inside Gaming Nexus, Gulshan-e-Iqbal",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Reviews", path: "/reviews" },
  { label: "Contact", path: "/contact" },
];

export const HIGHLIGHTS = [
  {
    title: "24/7 Open",
    description: "Your fitness doesn't follow a clock. Train whenever you want.",
    icon: <Clock className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Modern Equipment",
    description: "Equipped with state-of-the-art machines for all muscle groups.",
    icon: <Dumbbell className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Expert Trainers",
    description: "Professional guidance to ensure you reach your goals safely.",
    icon: <Users className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Motivating Environment",
    description: "A clean, high-energy atmosphere that keeps you coming back.",
    icon: <Zap className="w-8 h-8 text-blue-500" />,
  },
];

export const REVIEWS: Review[] = [
  {
    name: "Sarim Ansari",
    rating: 5,
    text: "Clean environment, modern equipment, and expert trainers who really care. Great place for serious fitness results.",
  },
  {
    name: "Ali Zia",
    rating: 5,
    text: "Love working out at Oxygen Gym 24/7! Trainers always guide and motivate me.",
  },
  {
    name: "Sabiha",
    rating: 5,
    text: "Top-notch equipment & friendly staff. The atmosphere is motivating & supportive.",
  },
  {
    name: "Faraz Ahmed",
    rating: 4,
    text: "Great location in Gulshan. The 24/7 access is a lifesaver for my busy schedule.",
  },
  {
    name: "Kashif Ali",
    rating: 5,
    text: "The best gym in the area for weight training. Very professional staff.",
  }
];

export const SERVICES: Service[] = [
  {
    id: "weight-training",
    title: "Weight Training",
    description: "Extensive selection of free weights and specialized machines for hypertrophy and strength building.",
    icon: "Dumbbell",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "cardio",
    title: "Cardio Workouts",
    description: "High-end treadmills, ellipticals, and cycles to improve your cardiovascular endurance.",
    icon: "HeartPulse",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "personal-training",
    title: "Personal Training",
    description: "One-on-one sessions with our certified trainers tailored to your specific fitness goals.",
    icon: "Users",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
  },
];

export const GALLERY: GalleryImage[] = [
  { url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800", alt: "Gym Interior", category: "Interior" },
  { url: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=800", alt: "Weights Section", category: "Equipment" },
  { url: "https://images.unsplash.com/photo-1574673139737-c2021c2291f1?auto=format&fit=crop&q=80&w=800", alt: "Cardio Machines", category: "Equipment" },
  { url: "https://images.unsplash.com/photo-1583454110551-21f2fa2adfcd?auto=format&fit=crop&q=80&w=800", alt: "Training Session", category: "Training" },
  { url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800", alt: "Yoga Space", category: "Interior" },
  { url: "https://images.unsplash.com/photo-1623874514711-0f321325f318?auto=format&fit=crop&q=80&w=800", alt: "Personal Coaching", category: "Training" },
];
