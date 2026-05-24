import React, { useState, useEffect, useRef } from 'react';
import { 
  Home, 
  Dumbbell, 
  Camera, 
  BarChart2, 
  User, 
  Bell, 
  Flame, 
  Watch, 
  ChevronRight, 
  Play, 
  Target, 
  Search, 
  Filter, 
  Sparkles, 
  Activity, 
  Trophy,
  Calendar,
  Settings,
  X,
  Scan,
  Users,
  Plus,
  MessageSquare,
  MapPin,
  Loader2,
  Check,
  Heart,
  Zap,
  Clock,
  LogOut,
  Trash2,
  ChevronLeft,
  ArrowLeft,
  PlayCircle,
  Award,
  Lock,
  Crown,
  Shield,
  FileText,
  UserPlus,
  Share2,
  Smartphone
} from 'lucide-react';

// --- Theme Constants ---
const COLORS = {
  bgBase: '#000000',
  bgCard: '#111111',
  bgCardHover: '#1A1A1A',
  primary: '#FF5500',
  primaryDim: 'rgba(255, 85, 0, 0.15)',
  textMain: '#FFFFFF',
  textMuted: '#9CA3AF',
  border: 'rgba(255,255,255,0.08)'
};

// --- Mock Data: Challenges ---
const CHALLENGES = [
  { id: 1, title: 'May 300 3s', goal: '300 Made', current: 185, total: 300, unit: 'Made', participants: '14,203', daysLeft: 5, color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/20', icon: Target, gradient: 'from-orange-600 to-orange-400' },
  { id: 2, title: '10K Touch Week', goal: '10,000 Touches', current: 4200, total: 10000, unit: 'Touches', participants: '8,941', daysLeft: 2, color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20', icon: Activity, gradient: 'from-blue-600 to-blue-400' },
  { id: 3, title: 'Spring Break Hustle', goal: '20 Hours', current: 8.5, total: 20, unit: 'Hours', participants: '22,105', daysLeft: 12, color: 'text-green-500', bg: 'bg-green-500/10', border: 'border-green-500/20', icon: Clock, gradient: 'from-green-600 to-green-400' },
  { id: 4, title: 'Weekend Warrior', goal: '3 Days Active', current: 1, total: 3, unit: 'Days', participants: '5,022', daysLeft: 2, color: 'text-purple-500', bg: 'bg-purple-500/10', border: 'border-purple-500/20', icon: Flame, gradient: 'from-purple-600 to-purple-400' },
  { id: 5, title: 'Vertical Bound', goal: '1,000 Jumps', current: 250, total: 1000, unit: 'Jumps', participants: '3,490', daysLeft: 15, color: 'text-yellow-500', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', icon: Trophy, gradient: 'from-yellow-600 to-yellow-400' }
];

// --- Mock Data: Programs ---
const PROGRAMS = [
  { 
    id: 1, 
    title: 'Elite Guard Finishing', 
    tag: 'PRO SERIES', 
    desc: 'Transform your mechanics and consistency at the rim.', 
    duration: '25 Min', 
    drillsCount: 4, 
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800', 
    color: 'from-orange-700 to-amber-900',
    steps: [
      { title: 'Mikan Drill', desc: 'Stand directly under the basket. Alternate right-handed and left-handed layups off the glass, catching the ball out of the net while keeping it above your shoulders. Focus on footwork: step with your inside foot, jump off the outside foot. Keep your eyes locked on the top corner of the backboard square.', time: '2:00', seconds: 120 },
      { title: 'Euro Steps', desc: 'Start at the 3pt line. Drive hard to the free-throw line, take one hard step in one direction to freeze the imaginary defender, then a long, exaggerated lateral step in the opposite direction. Finish with a high, soft release off the glass. Alternate sides each rep to build ambidexterity.', time: '3:00', seconds: 180 },
      { title: 'Proximity
