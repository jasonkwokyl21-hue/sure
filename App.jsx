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
      { title: 'Proximity Finishing', desc: 'Start 8 feet from the basket. Attack the rim from different angles, practicing footwork and shot release from mid-range before finishing at the basket. Build consistency from multiple attack angles.', time: '3:00', seconds: 180 }
    ]
  }
];

// --- Main App Component ---
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <div style={{ backgroundColor: COLORS.bgBase }} className="min-h-screen text-white">
      {/* Navigation */}
      <nav style={{ backgroundColor: COLORS.bgCard, borderBottomColor: COLORS.border }} className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold" style={{ color: COLORS.primary }}>SURE</h1>
          <div className="flex gap-4">
            <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 px-4 py-2 rounded hover:opacity-80">
              <Home size={20} /> Home
            </button>
            <button onClick={() => setCurrentPage('challenges')} className="flex items-center gap-2 px-4 py-2 rounded hover:opacity-80">
              <Trophy size={20} /> Challenges
            </button>
            <button onClick={() => setCurrentPage('programs')} className="flex items-center gap-2 px-4 py-2 rounded hover:opacity-80">
              <Dumbbell size={20} /> Programs
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'challenges' && <ChallengesPage />}
        {currentPage === 'programs' && <ProgramsPage />}
      </main>
    </div>
  );
}

// --- Home Page Component ---
function HomePage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Welcome to SURE</h2>
      <p style={{ color: COLORS.textMuted }} className="text-lg mb-8">
        Your ultimate basketball training platform. Track challenges, complete programs, and level up your game.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div style={{ backgroundColor: COLORS.bgCard, borderColor: COLORS.border }} className="border rounded-lg p-6">
          <Trophy size={32} style={{ color: COLORS.primary }} className="mb-4" />
          <h3 className="text-xl font-bold mb-2">Active Challenges</h3>
          <p style={{ color: COLORS.textMuted }}>Join 50,000+ players competing in real-time challenges</p>
        </div>
        
        <div style={{ backgroundColor: COLORS.bgCard, borderColor: COLORS.border }} className="border rounded-lg p-6">
          <Dumbbell size={32} style={{ color: COLORS.primary }} className="mb-4" />
          <h3 className="text-xl font-bold mb-2">Training Programs</h3>
          <p style={{ color: COLORS.textMuted }}>Expert-designed drills to improve your skills</p>
        </div>
      </div>
    </div>
  );
}

// --- Challenges Page Component ---
function ChallengesPage() {
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Challenges</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CHALLENGES.map((challenge) => (
          <div 
            key={challenge.id}
            onClick={() => setSelectedChallenge(challenge)}
            style={{ 
              backgroundColor: COLORS.bgCard, 
              borderColor: COLORS.border,
              cursor: 'pointer'
            }} 
            className="border rounded-lg p-6 hover:opacity-80 transition"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">{challenge.title}</h3>
              <span style={{ color: COLORS.primary }} className="text-sm font-semibold">{challenge.daysLeft}d left</span>
            </div>
            
            <p style={{ color: COLORS.textMuted }} className="text-sm mb-4">{challenge.goal}</p>
            
            <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
              <div 
                className="bg-orange-500 h-2 rounded-full transition"
                style={{ width: `${(challenge.current / challenge.total) * 100}%` }}
              />
            </div>
            
            <div className="flex justify-between text-sm" style={{ color: COLORS.textMuted }}>
              <span>{challenge.current} / {challenge.total} {challenge.unit}</span>
              <span>{challenge.participants} joined</span>
            </div>
          </div>
        ))}
      </div>

      {selectedChallenge && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div style={{ backgroundColor: COLORS.bgCard }} className="rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">{selectedChallenge.title}</h3>
              <button onClick={() => setSelectedChallenge(null)}>
                <X size={24} />
              </button>
            </div>
            <p style={{ color: COLORS.textMuted }} className="mb-6">{selectedChallenge.goal}</p>
            <button 
              style={{ backgroundColor: COLORS.primary }}
              className="w-full py-3 rounded-lg font-bold hover:opacity-90"
            >
              Join Challenge
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// --- Programs Page Component ---
function ProgramsPage() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Training Programs</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROGRAMS.map((program) => (
          <div 
            key={program.id}
            style={{ 
              backgroundColor: COLORS.bgCard, 
              borderColor: COLORS.border
            }} 
            className="border rounded-lg overflow-hidden hover:opacity-80 transition cursor-pointer"
            onClick={() => setSelectedProgram(program)}
          >
            <div 
              className="h-40 bg-gradient-to-br"
              style={{ backgroundImage: `url(${program.image})`, backgroundSize: 'cover' }}
            />
            <div className="p-6">
              <span style={{ color: COLORS.primary }} className="text-xs font-bold">{program.tag}</span>
              <h3 className="text-xl font-bold mt-2 mb-2">{program.title}</h3>
              <p style={{ color: COLORS.textMuted }} className="text-sm mb-4">{program.desc}</p>
              
              <div className="flex justify-between text-sm" style={{ color: COLORS.textMuted }}>
                <span className="flex items-center gap-1">
                  <Clock size={16} /> {program.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Target size={16} /> {program.drillsCount} drills
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProgram && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div style={{ backgroundColor: COLORS.bgCard }} className="rounded-lg p-8 max-w-2xl w-full max-h-96 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">{selectedProgram.title}</h3>
              <button onClick={() => setSelectedProgram(null)}>
                <X size={24} />
              </button>
            </div>
            
            <p style={{ color: COLORS.textMuted }} className="mb-6">{selectedProgram.desc}</p>
            
            <div className="space-y-4 mb-6">
              <h4 className="font-bold">Steps:</h4>
              {selectedProgram.steps.map((step, idx) => (
                <div key={idx} style={{ backgroundColor: COLORS.bgBase }} className="p-4 rounded">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-bold">{step.title}</h5>
                    <span style={{ color: COLORS.primary }} className="text-sm">{step.time}</span>
                  </div>
                  <p style={{ color: COLORS.textMuted }} className="text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
            
            <button 
              style={{ backgroundColor: COLORS.primary }}
              className="w-full py-3 rounded-lg font-bold hover:opacity-90 flex items-center justify-center gap-2"
            >
              <Play size={20} /> Start Program
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
