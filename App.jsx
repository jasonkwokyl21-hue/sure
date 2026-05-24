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
      { title: 'Proximity Floaters', desc: 'Drive downhill from the wing. Come to a solid two-foot jump stop just inside the paint to absorb contact. Release the ball with a high arc (teardrop) before the shot blocker can reach it. Focus on a soft touch and keeping your shooting wrist relaxed.', time: '4:00', seconds: 240 },
      { title: 'Reverse Layups', desc: 'Attack the basket aggressively from the baseline. Go completely under the rim and finish on the opposite side, using the rim to protect the ball against shot blockers. Put backspin on the ball to kiss it softly off the glass.', time: '3:00', seconds: 180 }
    ]
  },
  { 
    id: 2, 
    title: 'Varsity Combine', 
    tag: 'SIGNATURE', 
    desc: 'Test your game across standardized drills & get your score.', 
    duration: '45 Min', 
    drillsCount: 3, 
    image: 'https://images.unsplash.com/photo-1518063319789-7217e6706b04?auto=format&fit=crop&q=80&w=600', 
    color: 'from-blue-700 to-indigo-900',
    steps: [
      { title: 'Lane Agility Drill', desc: 'Start at the baseline corner of the paint. Sprint forward to the free-throw line, defensive shuffle across to the other elbow, backpedal to the baseline, and shuffle back to the start. Stay low in an athletic stance and do not cross your feet!', time: '1:30', seconds: 90 },
      { title: 'Spot Up 3s', desc: 'Set up at 5 spots: left corner, left wing, top of the key, right wing, right corner. Shoot 5 consecutive shots from each spot. Focus on catching the ball in a ready-to-shoot stance, dipping the ball slightly for rhythm, and holding your follow-through.', time: '5:00', seconds: 300 },
      { title: '3/4 Court Sprint', desc: 'Start with one foot on the baseline. On GO, sprint as fast as possible to the opposite free-throw line. Pump your arms and lean forward during acceleration to maximize speed. Rest for 15 seconds, then repeat.', time: '0:45', seconds: 45 }
    ]
  },
  { 
    id: 3, 
    title: 'Handle Life', 
    tag: 'BALL CONTROL', 
    desc: 'Daily dribbling drills to keep the ball on a string.', 
    duration: '15 Min', 
    drillsCount: 3, 
    image: 'https://images.unsplash.com/photo-1519861531473-920026076248?auto=format&fit=crop&q=80&w=800', 
    color: 'from-green-700 to-emerald-900',
    steps: [
      { title: 'Pound Dribbles', desc: 'Get in a low, wide stance. Pound the ball as hard as you can waist-high. Do 50 reps with your right hand, then 50 with your left. Keep your eyes up scanning the floor, not looking at the ball. The harder you dribble, the better your control becomes.', time: '2:00', seconds: 120 },
      { title: 'Low Crossovers', desc: 'Stay in a low stance. Cross the ball back and forth rapidly below your knees. Keep your hands quick and keep the ball extremely tight to your body. Try to get over 100 total crosses in the time limit.', time: '2:00', seconds: 120 },
      { title: 'Figure 8s', desc: 'Dribble the ball in a continuous figure-8 pattern through and around your legs. Use only your fingertips and keep the ball just inches from the floor. Switch directions halfway through the timer to work both patterns.', time: '3:00', seconds: 180 }
    ]
  },
  { 
    id: 4, 
    title: 'Shooter\'s Touch', 
    tag: '4 WEEKS', 
    desc: 'Repetition based form shooting to lock in muscle memory.', 
    duration: '30 Min', 
    drillsCount: 2, 
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=800', 
    color: 'from-purple-600 to-pink-600',
    steps: [
      { title: 'One-Hand Form', desc: 'Stand 3 feet straight in front of the rim. Use only your shooting hand (keep your guide hand behind your back). Form an "L" with your arm. Focus solely on the snap of your wrist and getting perfect backspin. Make 10 swishes before stepping back.', time: '5:00', seconds: 300 },
      { title: 'Mid-range Bank Shots', desc: 'Move to the 45-degree angle on the block. Aim for the top near corner of the square on the backboard. The ball should drop softly into the net without hitting the rim. Alternate blocks every 5 shots to master both angles.', time: '5:00', seconds: 300 }
    ]
  }
];

// --- Main App Component ---
export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isWearableOpen, setIsWearableOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isPremiumOpen, setIsPremiumOpen] = useState(false);
  const [activeWorkout, setActiveWorkout] = useState(null);
  const [unitSystem, setUnitSystem] = useState('metric');
  const [connectedDevice, setConnectedDevice] = useState(null);
  const [viewAllPrograms, setViewAllPrograms] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsCameraOpen(false);
        setIsNotificationsOpen(false);
        setIsWearableOpen(false);
        setIsSettingsOpen(false);
        setIsPremiumOpen(false);
        setActiveWorkout(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSeeAllPrograms = () => {
    setActiveTab('train');
    setViewAllPrograms(true);
  };

  return (
    <div 
      className="mx-auto h-screen w-full sm:max-w-md relative overflow-hidden flex flex-col font-sans selection:bg-orange-500/30"
      style={{ backgroundColor: COLORS.bgBase, color: COLORS.textMain }}
    >
      <div className="flex-1 overflow-y-auto scrollbar-hide relative z-0" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        {activeTab === 'home' && (
          <HomeView 
            connectedDevice={connectedDevice}
            onOpenNotifications={() => setIsNotificationsOpen(true)} 
            onOpenWearable={() => setIsWearableOpen(true)} 
            onStartWorkout={(program) => setActiveWorkout(program)}
            onSeeAllPrograms={handleSeeAllPrograms}
          />
        )}
        {activeTab === 'train' && (
          <TrainView 
            onOpenAI={() => setIsCameraOpen(true)} 
            onOpenPremium={() => setIsPremiumOpen(true)}
            onStartWorkout={(program) => setActiveWorkout(program)}
            showAllPrograms={viewAllPrograms}
            setShowAllPrograms={setViewAllPrograms}
          />
        )}
        {activeTab === 'communities' && <CommunitiesView />}
        {activeTab === 'profile' && (
          <ProfileView 
            onOpenSettings={() => setIsSettingsOpen(true)} 
            unitSystem={unitSystem} 
          />
        )}
        
        <div className="h-36 w-full shrink-0 pointer-events-none" aria-hidden="true"></div>
      </div>

      <BottomNav activeTab={activeTab} setActiveTab={(tab) => { setActiveTab(tab); setViewAllPrograms(false); }} />

      {isCameraOpen && <AICameraOverlay onClose={() => setIsCameraOpen(false)} />}
      {isNotificationsOpen && <NotificationsOverlay onClose={() => setIsNotificationsOpen(false)} />}
      {isSettingsOpen && <SettingsOverlay onClose={() => setIsSettingsOpen(false)} onOpenPremium={() => setIsPremiumOpen(true)} unitSystem={unitSystem} setUnitSystem={setUnitSystem} />}
      {isPremiumOpen && <PremiumOverlay onClose={() => setIsPremiumOpen(false)} />}
      {isWearableOpen && (
        <WearableOverlay 
          onClose={() => setIsWearableOpen(false)} 
          onConnect={(brand) => setConnectedDevice(brand)}
        />
      )}
      {activeWorkout && (
        <WorkoutSessionOverlay 
          workout={activeWorkout} 
          onClose={() => setActiveWorkout(null)} 
        />
      )}
    </div>
  );
}

// --- Components ---

function ActionCard({ icon, title }) {
  return (
    <div className="p-4 rounded-2xl bg-zinc-900/40 border border-white/5 flex items-center gap-3 cursor-pointer hover:bg-zinc-900/80 transition-colors">
      <div className="p-2 bg-black/40 rounded-xl">{icon}</div>
      <span className="font-semibold text-sm tracking-tight text-white">{title}</span>
    </div>
  );
}

function HomeView({ onOpenNotifications, onOpenWearable, connectedDevice, onStartWorkout, onSeeAllPrograms }) {
  const featuredProgram = PROGRAMS[0];

  return (
    <div className="p-5 space-y-6 animate-in fade-in duration-300">
      <div className="flex justify-between items-center pt-8">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-orange-500/20 border-2 border-orange-500">
            <div className="w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-xl font-bold">JK</div>
          </div>
          <div>
            <p className="text-sm" style={{ color: COLORS.textMuted }}>Welcome back,</p>
            <h1 className="text-xl font-bold tracking-tight">Jason Kwok</h1>
          </div>
        </div>
        <button onClick={onOpenNotifications} className="p-2 rounded-full bg-zinc-900/50 relative hover:bg-zinc-800 active:scale-95 transition-all cursor-pointer">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(255,98,0,0.8)]"></span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div style={{ backgroundColor: COLORS.bgCard, borderColor: COLORS.border }} className="border rounded-3xl p-4 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl"></div>
          <div className="flex items-center space-x-2 text-orange-500 mb-2 relative z-10">
            <Flame size={20} className="fill-orange-500" />
            <span className="font-bold tracking-tight">12 Day Streak</span>
          </div>
          <p className="text-xs text-zinc-400 relative z-10 font-medium">Keep it up!</p>
        </div>
        
        <div style={{ backgroundColor: COLORS.bgCard, borderColor: COLORS.border }} className="border rounded-3xl p-4 flex items-center space-x-4">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 font-bold">3/4</div>
          </div>
          <div>
            <p className="font-bold text-sm tracking-tight">Weekly Goal</p>
            <p className="text-xs text-zinc-400 font-medium">Sessions</p>
          </div>
        </div>
      </div>

      {!connectedDevice ? (
        <div onClick={onOpenWearable} style={{ backgroundColor: COLORS.bgCard, borderColor: COLORS.border }} className="border border-dashed rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:bg-zinc-900/50 transition-colors active:scale-[0.98]">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center">
              <Watch size={20} className="text-zinc-400" />
            </div>
            <div>
              <h3 className="font-semibold text-sm flex items-center gap-2">Connect Wearable</h3>
              <p className="text-xs text-zinc-400">Track heart rate, calories</p>
            </div>
          </div>
          <ChevronRight size={20} className="text-zinc-600" />
        </div>
      ) : (
        <div style={{ backgroundColor: COLORS.bgCard }} className="rounded-2xl p-4 flex items-center justify-between bg-green-500/10 border border-green-500/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
              <Watch size={20} className="text-green-400" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-white">{connectedDevice.name} Active</h3>
              <p className="text-xs text-green-400/80">Syncing</p>
            </div>
          </div>
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      )}

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Featured Workout</h2>
          <button onClick={onSeeAllPrograms} className="text-sm text-orange-500 flex items-center">See all <ChevronRight size={16}/></button>
        </div>
        
        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(${featuredProgram.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="relative rounded-3xl overflow-hidden aspect-[4/3] group cursor-pointer border border-white/10">
          <div className="absolute inset-0 p-5 flex flex-col justify-end">
            <span className="bg-orange-500/20 text-orange-500 text-xs font-bold px-2 py-1 rounded w-max mb-2">{featuredProgram.tag}</span>
            <h3 className="text-2xl font-bold mb-2">{featuredProgram.title}</h3>
            <div className="flex items-center space-x-4 text-sm text-zinc-300 mb-6">
              <span className="flex items-center"><Clock size={14} className="mr-1"/> {featuredProgram.duration}</span>
              <span className="flex items-center"><Target size={14} className="mr-1"/> {featuredProgram.drillsCount} Drills</span>
            </div>
            <button 
              onClick={() => onStartWorkout(featuredProgram)}
              className="w-full py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 bg-orange-600 hover:bg-orange-500 text-white active:scale-95 transition-all"
            >
              <Play size={20} className="fill-white" />
              <span>Start Workout</span>
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4">
          <ActionCard icon={<Camera className="text-blue-400"/>} title="Start Tracking" />
          <ActionCard icon={<Target className="text-green-400"/>} title="Free Throws" />
        </div>
      </div>
    </div>
  );
}

function TrainView({ onOpenAI, onOpenPremium, onStartWorkout, showAllPrograms, setShowAllPrograms }) {
  const [showAllChallenges, setShowAllChallenges] = useState(false);

  if (showAllChallenges) {
    return (
      <div className="p-5 space-y-6 pt-12 animate-in slide-in-from-right duration-300 min-h-full">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => setShowAllChallenges(false)} className="p-2 bg-zinc-900 rounded-full hover:bg-zinc-800">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-3xl font-bold">All Challenges</h1>
        </div>
        
        <div className="space-y-4 pb-20">
          {CHALLENGES.map(challenge => {
            const percent = Math.min(100, Math.round((challenge.current / challenge.total) * 100));
            return (
              <div key={challenge.id} className="bg-zinc-900 rounded-2xl p-4 border border-white/5 active:scale-[0.98] transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl ${challenge.bg} border ${challenge.border} flex items-center justify-center`}>
                      <challenge.icon size={24} className={challenge.color} />
                    </div>
                    <div>
                      <h3 className="font-bold text-base">{challenge.title}</h3>
                      <p className="text-xs text-zinc-400 flex items-center gap-1 mt-0.5"><Users size={12}/> {challenge.participants} joined</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-zinc-400 bg-zinc-800 px-2 py-1 rounded">{challenge.daysLeft}d left</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-300 font-medium">{challenge.current} / {challenge.total} {challenge.unit}</span>
                    <span className={`${challenge.color} font-bold`}>{percent}%</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-2.5 overflow-hidden">
                    <div className={`bg-gradient-to-r ${challenge.gradient} h-full rounded-full`} style={{ width: `${percent}%` }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (showAllPrograms) {
    return (
      <div className="p-5 space-y-6 pt-12 animate-in slide-in-from-right duration-300 min-h-full">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => setShowAllPrograms(false)} className="p-2 bg-zinc-900 rounded-full hover:bg-zinc-800">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-3xl font-bold">All Programs</h1>
        </div>
        
        <div className="space-y-4 pb-20">
          {PROGRAMS.map(program => (
            <div key={program.id} className="relative h-40 rounded-2xl overflow-hidden group cursor-pointer active:scale-[0.98] transition-transform border border-white/10" onClick={() => onStartWorkout(program)} style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url(${program.image})`, backgroundSize: 'cover' }}>
              <div className="relative z-20 p-4 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                  <span className="bg-black/50 text-white text-[10px] font-bold px-2 py-1 rounded">
                    {program.tag}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-bold text-white"><Clock size={12}/>{program.duration}</span>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-lg font-bold">{program.title}</h3>
                    <p className="text-xs text-white/80">{program.drillsCount} Interactive Drills</p>
                  </div>
                  <button className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center">
                    <Play size={20} className="fill-black ml-0.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-5 space-y-6 pt-12 animate-in fade-in duration-300">
      <div className="flex items-baseline justify-between">
        <h1 className="text-3xl font-bold">Train</h1>
      </div>
      
      <div className="flex space-x-3">
        <div className="flex-1 relative">
          <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input 
            type="text" 
            placeholder="Search workouts..." 
            className="w-full bg-zinc-900 rounded-xl py-3 pl-10 pr-4 text-sm outline-none focus:ring-1 focus:ring-orange-500"
          />
        </div>
        <button className="p-3 bg-zinc-900 rounded-xl flex items-center justify-center">
          <Filter size={20} className="text-zinc-400" />
        </button>
      </div>

      <div className="relative rounded-3xl overflow-hidden p-6 border border-white/10" style={{ backgroundColor: COLORS.bgCard }}>
        <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-20 flex items-center justify-end">
          <Scan size={120} className="text-green-500/30" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center space-x-1 text-green-400 mb-2">
            <Scan size={16} />
            <span className="text-xs font-bold tracking-wider">AI TRACKER</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">Auto Shot Tracker</h2>
          <p className="text-sm text-zinc-300 w-2/3 mb-6">Automatically track your makes, misses, and FG% in real-time.</p>
          
          <button onClick={onOpenAI} className="w-full bg-white text-black font-bold py-4 px-6 rounded-2xl flex items-center justify-center space-x-2 hover:bg-zinc-200 active:scale-95 transition-all">
            <Camera size={18} />
            <span>Start Tracking</span>
          </button>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Programs</h2>
          <button onClick={() => setShowAllPrograms(true)} className="text-sm text-orange-500 flex items-center hover:text-orange-400">See all <ChevronRight size={16}/></button>
        </div>
        
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {PROGRAMS.slice(0, 2).map((program) => (
            <div key={program.id} onClick={() => onStartWorkout(program)} className="min-w-[280px] h-48 rounded-2xl relative overflow-hidden flex-shrink-0 group cursor-pointer active:scale-[0.98] transition-all border border-white/10" style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url(${program.image})`, backgroundSize: 'cover' }}>
              <div className="relative z-20 p-4 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                  <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-1 rounded">
                    {program.tag}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{program.title}</h3>
                  <p className="text-xs text-white/80 line-clamp-2">{program.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Active Challenges</h2>
          <button onClick={() => setShowAllChallenges(true)} className="text-sm text-orange-500 flex items-center hover:text-orange-400">See all <ChevronRight size={16}/></button>
        </div>

        <div className="space-y-4 pb-20">
          {CHALLENGES.slice(0, 2).map(challenge => {
            const percent = Math.min(100, Math.round((challenge.current / challenge.total) * 100));
            return (
              <div key={challenge.id} className="bg-zinc-900 rounded-2xl p-4 border border-white/5 active:scale-[0.98] transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl ${challenge.bg} border ${challenge.border} flex items-center justify-center`}>
                      <challenge.icon size={24} className={challenge.color} />
                    </div>
                    <div>
                      <h3 className="font-bold text-base">{challenge.title}</h3>
                      <p className="text-xs text-zinc-400 flex items-center gap-1 mt-0.5"><Users size={12}/> {challenge.participants} joined</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-zinc-400 bg-zinc-800 px-2 py-1 rounded">{challenge.daysLeft}d left</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-300 font-medium">{challenge.current} / {challenge.total} {challenge.unit}</span>
                    <span className={`${challenge.color} font-bold`}>{percent}%</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-2.5 overflow-hidden">
                    <div className={`bg-gradient-to-r ${challenge.gradient} h-full rounded-full`} style={{ width: `${percent}%` }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CommunitiesView() {
  return (
    <div className="p-5 pt-12 text-center space-y-4 flex items-center justify-center min-h-screen flex-col">
      <Users size={48} className="text-orange-500" />
      <h2 className="text-2xl font-bold">Hustle Arena Labs</h2>
      <p className="text-sm text-zinc-400 max-w-xs">Connect and compete with athletes on matching tier leaderboards.</p>
    </div>
  );
}

function ProfileView({ onOpenSettings, unitSystem }) {
  return (
    <div className="p-5 space-y-6 pt-12 animate-in fade-in duration-300 pb-20">
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-500 bg-orange-500/20 flex items-center justify-center text-2xl font-bold">JK</div>
          <div>
            <h2 className="text-2xl font-bold">Jason Kwok</h2>
            <p className="text-sm text-zinc-400">Class of 2027 • Guard</p>
          </div>
        </div>
        <button onClick={onOpenSettings} className="p-2 bg-zinc-900 rounded-xl hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors">
          <Settings size={20} />
        </button>
      </div>

      <div className="bg-zinc-900/60 border border-white/5 p-4 rounded-2xl flex justify-between items-center">
        <div>
          <span className="text-xs text-zinc-500 block">Current Rank</span>
          <span className="font-bold text-white flex items-center gap-1.5 mt-0.5"><Crown size={16} className="text-yellow-500" /> Diamond League</span>
        </div>
        <span className="text-xs font-bold bg-yellow-500/10 text-yellow-500 px-2.5 py-1 rounded">Top 5%</span>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-zinc-900 rounded-xl p-4 text-center border border-white/5">
          <div className="text-2xl font-bold text-orange-500">847</div>
          <div className="text-xs text-zinc-400 mt-1">Total Points</div>
        </div>
        <div className="bg-zinc-900 rounded-xl p-4 text-center border border-white/5">
          <div className="text-2xl font-bold text-blue-400">42</div>
          <div className="text-xs text-zinc-400 mt-1">Sessions</div>
        </div>
        <div className="bg-zinc-900 rounded-xl p-4 text-center border border-white/5">
          <div className="text-2xl font-bold text-green-400">78%</div>
          <div className="text-xs text-zinc-400 mt-1">FG%</div>
        </div>
      </div>
    </div>
  );
}

function BottomNav({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'train', label: 'Train', icon: Dumbbell },
    { id: 'communities', label: 'Community', icon: Users },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  return (
    <nav style={{ backgroundColor: COLORS.bgCard, borderTopColor: COLORS.border }} className="border-t fixed bottom-0 left-0 right-0 sm:max-w-md mx-auto w-full z-50">
      <div className="flex justify-around">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex-1 py-4 flex flex-col items-center gap-1 transition-colors ${
              activeTab === id ? 'text-orange-500' : 'text-zinc-500 hover:text-white'
            }`}
          >
            <Icon size={24} />
            <span className="text-xs font-semibold">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

// Overlay Components
function AICameraOverlay({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div style={{ backgroundColor: COLORS.bgCard }} className="rounded-2xl p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">AI Shot Tracker</h3>
          <button onClick={onClose} className="p-1 hover:bg-zinc-800 rounded">
            <X size={24} />
          </button>
        </div>
        <p style={{ color: COLORS.textMuted }} className="mb-6">Position your phone to track your shot performance in real-time.</p>
        <button 
          onClick={onClose}
          style={{ backgroundColor: COLORS.primary }}
          className="w-full py-3 rounded-lg font-bold hover:opacity-90"
        >
          Got It
        </button>
      </div>
    </div>
  );
}

function NotificationsOverlay({ onClose }) {
  const notifications = [
    { id: 1, title: 'Challenge Update', message: 'You\'re 50% towards your goal!', time: '2h ago' },
    { id: 2, title: 'New Program', message: 'Elite Guard Finishing is now available', time: '1d ago' }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div style={{ backgroundColor: COLORS.bgCard }} className="rounded-2xl p-6 max-w-md w-full max-h-96 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Notifications</h3>
          <button onClick={onClose} className="p-1 hover:bg-zinc-800 rounded">
            <X size={24} />
          </button>
        </div>
        <div className="space-y-3">
          {notifications.map(notif => (
            <div key={notif.id} className="p-3 bg-zinc-900 rounded-lg border border-white/5">
              <h4 className="font-semibold">{notif.title}</h4>
              <p style={{ color: COLORS.textMuted }} className="text-sm mt-1">{notif.message}</p>
              <p className="text-xs text-zinc-600 mt-2">{notif.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SettingsOverlay({ onClose, onOpenPremium, unitSystem, setUnitSystem }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div style={{ backgroundColor: COLORS.bgCard }} className="rounded-2xl p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Settings</h3>
          <button onClick={onClose} className="p-1 hover:bg-zinc-800 rounded">
            <X size={24} />
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 bg-zinc-900 rounded-lg">
            <span>Measurement System</span>
            <select value={unitSystem} onChange={(e) => setUnitSystem(e.target.value)} className="bg-zinc-800 px-2 py-1 rounded text-sm">
              <option value="metric">Metric</option>
              <option value="imperial">Imperial</option>
            </select>
          </div>
          
          <button onClick={onOpenPremium} style={{ backgroundColor: COLORS.primary }} className="w-full py-3 rounded-lg font-bold hover:opacity-90">
            Go Premium
          </button>
          
          <button onClick={onClose} className="w-full py-3 rounded-lg font-bold bg-zinc-900 hover:bg-zinc-800">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function PremiumOverlay({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div style={{ backgroundColor: COLORS.bgCard }} className="rounded-2xl p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Premium</h3>
          <button onClick={onClose} className="p-1 hover:bg-zinc-800 rounded">
            <X size={24} />
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg border border-orange-500/30">
            <h4 className="font-bold mb-2">Unlock Premium Features</h4>
            <ul className="text-sm space-y-1 text-zinc-300">
              <li>✓ Unlimited AI Shot Tracking</li>
              <li>✓ Advanced Analytics</li>
              <li>✓ Priority Support</li>
            </ul>
          </div>
          
          <button style={{ backgroundColor: COLORS.primary }} className="w-full py-3 rounded-lg font-bold hover:opacity-90">
            Upgrade Now - $9.99/mo
          </button>
          
          <button onClick={onClose} className="w-full py-3 rounded-lg font-bold bg-zinc-900 hover:bg-zinc-800">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function WearableOverlay({ onClose, onConnect }) {
  const wearables = [
    { id: 1, name: 'Apple Watch', icon: Watch },
    { id: 2, name: 'Fitbit', icon: Heart },
    { id: 3, name: 'Oura Ring', icon: Shield }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div style={{ backgroundColor: COLORS.bgCard }} className="rounded-2xl p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Connect Wearable</h3>
          <button onClick={onClose} className="p-1 hover:bg-zinc-800 rounded">
            <X size={24} />
          </button>
        </div>
        
        <div className="space-y-3">
          {wearables.map(device => (
            <button 
              key={device.id}
              onClick={() => { onConnect(device); onClose(); }}
              className="w-full p-4 bg-zinc-900 border border-white/5 rounded-lg hover:bg-zinc-800 transition-colors flex items-center gap-3"
            >
              <device.icon size={24} className="text-orange-500" />
              <span className="font-semibold">{device.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkoutSessionOverlay({ workout, onClose }) {
  const [currentStep, setCurrentStep] = useState(0);
  const step = workout.steps[currentStep];

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
      <div style={{ backgroundColor: COLORS.bgCard }} className="rounded-2xl p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">{workout.title}</h3>
          <button onClick={onClose} className="p-1 hover:bg-zinc-800 rounded">
            <X size={24} />
          </button>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-zinc-400">Step {currentStep + 1} of {workout.steps.length}</span>
            <span style={{ color: COLORS.primary }} className="font-bold">{step.time}</span>
          </div>
          
          <h4 className="text-xl font-bold mb-2">{step.title}</h4>
          <p className="text-sm text-zinc-300 mb-4">{step.desc}</p>
          
          <div className="w-full bg-zinc-800 rounded-full h-1">
            <div className="bg-orange-500 h-1 rounded-full transition-all" style={{ width: `${((currentStep + 1) / workout.steps.length) * 100}%` }} />
          </div>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="flex-1 py-3 rounded-lg font-bold bg-zinc-900 hover:bg-zinc-800 disabled:opacity-50"
          >
            Previous
          </button>
          {currentStep === workout.steps.length - 1 ? (
            <button 
              onClick={onClose}
              style={{ backgroundColor: COLORS.primary }}
              className="flex-1 py-3 rounded-lg font-bold hover:opacity-90"
            >
              Complete
            </button>
          ) : (
            <button 
              onClick={() => setCurrentStep(Math.min(workout.steps.length - 1, currentStep + 1))}
              style={{ backgroundColor: COLORS.primary }}
              className="flex-1 py-3 rounded-lg font-bold hover:opacity-90"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
