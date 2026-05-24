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
  const [activeWorkout, setActiveWorkout] = useState(null); // Triggers the workout session
  const [unitSystem, setUnitSystem] = useState('metric'); // 'metric' or 'imperial'
  
  // Global state for connected smartwatch
  const [connectedDevice, setConnectedDevice] = useState(null);

  // Helper to jump to Train tab and show all programs
  const [viewAllPrograms, setViewAllPrograms] = useState(false);
  
  // Global Click Sound Effect
  useEffect(() => {
    // Standard UI click - Crisp and fast
    const clickAudio = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3');
    clickAudio.preload = 'auto'; // Force browser to load immediately to prevent delay
    clickAudio.volume = 0.3;

    // Tab switch click - Very subtle, short tick (replaces the swoosh)
    const tabAudio = new Audio('https://assets.mixkit.co/active_storage/sfx/2570/2570-preview.mp3');
    tabAudio.preload = 'auto';
    tabAudio.volume = 0.15; // Barely noticeable, just enough for tactile feedback

    // Camera shutter sound
    const cameraAudio = new Audio('https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3');
    cameraAudio.preload = 'auto';
    cameraAudio.volume = 0.3;
    
    const handleGlobalClick = (e) => {
      const tabBtn = e.target.closest('[data-sound="tab"]');
      const cameraBtn = e.target.closest('[data-sound="camera"]');
      const generalBtn = e.target.closest('button') || e.target.closest('.cursor-pointer');

      // Play different sounds based on custom data attributes
      if (cameraBtn) {
        cameraAudio.currentTime = 0;
        cameraAudio.play().catch(() => {});
      } else if (tabBtn) {
        tabAudio.currentTime = 0;
        tabAudio.play().catch(() => {});
      } else if (generalBtn) {
        clickAudio.currentTime = 0;
        clickAudio.play().catch(() => {}); 
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
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
      {/* Main Scrollable Content Area */}
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
            onStartWorkout={(program) => setActiveWorkout(program)}
            showAllPrograms={viewAllPrograms}
            setShowAllPrograms={setViewAllPrograms}
          />
        )}
        {activeTab === 'ai_form' && (
          <AIFormView onOpenAI={() => setIsCameraOpen(true)} onOpenPremium={() => setIsPremiumOpen(true)} />
        )}
        {activeTab === 'communities' && <CommunitiesView />}
        {activeTab === 'stats' && <StatsView />}
        {activeTab === 'profile' && <ProfileView onOpenSettings={() => setIsSettingsOpen(true)} unitSystem={unitSystem} />}
        
        {/* Explicit invisible spacer */}
        <div className="h-36 w-full shrink-0 pointer-events-none" aria-hidden="true"></div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} setActiveTab={(tab) => { setActiveTab(tab); setViewAllPrograms(false); }} onOpenAction={() => setIsCameraOpen(true)} />

      {/* Full Screen Overlays */}
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

// --- Views ---

function HomeView({ onOpenNotifications, onOpenWearable, connectedDevice, onStartWorkout, onSeeAllPrograms }) {
  const featuredProgram = PROGRAMS[0];

  return (
    <div className="p-5 space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex justify-between items-center pt-8">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-orange-500/20 border-2 border-orange-500">
            <img src="IMG_1205.jpg" alt="Profile" className="w-full h-full object-cover" />
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

      {/* Stats Row */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-3xl flex flex-col justify-between border border-white/5 bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-md relative overflow-hidden shadow-lg">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl"></div>
          <div className="flex items-center space-x-2 text-orange-500 mb-2 relative z-10">
            <Flame size={20} className="fill-orange-500 drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" />
            <span className="font-bold tracking-tight">12 Day Streak</span>
          </div>
          <p className="text-xs text-zinc-400 relative z-10 font-medium">Keep it up! You're on fire.</p>
        </div>
        
        <div className="p-4 rounded-3xl flex items-center space-x-4 border border-white/5 bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-md shadow-lg">
           <div className="relative w-12 h-12 flex items-center justify-center drop-shadow-md">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path className="text-zinc-800" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className="text-orange-500" strokeDasharray="75, 100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
            <span className="absolute text-xs font-bold">3/4</span>
          </div>
          <div>
            <p className="font-bold text-sm tracking-tight">Weekly Goal</p>
            <p className="text-xs text-zinc-400 font-medium">Sessions</p>
          </div>
        </div>
      </div>

      {/* Dynamic Connect Wearable Banner */}
      {!connectedDevice ? (
        <div onClick={onOpenWearable} className="p-4 rounded-2xl flex items-center justify-between border border-dashed border-zinc-700 cursor-pointer hover:bg-zinc-900/50 transition-colors active:scale-[0.98]">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center">
              <Watch size={20} className="text-zinc-400" />
            </div>
            <div>
              <h3 className="font-semibold text-sm flex items-center gap-2">Connect a Wearable <span className="text-orange-500">+</span></h3>
              <p className="text-xs text-zinc-400">Track heart rate, calories & recovery</p>
            </div>
          </div>
          <ChevronRight size={20} className="text-zinc-600" />
        </div>
      ) : (
        <div className="p-4 rounded-2xl flex items-center justify-between bg-green-500/10 border border-green-500/20 active:scale-[0.98] transition-all cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
              <Watch size={20} className="text-green-400" />
            </div>
            <div>
              <h3 className="font-semibold text-sm flex items-center gap-2 text-white">{connectedDevice.name} Active</h3>
              <p className="text-xs text-green-400/80">Syncing biometrics</p>
            </div>
          </div>
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
        </div>
      )}

      {/* Today's Workout */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Today's Workout</h2>
          <button onClick={onSeeAllPrograms} className="text-sm text-orange-500 flex items-center">See all <ChevronRight size={16}/></button>
        </div>
        
        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group cursor-pointer border border-white/10">
          <img src={featuredProgram.image} alt="Workout" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          
          <div className="absolute inset-0 p-5 flex flex-col justify-end">
            <span className="bg-orange-500/20 text-orange-500 text-xs font-bold px-2 py-1 rounded w-max mb-2 backdrop-blur-sm">{featuredProgram.tag}</span>
            <h3 className="text-2xl font-bold mb-2">{featuredProgram.title}</h3>
            <div className="flex items-center space-x-4 text-sm text-zinc-300 mb-6">
              <span className="flex items-center"><Activity size={14} className="mr-1"/> {featuredProgram.duration}</span>
              <span className="flex items-center"><Target size={14} className="mr-1"/> {featuredProgram.drillsCount} Drills</span>
            </div>
            <button 
              onClick={() => onStartWorkout(featuredProgram)}
              className="w-full py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-600 to-orange-400 text-white shadow-[0_8px_20px_-6px_rgba(255,85,0,0.5)] active:scale-95 transition-all duration-300 border border-orange-400/30" 
            >
              <Play size={20} className="fill-white" />
              <span>Start Workout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
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

function TrainView({ onOpenAI, onStartWorkout, showAllPrograms, setShowAllPrograms }) {
  const categories = ['All', 'Shooting', 'Ball Handling', 'Finishing', 'Conditioning'];
  const [showAllChallenges, setShowAllChallenges] = useState(false);
  
  if (showAllChallenges) {
    return (
      <div className="p-5 space-y-6 pt-12 animate-in slide-in-from-right duration-300 relative min-h-full">
        <div className="flex items-center gap-3 mb-6">
           <button onClick={() => setShowAllChallenges(false)} className="p-2 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors">
             <ArrowLeft size={20} />
           </button>
           <h1 className="text-3xl font-bold">All Challenges</h1>
        </div>
        
        <div className="space-y-4 pb-20">
          {CHALLENGES.map(challenge => {
             const percent = Math.min(100, Math.round((challenge.current / challenge.total) * 100));
             return (
              <div key={challenge.id} className="bg-zinc-900 rounded-2xl p-4 border border-white/5 active:scale-[0.98] transition-all cursor-pointer shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                     <div className={`w-12 h-12 rounded-xl ${challenge.bg} border ${challenge.border} flex items-center justify-center`}>
                       <challenge.icon size={24} className={challenge.color} />
                     </div>
                     <div>
                       <h3 className="font-bold text-base">{challenge.title}</h3>
                       <p className="text-xs text-zinc-400 flex items-center gap-1 mt-0.5"><User size={12}/> {challenge.participants} joined</p>
                     </div>
                  </div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider bg-zinc-800 px-2 py-1 rounded">{challenge.daysLeft}d left</span>
                </div>
                
                <div className="space-y-2">
                   <div className="flex justify-between text-sm">
                      <span className="text-zinc-300 font-medium">{challenge.current} / {challenge.total} {challenge.unit}</span>
                      <span className={`${challenge.color} font-bold`}>{percent}%</span>
                   </div>
                   <div className="w-full bg-zinc-800 rounded-full h-2.5 overflow-hidden">
                      <div className={`bg-gradient-to-r ${challenge.gradient} h-full rounded-full relative`} style={{ width: `${percent}%` }}>
                         {percent > 0 && <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/20 animate-pulse"></div>}
                      </div>
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
      <div className="p-5 space-y-6 pt-12 animate-in slide-in-from-right duration-300 relative min-h-full">
        <div className="flex items-center gap-3 mb-6">
           <button onClick={() => setShowAllPrograms(false)} className="p-2 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors">
             <ArrowLeft size={20} />
           </button>
           <h1 className="text-3xl font-bold">All Programs</h1>
        </div>
        
        <div className="space-y-4 pb-20">
          {PROGRAMS.map(program => (
            <div key={program.id} className="relative h-40 rounded-2xl overflow-hidden group cursor-pointer active:scale-[0.98] transition-transform border border-white/10" onClick={() => onStartWorkout(program)}>
               <div className={`absolute inset-0 bg-gradient-to-br ${program.color} mix-blend-multiply opacity-80 z-10`}></div>
               <img src={program.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="bg"/>
               
               <div className="relative z-20 p-4 flex flex-col h-full justify-between">
                  <div className="flex justify-between items-start">
                    <span className="bg-black/50 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-md border border-white/10 tracking-wider">
                      {program.tag}
                    </span>
                    <div className="flex gap-2 text-xs font-bold text-white shadow-black drop-shadow-md">
                       <span className="flex items-center gap-1"><Clock size={12}/>{program.duration}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-lg font-bold shadow-black drop-shadow-md">{program.title}</h3>
                      <p className="text-xs text-white/80 line-clamp-1 shadow-black drop-shadow-md">{program.drillsCount} Interactive Drills</p>
                    </div>
                    <button className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow-lg">
                      <Play size={20} className="fill-black ml-1" />
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
      <h1 className="text-3xl font-bold">Train</h1>
      
      {/* Search Bar */}
      <div className="flex space-x-3">
        <div className="flex-1 relative">
          <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input 
            type="text" 
            placeholder="Search workouts, drills..." 
            className="w-full bg-zinc-900 rounded-xl py-3 pl-10 pr-4 text-sm outline-none focus:ring-1 focus:ring-orange-500"
          />
        </div>
        <button className="p-3 bg-zinc-900 rounded-xl flex items-center justify-center">
          <Filter size={20} className="text-zinc-400" />
        </button>
      </div>

      {/* Categories */}
      <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat, i) => (
          <button key={cat} className={`px-5 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${i === 0 ? 'bg-white text-black font-semibold' : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* AI Shot Tracker Feature Card */}
      <div className="relative rounded-3xl overflow-hidden p-6 border border-white/10 shadow-2xl" style={{
        background: 'linear-gradient(135deg, #1A1F38 0%, #0A1128 50%, #12211D 100%)'
      }}>
        <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-20 flex items-center justify-end overflow-hidden">
           <svg viewBox="0 0 100 100" className="w-full h-full text-green-500/50 scale-150 translate-x-1/4">
             <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
             <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
             <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="none"/>
           </svg>
        </div>

        <div className="relative z-10">
          <div className="flex items-center space-x-1 text-green-400 mb-2">
            <Scan size={16} />
            <span className="text-xs font-bold tracking-wider">AI TRACKER</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">Auto Shot Tracker</h2>
          <p className="text-sm text-zinc-300 w-2/3 mb-6">Set up your phone and automatically track your makes, misses, and FG% in real-time.</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {['Makes', 'Misses', 'Shot Arc', 'Swish Detection'].map(part => (
              <span key={part} className="px-3 py-1 bg-white/10 rounded-lg text-xs flex items-center gap-1 backdrop-blur-md border border-white/5">
                <Target size={10} className="text-green-400"/> {part}
              </span>
            ))}
          </div>

          <button onClick={onOpenAI} className="w-full bg-white text-black font-bold py-4 px-6 rounded-2xl flex items-center justify-center space-x-2 hover:bg-zinc-200 active:scale-95 transition-all shadow-[0_8px_20px_-6px_rgba(255,255,255,0.3)]">
            <Camera size={18} />
            <span>Start Tracking</span>
          </button>
        </div>
      </div>

      {/* Programs List */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Programs</h2>
          <button onClick={() => setShowAllPrograms(true)} className="text-sm text-orange-500 flex items-center hover:text-orange-400 transition-colors">See all <ChevronRight size={16}/></button>
        </div>
        
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {PROGRAMS.slice(0, 2).map((program) => (
            <div key={program.id} onClick={() => onStartWorkout(program)} className="min-w-[280px] h-48 rounded-2xl relative overflow-hidden flex-shrink-0 group cursor-pointer snap-center active:scale-[0.98] transition-all duration-300 border border-white/10">
               <div className={`absolute inset-0 bg-gradient-to-br ${program.color} mix-blend-multiply opacity-80 z-10`}></div>
               <img src={program.image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="bg"/>
               
               <div className="relative z-20 p-4 flex flex-col h-full justify-between">
                  <div className="flex justify-between items-start">
                    <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-md border border-white/20 tracking-wider">
                      {program.tag}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center backdrop-blur-md">
                      <PlayCircle size={16} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 shadow-black drop-shadow-md">{program.title}</h3>
                    <p className="text-xs text-white/80 line-clamp-2 shadow-black drop-shadow-md">{program.desc}</p>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Challenges Section */}
      <div className="pt-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Active Challenges</h2>
          <button onClick={() => setShowAllChallenges(true)} className="text-sm text-orange-500 flex items-center hover:text-orange-400 transition-colors">See all <ChevronRight size={16}/></button>
        </div>

        <div className="space-y-4">
          {CHALLENGES.slice(0, 2).map(challenge => {
             const percent = Math.min(100, Math.round((challenge.current / challenge.total) * 100));
             return (
              <div key={challenge.id} className="bg-zinc-900 rounded-2xl p-4 border border-white/5 active:scale-[0.98] transition-all cursor-pointer shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                     <div className={`w-12 h-12 rounded-xl ${challenge.bg} border ${challenge.border} flex items-center justify-center`}>
                       <challenge.icon size={24} className={challenge.color} />
                     </div>
                     <div>
                       <h3 className="font-bold text-base">{challenge.title}</h3>
                       <p className="text-xs text-zinc-400 flex items-center gap-1 mt-0.5"><User size={12}/> {challenge.participants} joined</p>
                     </div>
                  </div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider bg-zinc-800 px-2 py-1 rounded">{challenge.daysLeft}d left</span>
                </div>
                
                <div className="space-y-2">
                   <div className="flex justify-between text-sm">
                      <span className="text-zinc-300 font-medium">{challenge.current} / {challenge.total} {challenge.unit}</span>
                      <span className={`${challenge.color} font-bold`}>{percent}%</span>
                   </div>
                   <div className="w-full bg-zinc-800 rounded-full h-2.5 overflow-hidden">
                      <div className={`bg-gradient-to-r ${challenge.gradient} h-full rounded-full relative`} style={{ width: `${percent}%` }}>
                         {percent > 0 && <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/20 animate-pulse"></div>}
                      </div>
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

// --- Interactive Workout Session Overlay ---
function WorkoutSessionOverlay({ workout, onClose }) {
  const [phase, setPhase] = useState('countdown'); // 'countdown', 'drill', 'summary'
  const [count, setCount] = useState(3);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(workout.steps[0].seconds || 0);

  // Helper to generate a classic "boop" or "beep" using the Web Audio API
  const playCountdownBeep = (isGo) => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      // 'sine' wave gives us that classic, clean electronic beep
      osc.type = 'sine';
      // Lower pitch (440Hz) for 3-2-1, higher pitch (880Hz) for GO!
      osc.frequency.setValueAtTime(isGo ? 880 : 440, ctx.currentTime);
      
      gainNode.gain.setValueAtTime(0.5, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + (isGo ? 0.4 : 0.2));
      
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + (isGo ? 0.4 : 0.2));
    } catch (err) {
      console.warn("AudioContext blocked or not supported", err);
    }
  };

  // Handle Initial 3-second Countdown
  useEffect(() => {
    let timer;
    if (phase === 'countdown') {
      if (count > 0) {
        playCountdownBeep(false); // Play low "Boop"
        timer = setTimeout(() => setCount(c => c - 1), 1000);
      } else {
        playCountdownBeep(true); // Play high "Beep!"
        
        // Give the user a brief moment (600ms) to see the "GO!" text before switching phases
        timer = setTimeout(() => {
          setPhase('drill');
          setTimeLeft(workout.steps[currentStepIndex].seconds || 0);
        }, 600); 
      }
    }
    return () => clearTimeout(timer);
  }, [phase, count, currentStepIndex, workout]);

  // Handle Active Drill Countdown
  useEffect(() => {
    let drillTimer;
    if (phase === 'drill' && timeLeft > 0) {
      drillTimer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    }
    return () => clearTimeout(drillTimer);
  }, [phase, timeLeft]);

  const handleNextDrill = () => {
    if (currentStepIndex < workout.steps.length - 1) {
      const nextIndex = currentStepIndex + 1;
      setCurrentStepIndex(nextIndex);
      setTimeLeft(workout.steps[nextIndex].seconds || 0);
    } else {
      // Workout complete
      setPhase('summary');
    }
  };

  const handleRestart = () => {
    setCount(3);
    setCurrentStepIndex(0);
    setPhase('countdown');
    setTimeLeft(workout.steps[0].seconds || 0);
  };

  const formatTime = (totalSeconds) => {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="absolute inset-0 z-50 flex flex-col bg-black animate-in slide-in-from-bottom duration-300">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <img src={workout.image} alt="bg" className="w-full h-full object-cover blur-md scale-110" />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Top Bar for Quit option */}
      {phase === 'drill' && (
        <div className="relative z-10 pt-12 p-5 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
          <button onClick={onClose} className="p-2 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all text-xs font-bold text-zinc-300 px-4">
            Quit Workout
          </button>
          <div className="text-right">
             <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">{workout.title}</p>
             <p className="text-sm font-bold text-white">Drill {currentStepIndex + 1} of {workout.steps.length}</p>
          </div>
        </div>
      )}

      {/* PHASE: COUNTDOWN */}
      {phase === 'countdown' && (
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center">
           <h2 className="text-xl font-bold text-orange-500 tracking-widest mb-8 uppercase text-center">Get Ready<br/>{workout.title}</h2>
           <div key={count} className="text-9xl font-black text-white animate-in zoom-in-50 duration-300 drop-shadow-[0_0_30px_rgba(255,98,0,0.5)]">
              {count > 0 ? count : 'GO!'}
           </div>
        </div>
      )}

      {/* PHASE: ACTIVE DRILL */}
      {phase === 'drill' && (
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-6 animate-in fade-in duration-300">
           <div className="w-full max-w-sm bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl text-center">
              
              <div className="w-20 h-20 mx-auto rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
                <PlayCircle size={40} className="text-orange-500" />
              </div>

              <h2 className="text-3xl font-bold text-white mb-2">{workout.steps[currentStepIndex].title}</h2>
              
              <div className="flex flex-col items-center justify-center mb-6">
                <p className={`font-mono font-bold text-4xl flex items-center gap-3 ${timeLeft <= 10 ? 'text-red-500 animate-pulse' : 'text-orange-400'}`}>
                  <Clock size={28} className={timeLeft <= 10 ? "text-red-500" : "text-orange-500"} /> 
                  {formatTime(timeLeft)}
                </p>
                {timeLeft === 0 && <span className="text-xs font-bold text-red-500 mt-2 uppercase tracking-widest">Time's Up!</span>}
              </div>
              
              <div className="bg-black/50 rounded-xl p-5 border border-white/5 mb-8 text-left">
                <p className="text-sm text-zinc-300 leading-relaxed">{workout.steps[currentStepIndex].desc}</p>
              </div>

              {/* Progress Indicator */}
              <div className="flex gap-2 justify-center mb-8">
                {workout.steps.map((_, idx) => (
                  <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentStepIndex ? 'w-8 bg-orange-500' : idx < currentStepIndex ? 'w-4 bg-green-500' : 'w-4 bg-white/10'}`}></div>
                ))}
              </div>

              <button 
                onClick={handleNextDrill}
                className="w-full py-4 rounded-full font-bold flex items-center justify-center space-x-2 bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95 transition-transform"
              >
                {currentStepIndex < workout.steps.length - 1 ? (
                  <><span>Complete & Next Drill</span><ChevronRight size={18} /></>
                ) : (
                  <><span>Finish Workout</span><Check size={18} /></>
                )}
              </button>
           </div>
        </div>
      )}

      {/* PHASE: SUMMARY */}
      {phase === 'summary' && (
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-6 animate-in slide-in-from-bottom duration-500">
           
           <div className="w-24 h-24 rounded-full bg-green-500/20 border-2 border-green-500/50 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,197,94,0.3)] animate-in zoom-in duration-500 delay-100">
              <Award size={48} className="text-green-400" />
           </div>

           <h2 className="text-4xl font-black text-white tracking-tight mb-2">Good job!</h2>
           <p className="text-zinc-400 mb-12">{workout.title} Complete</p>

           <div className="w-full max-w-xs space-y-3">
              <button onClick={handleRestart} className="w-full py-4 rounded-xl font-bold bg-zinc-800 hover:bg-zinc-700 text-white active:scale-95 transition-all">
                Restart Drill
              </button>
              <button onClick={onClose} className="w-full py-4 rounded-xl font-bold bg-white text-black active:scale-95 transition-all shadow-lg">
                Back to Menu
              </button>
           </div>
        </div>
      )}
    </div>
  );
}

function AIFormView({ onOpenAI, onOpenPremium }) {
  const recentScans = [
    { id: 1, title: 'Catch & Shoot (Wing)', score: 92, insight: 'Perfect 45° release angle', date: 'Today', img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=200' },
    { id: 2, title: 'Free Throws', score: 78, insight: 'Guide hand thumb flick detected', date: 'Yesterday', img: 'https://images.unsplash.com/photo-1518063319789-7217e6706b04?auto=format&fit=crop&q=80&w=200' },
    { id: 3, title: 'Off-the-Dribble Pull Up', score: 85, insight: 'Good base balance', date: 'Mon, 4:15 PM', img: 'https://images.unsplash.com/photo-1519861531473-920026076248?auto=format&fit=crop&q=80&w=200' }
  ];

  return (
    <div className="p-5 space-y-6 pt-12 animate-in fade-in duration-300 relative min-h-full flex flex-col">
      <div className="flex justify-between items-end mb-4 relative z-30">
        <div>
          <h1 className="text-3xl font-bold mb-1">Form Checker</h1>
          <p className="text-xs text-orange-400 font-medium flex items-center gap-1">
            <Sparkles size={12} /> Powered by HoopAI Vision
          </p>
        </div>
      </div>

      <div className="relative flex-1">
        {/* Blurred out background content */}
        <div className="space-y-6 opacity-30 blur-[4px] pointer-events-none select-none transition-all duration-500">
          {/* AI Form Lab Feature Card */}
          <div className="relative rounded-3xl overflow-hidden p-6 shadow-2xl border border-white/10" style={{
            background: 'linear-gradient(135deg, #2A1B38 0%, #1A0B18 50%, #2D1412 100%)'
          }}>
            <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-40">
               <svg viewBox="0 0 100 100" className="w-full h-full text-orange-500/50">
                 <circle cx="80" cy="20" r="2" fill="currentColor"/>
                 <circle cx="60" cy="40" r="2" fill="currentColor"/>
                 <circle cx="40" cy="60" r="3" fill="currentColor"/>
                 <circle cx="50" cy="80" r="2" fill="currentColor"/>
                 <path d="M80 20 L60 40 L40 60 L50 80" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" fill="none"/>
                 <path d="M40 60 L10 50" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" fill="none"/>
                 <circle cx="10" cy="50" r="2" fill="currentColor"/>
               </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center space-x-1 text-orange-400 mb-2">
                <Scan size={16} />
                <span className="text-xs font-bold tracking-wider">PRO ANALYSIS</span>
              </div>
              <h2 className="text-2xl font-bold mb-2">Analyze Mechanics</h2>
              <p className="text-sm text-zinc-300 w-4/5 mb-6">Compare your shot mechanics to the pros using advanced computer vision and skeletal tracking.</p>
              
              <button className="w-full bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <Camera size={18} />
                <span>Open AI Camera</span>
              </button>
            </div>
          </div>

          {/* Pro Comparisons / Guides */}
          <div>
             <h3 className="font-bold text-lg mb-4">Focus Points</h3>
             <div className="grid grid-cols-2 gap-3">
                 <div className="bg-zinc-900 border border-white/5 rounded-2xl p-4">
                     <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
                         <Activity size={16} />
                     </div>
                     <h4 className="font-bold text-sm mb-1">Release Angle</h4>
                     <p className="text-xs text-zinc-400">Optimal arc is 45°-50° for maximum entry window.</p>
                 </div>
                 <div className="bg-zinc-900 border border-white/5 rounded-2xl p-4">
                     <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center mb-3">
                         <Target size={16} />
                     </div>
                     <h4 className="font-bold text-sm mb-1">Elbow Tuck</h4>
                     <p className="text-xs text-zinc-400">Keep shooting elbow aligned vertically with the knee.</p>
                 </div>
             </div>
          </div>

          {/* Recent Scans */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">Recent Scans</h3>
              <button className="text-xs text-orange-500 font-medium">See All</button>
            </div>
            <div className="space-y-3">
              {recentScans.map(scan => (
                <div key={scan.id} className="bg-zinc-900 rounded-2xl p-3 border border-white/5 flex gap-4 items-center">
                  <div className="w-16 h-16 rounded-xl bg-zinc-800 overflow-hidden relative shrink-0">
                      <img src={scan.img} className="opacity-60 object-cover w-full h-full" alt="Scan thumbnail" />
                      <div className={`absolute inset-0 flex items-center justify-center font-black text-sm drop-shadow-md ${scan.score >= 90 ? 'text-green-400' : 'text-orange-400'}`}>
                          {scan.score}
                      </div>
                  </div>
                  <div className="flex-1">
                      <h4 className="font-bold text-sm text-zinc-100">{scan.title}</h4>
                      <p className={`text-xs mt-0.5 ${scan.score >= 90 ? 'text-green-400' : 'text-orange-400'}`}>{scan.insight}</p>
                      <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-wider">{scan.date}</p>
                  </div>
                  <ChevronRight size={18} className="text-zinc-600 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Lock Overlay Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-start pt-20 p-6 text-center animate-in fade-in duration-500">
           <div className="w-20 h-20 bg-orange-500/10 rounded-full flex items-center justify-center mb-6 border-2 border-orange-500/20 shadow-[0_0_30px_rgba(255,98,0,0.2)]">
              <Lock size={32} className="text-orange-500" />
           </div>
           <h2 className="text-2xl font-bold mb-3 shadow-black drop-shadow-md">HoopAI PRO Required</h2>
           <p className="text-zinc-300 text-sm mb-8 max-w-[280px] mx-auto shadow-black drop-shadow-sm leading-relaxed">
             Get HoopLife Premium to unlock the AI Form Checker, analyze your shooting mechanics, and compare your form to the pros.
           </p>
           <button onClick={onOpenPremium} className="w-full max-w-xs py-4 rounded-xl font-bold flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-[0_0_20px_rgba(255,98,0,0.3)] active:scale-95 transition-all">
              <Crown size={18} className="fill-white/20" />
              <span>View Premium Plans</span>
           </button>
        </div>
      </div>
    </div>
  );
}

function CommunitiesView() {
  const [view, setView] = useState('discover'); 
  const [isCreating, setIsCreating] = useState(false);
  const [isAddingFriend, setIsAddingFriend] = useState(false);
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [communityMode, setCommunityMode] = useState('');
  const [newCommunityName, setNewCommunityName] = useState('');
  const [newCommunityDesc, setNewCommunityDesc] = useState('');

  const discoverCommunities = [
    { id: 1, name: "10K Shot Club", members: "14.2k", desc: "For hoopers committed to getting 10,000 reps up this month. Post your progress and keep each other accountable.", motto: "Consistency is key.", icon: Target, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20" },
    { id: 2, name: "Varsity Prep", members: "5.1k", desc: "High school athletes training for the upcoming varsity season. Workouts tailored for conditioning and game-speed.", motto: "Earn your spot.", icon: Trophy, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { id: 3, name: "Handle Life", members: "8.9k", desc: "Daily dribbling drills and ball control challenges to keep the ball on a string.", motto: "Ball on a string.", icon: Activity, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
    { id: 4, name: "Local Rec Runners", members: "342", desc: "Organizing weekend runs and pickup games at local parks and indoor rec centers.", motto: "Run the floor.", icon: MapPin, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" }
  ];

  const [myCommunitiesList, setMyCommunitiesList] = useState([
    { id: 1, name: "Point Guard Academy", members: "2.4k", desc: "Elite drills, film breakdown, and discussions exclusively for floor generals and point guards.", motto: "Lead the team.", updates: "3 new drills posted today.", icon: Users, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20", isAdmin: true }
  ]);

  const handleCommunityClick = (community, mode) => {
    setSelectedCommunity(community);
    setCommunityMode(mode);
  };

  const handleCreateCommunity = () => {
    if (!newCommunityName.trim()) return; // Prevent empty creations
    
    const newCommunity = {
      id: Date.now(), // Generate a unique ID
      name: newCommunityName,
      members: "1",
      desc: newCommunityDesc || "A new HoopAI community.",
      motto: "Let's hoop.",
      updates: "Community created today.",
      icon: Users,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
      isAdmin: true
    };

    // Add new community to list, clear inputs, and switch to My Communities tab
    setMyCommunitiesList([newCommunity, ...myCommunitiesList]);
    setNewCommunityName('');
    setNewCommunityDesc('');
    setIsCreating(false);
    setView('my_groups');
  };

  const handleDeleteCommunity = () => {
    if (selectedCommunity) {
      // Filter out the deleted community from the state array
      setMyCommunitiesList(prevList => prevList.filter(c => c.id !== selectedCommunity.id));
      // Close the community page overlay
      setSelectedCommunity(null);
    }
  };

  return (
    <div className="p-5 space-y-6 pt-12 animate-in fade-in duration-300 relative min-h-full">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-3xl font-bold">Communities</h1>
        <div className="flex items-center gap-3">
          <button onClick={() => setIsAddingFriend(true)} className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white active:scale-95 transition-all hover:bg-zinc-700">
            <UserPlus size={20} />
          </button>
          <button onClick={() => setIsCreating(true)} className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,98,0,0.3)] active:scale-95 transition-all">
            <Plus size={20} />
          </button>
        </div>
      </div>

      <div className="relative">
        <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
        <input type="text" placeholder="Find teams, training groups..." className="w-full bg-zinc-900 rounded-xl py-3 pl-10 pr-4 text-sm outline-none focus:ring-1 focus:ring-orange-500" />
      </div>

      <div className="flex p-1 bg-zinc-900 rounded-xl">
        <button onClick={() => setView('discover')} className={`flex-1 py-2 text-sm rounded-lg font-medium transition-all ${view === 'discover' ? 'bg-zinc-700 text-white shadow-sm' : 'text-zinc-400 hover:text-zinc-200'}`}>Discover</button>
        <button onClick={() => setView('my_groups')} className={`flex-1 py-2 text-sm rounded-lg font-medium transition-all ${view === 'my_groups' ? 'bg-zinc-700 text-white shadow-sm' : 'text-zinc-400 hover:text-zinc-200'}`}>My Communities</button>
      </div>

      <div className="space-y-4">
        {view === 'discover' ? (
          discoverCommunities.map(community => (
            <div key={community.id} onClick={() => handleCommunityClick(community, 'discover')} className="bg-zinc-900 rounded-2xl p-4 border border-white/5 flex gap-4 items-center cursor-pointer active:scale-[0.98] transition-all hover:bg-zinc-800 shadow-sm">
              <div className={`w-14 h-14 rounded-xl ${community.bg} border ${community.border} flex items-center justify-center shrink-0`}><community.icon size={24} className={community.color} /></div>
              <div className="flex-1"><h3 className="font-bold text-base">{community.name}</h3><p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1">{community.members} Members</p><p className="text-xs text-zinc-400 line-clamp-1">{community.desc}</p></div>
              <ChevronRight size={20} className="text-zinc-600 shrink-0" />
            </div>
          ))
        ) : (
          myCommunitiesList.map(community => (
            <div key={community.id} onClick={() => handleCommunityClick(community, 'my_groups')} className="bg-zinc-900 rounded-2xl p-4 border border-white/5 flex gap-4 items-center active:scale-[0.98] transition-all cursor-pointer hover:bg-zinc-800 shadow-sm">
              <div className={`w-14 h-14 rounded-xl ${community.bg} border ${community.border} flex items-center justify-center shrink-0`}><community.icon size={24} className={community.color} /></div>
              <div className="flex-1"><h3 className="font-bold text-base">{community.name}</h3><p className="text-xs text-orange-400 mt-1 flex items-center gap-1"><MessageSquare size={12}/> {community.updates}</p></div>
              <ChevronRight size={20} className="text-zinc-600 shrink-0" />
            </div>
          ))
        )}
      </div>

      {selectedCommunity && (
         <div className="fixed inset-0 z-50 flex flex-col bg-zinc-950 animate-in slide-in-from-right duration-300">
           <div className="relative h-56 bg-zinc-900 overflow-hidden flex-shrink-0">
              <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-zinc-700 to-black"></div>
              <button onClick={() => setSelectedCommunity(null)} className="absolute top-12 left-5 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 z-20 active:scale-95 transition-transform"><ChevronLeft size={24} className="text-white" /></button>
              <div className={`absolute -bottom-6 left-6 w-24 h-24 rounded-2xl ${selectedCommunity.bg} border-2 border-zinc-950 flex items-center justify-center backdrop-blur-xl z-20 shadow-xl`}><selectedCommunity.icon size={40} className={selectedCommunity.color} /></div>
           </div>
           <div className="flex-1 overflow-y-auto pt-10 px-6 pb-32 space-y-8">
              <div>
                <h1 className="text-3xl font-bold leading-tight">{selectedCommunity.name}</h1>
                <p className="text-orange-500 font-semibold text-sm mt-1">"{selectedCommunity.motto}"</p>
                <div className="flex items-center gap-2 mt-4 text-xs text-zinc-400 font-bold bg-zinc-900 w-max px-3 py-1.5 rounded-lg border border-white/5"><Users size={14} className="text-zinc-300" /> {selectedCommunity.members} Members</div>
              </div>
              <div className="space-y-3"><h3 className="font-bold text-sm uppercase tracking-wider text-zinc-500">About this Community</h3><p className="text-sm text-zinc-300 leading-relaxed">{selectedCommunity.desc}</p></div>
              {communityMode === 'discover' ? (
                <button className="w-full py-4 mt-8 rounded-xl font-bold flex items-center justify-center space-x-2 bg-green-500 text-black shadow-[0_0_20px_rgba(34,197,94,0.3)] active:scale-95 transition-all text-base">Join Community</button>
              ) : (
                <div className="mt-8 space-y-3 pt-6 border-t border-white/10">
                   <h3 className="font-bold text-xs text-zinc-500 uppercase tracking-wider mb-4">Admin Options</h3>
                   <button className="w-full p-4 rounded-xl flex items-center gap-4 bg-zinc-900 border border-white/5 hover:bg-zinc-800 active:scale-95 transition-all"><Settings size={20} className="text-zinc-400" /><span className="font-semibold text-sm">Configure Community</span><ChevronRight size={18} className="text-zinc-600 ml-auto" /></button>
                   <button className="w-full p-4 rounded-xl flex items-center gap-4 bg-zinc-900 border border-white/5 hover:bg-zinc-800 active:scale-95 transition-all"><Users size={20} className="text-blue-400" /><span className="font-semibold text-sm">Manage Members</span><ChevronRight size={18} className="text-zinc-600 ml-auto" /></button>
                   <button className="w-full p-4 rounded-xl flex items-center gap-4 bg-zinc-900 border border-white/5 hover:bg-zinc-800 active:scale-95 transition-all mt-6"><LogOut size={20} className="text-orange-500" /><span className="font-semibold text-sm text-orange-500">Leave Community</span></button>
                   <button onClick={handleDeleteCommunity} className="w-full p-4 rounded-xl flex items-center gap-4 bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 active:scale-95 transition-all"><Trash2 size={20} className="text-red-500" /><span className="font-semibold text-sm text-red-500">Delete Community</span></button>
                </div>
              )}
           </div>
         </div>
      )}

      {isCreating && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end justify-center p-4 pb-24 animate-in fade-in duration-200">
           <div className="bg-zinc-900 border border-white/10 w-full max-w-sm rounded-3xl p-6 shadow-2xl animate-in slide-in-from-bottom-8 duration-300">
              <div className="flex justify-between items-center mb-6">
                 <h2 className="text-xl font-bold">Create Community</h2>
                 <button onClick={() => setIsCreating(false)} className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"><X size={16} /></button>
              </div>
              <div className="space-y-4 mb-6">
                 <div><label className="text-xs font-bold text-zinc-500 uppercase mb-1 block">Community Name</label><input type="text" value={newCommunityName} onChange={(e) => setNewCommunityName(e.target.value)} placeholder="e.g. Weekend Shooters" className="w-full bg-black border border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-orange-500 transition-colors" /></div>
                 <div><label className="text-xs font-bold text-zinc-500 uppercase mb-1 block">Description</label><textarea rows="3" value={newCommunityDesc} onChange={(e) => setNewCommunityDesc(e.target.value)} placeholder="What is this community about?" className="w-full bg-black border border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-orange-500 transition-colors resize-none"></textarea></div>
              </div>
              <button onClick={handleCreateCommunity} className="w-full py-4 rounded-xl font-bold flex items-center justify-center space-x-2 bg-orange-500 text-white active:scale-95 transition-all shadow-[0_0_15px_rgba(255,98,0,0.3)]">Create Community</button>
           </div>
        </div>
      )}

      {isAddingFriend && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end justify-center p-4 pb-24 animate-in fade-in duration-200">
           <div className="bg-zinc-900 border border-white/10 w-full max-w-sm rounded-3xl p-6 shadow-2xl animate-in slide-in-from-bottom-8 duration-300">
              <div className="flex justify-between items-center mb-6">
                 <h2 className="text-xl font-bold">Add Friend</h2>
                 <button onClick={() => setIsAddingFriend(false)} className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"><X size={16} /></button>
              </div>
              
              <div className="space-y-4 mb-6">
                 <div>
                   <label className="text-xs font-bold text-zinc-500 uppercase mb-1 block">Search</label>
                   <div className="relative">
                     <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                     <input type="text" placeholder="Username or phone number..." className="w-full bg-black border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm outline-none focus:border-orange-500 transition-colors" />
                   </div>
                 </div>
                 <button onClick={() => setIsAddingFriend(false)} className="w-full py-4 rounded-xl font-bold flex items-center justify-center space-x-2 bg-orange-500 text-white active:scale-95 transition-all shadow-[0_0_15px_rgba(255,98,0,0.3)]">Send Invite</button>
              </div>
              
              <div className="pt-6 border-t border-white/10 space-y-3">
                 <h3 className="font-bold text-xs text-zinc-500 uppercase tracking-wider mb-2">More Options</h3>
                 <button className="w-full p-4 rounded-xl flex items-center gap-4 bg-zinc-800/50 hover:bg-zinc-800 active:scale-95 transition-all border border-white/5">
                   <Smartphone size={20} className="text-blue-400" />
                   <span className="font-semibold text-sm">Sync Contacts</span>
                   <ChevronRight size={18} className="text-zinc-600 ml-auto" />
                 </button>
                 <button className="w-full p-4 rounded-xl flex items-center gap-4 bg-zinc-800/50 hover:bg-zinc-800 active:scale-95 transition-all border border-white/5">
                   <Share2 size={20} className="text-green-400" />
                   <span className="font-semibold text-sm">Share Profile Link</span>
                   <ChevronRight size={18} className="text-zinc-600 ml-auto" />
                 </button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}

function StatsView() {
  return (
    <div className="p-5 space-y-6 pt-12 animate-in fade-in duration-300">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Analytics</h1>
        <button className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center"><Calendar size={20} className="text-zinc-400" /></button>
      </div>
      <div className="flex p-1 bg-zinc-900 rounded-xl mb-8">
        {['Today', 'Week', 'Month', 'All'].map((period, i) => (
          <button key={period} className={`flex-1 py-2 text-sm rounded-lg font-medium transition-all ${i === 3 ? 'bg-zinc-700 text-white shadow-sm' : 'text-zinc-400 hover:text-zinc-200'}`}>{period}</button>
        ))}
      </div>
      <div className="text-center space-y-2 mb-8">
        <p className="text-xs text-zinc-400 font-bold tracking-widest uppercase">Overall FG%</p>
        <div className="flex items-end justify-center justify-items-center gap-2">
          <span className="text-7xl font-bold leading-none tracking-tighter">53</span><span className="text-3xl font-bold text-zinc-500 pb-1">%</span>
        </div>
        <div className="inline-flex items-center gap-1 bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-xs font-bold border border-green-500/20"><Activity size={12} /> +2.1%</div>
      </div>
      <div className="rounded-3xl p-5 border border-white/5" style={{ backgroundColor: COLORS.bgCard }}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold">Recent Session Chart</h3><span className="text-xs text-zinc-500">250 shots</span>
        </div>
        <div className="w-full aspect-[4/3] bg-zinc-900/50 rounded-xl relative overflow-hidden flex items-center justify-center p-4">
          <CourtVisualization />
        </div>
        <div className="flex justify-center items-center gap-6 mt-4 text-xs font-medium text-zinc-400">
          <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(255,98,0,0.8)]"></span> Make</div>
          <div className="flex items-center gap-2"><X size={12} className="text-zinc-500"/> Miss</div>
        </div>
      </div>
       <div className="rounded-3xl p-5 border border-white/5 h-32" style={{ backgroundColor: COLORS.bgCard }}>
          <h3 className="font-bold mb-2">FG% Trend</h3>
          <div className="w-full h-full flex items-center justify-center text-zinc-600 text-sm">Data visualization loading...</div>
       </div>
    </div>
  );
}

function ProfileView({ onOpenSettings, unitSystem }) {
  const height = unitSystem === 'metric' ? '167' : `5'6"`;
  const heightUnit = unitSystem === 'metric' ? 'cm' : '';
  const weight = unitSystem === 'metric' ? '52' : '115';
  const weightUnit = unitSystem === 'metric' ? 'kg' : 'lbs';

  return (
    <div className="animate-in fade-in duration-300 pb-10">
      <div className="h-32 relative w-full bg-gradient-to-b from-white/[0.02] to-transparent">
        <button onClick={onOpenSettings} className="absolute top-12 right-5 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 z-10 active:scale-95 transition-all"><Settings size={20} /></button>
      </div>
      <div className="px-5 -mt-16 relative z-10">
        <div className="flex items-end gap-4 mb-8">
          <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 bg-orange-500/20" style={{ borderColor: COLORS.bgBase }}>
            <img src="IMG_1205.jpg" alt="Jason Kwok" className="w-full h-full object-cover" />
          </div>
          <div className="pb-2"><h1 className="text-2xl font-bold">Jason Kwok</h1><p className="text-orange-500 font-medium text-sm">Point Guard</p></div>
        </div>
        <div className="grid grid-cols-3 divide-x divide-zinc-800 border border-zinc-800 rounded-2xl mb-8 overflow-hidden" style={{ backgroundColor: COLORS.bgCard }}>
          <div className="p-4 text-center"><p className="text-xs text-zinc-500 font-bold mb-1">HEIGHT</p><p className="font-bold text-lg">{height}<span className="text-xs text-zinc-500 font-normal ml-1">{heightUnit}</span></p></div>
          <div className="p-4 text-center"><p className="text-xs text-zinc-500 font-bold mb-1">WEIGHT</p><p className="font-bold text-lg">{weight}<span className="text-xs text-zinc-500 font-normal ml-1">{weightUnit}</span></p></div>
          <div className="p-4 text-center"><p className="text-xs text-zinc-500 font-bold mb-1">TEAM</p><p className="font-bold text-lg">CKY</p></div>
        </div>
        <h2 className="text-lg font-bold mb-4">Career Stats</h2>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <StatBox title="TOTAL SHOTS" value="570" />
          <StatBox title="CAREER FG%" value="53%" highlight />
          <StatBox title="SESSIONS" value="4" />
          <StatBox title="HOURS" value="1.5" />
        </div>
        <div className="flex justify-between items-center mb-4"><h2 className="text-lg font-bold">Achievements</h2><span className="text-xs text-orange-500 font-medium">3/12 Unlocked</span></div>
        <div className="space-y-3">
          <div className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-800" style={{ backgroundColor: COLORS.bgCard }}>
            <div className="w-12 h-12 rounded-full bg-orange-900/30 flex items-center justify-center border border-orange-500/20"><Target size={20} className="text-orange-500" /></div>
            <div className="flex-1"><h4 className="font-bold text-sm">10k Club</h4><p className="text-xs text-zinc-500">Make 10,000 shots</p></div><Trophy size={20} className="text-orange-500 opacity-50" />
          </div>
           <div className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-800/50 opacity-60" style={{ backgroundColor: COLORS.bgCard }}>
            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center"><Flame size={20} className="text-zinc-500" /></div>
            <div className="flex-1"><h4 className="font-bold text-sm">Iron Man</h4><p className="text-xs text-zinc-500">Train 30 days in a row</p></div>
            <div className="w-16 h-2 bg-zinc-800 rounded-full overflow-hidden"><div className="h-full bg-orange-500 w-[40%]"></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingsOverlay({ onClose, onOpenPremium, unitSystem, setUnitSystem }) {
  const toggleUnitSystem = () => {
    setUnitSystem(prev => prev === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <div className="absolute inset-0 z-50 flex flex-col bg-zinc-950 animate-in slide-in-from-right duration-300">
       {/* Header */}
       <div className="p-5 pt-12 flex items-center border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-10">
         <button onClick={onClose} className="p-2 -ml-2 rounded-full bg-transparent hover:bg-zinc-800 active:scale-95 transition-all mr-2">
           <ChevronLeft size={24} />
         </button>
         <h2 className="text-xl font-bold">Settings</h2>
       </div>
       
       <div className="flex-1 overflow-y-auto p-5 pb-32 space-y-8">
          {/* Premium Promo */}
          <div onClick={onOpenPremium} className="bg-gradient-to-r from-orange-600 to-amber-500 rounded-2xl p-5 flex items-center justify-between shadow-lg active:scale-95 transition-all cursor-pointer">
             <div>
                <h3 className="font-bold text-white flex items-center gap-2"><Crown size={18} className="text-white fill-white/20"/> HoopAI Premium</h3>
                <p className="text-white/80 text-xs mt-1 font-medium">Unlock advanced AI analysis & all programs</p>
             </div>
             <ChevronRight size={20} className="text-white/50" />
          </div>

          {/* Account */}
          <div>
             <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3 px-2">Account</h3>
             <div className="bg-zinc-900 rounded-2xl border border-white/5 overflow-hidden">
                <SettingsRow icon={User} title="Change Username" value="Jason Kwok" />
                <SettingsRow icon={Lock} title="Change Password" />
                <SettingsRow icon={MapPin} title="Location" value="New York, NY" />
             </div>
          </div>

          {/* Preferences */}
          <div>
             <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3 px-2">Preferences</h3>
             <div className="bg-zinc-900 rounded-2xl border border-white/5 overflow-hidden">
                <SettingsRow icon={Bell} title="Push Notifications" value="On" />
                <SettingsRow icon={Activity} title="Units" value={unitSystem === 'metric' ? 'Metric (cm, kg)' : 'Imperial (ft, lbs)'} onClick={toggleUnitSystem} />
             </div>
          </div>

          {/* Support & Privacy */}
          <div>
             <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3 px-2">About</h3>
             <div className="bg-zinc-900 rounded-2xl border border-white/5 overflow-hidden">
                <SettingsRow icon={Shield} title="Privacy Policy" />
                <SettingsRow icon={FileText} title="Terms of Service" />
             </div>
          </div>

          {/* Log Out */}
          <button className="w-full py-4 rounded-xl font-bold flex items-center justify-center space-x-2 bg-red-500/10 text-red-500 border border-red-500/20 active:scale-95 transition-all mt-4">
             <LogOut size={18} />
             <span>Log Out</span>
          </button>
       </div>
    </div>
  );
}

function SettingsRow({ icon: Icon, title, value, onClick }) {
  return (
    <div onClick={onClick} className="flex items-center justify-between p-4 border-b border-white/5 last:border-0 hover:bg-zinc-800/50 active:bg-zinc-800 transition-colors cursor-pointer">
       <div className="flex items-center gap-3">
          <Icon size={18} className="text-zinc-400" />
          <span className="text-sm font-medium">{title}</span>
       </div>
       <div className="flex items-center gap-2">
          {value && <span className="text-xs text-zinc-500">{value}</span>}
          <ChevronRight size={16} className="text-zinc-600" />
       </div>
    </div>
  );
}

function PremiumOverlay({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-zinc-950 animate-in slide-in-from-bottom duration-300">
       <div className="relative h-64 bg-zinc-900 overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-amber-500 opacity-90"></div>
          <button onClick={onClose} className="absolute top-12 right-5 w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center border border-white/10 z-20 active:scale-95 transition-transform"><X size={20} className="text-white" /></button>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 mt-4">
             <Crown size={56} className="text-white mb-4 drop-shadow-md" />
             <h1 className="text-3xl font-black text-white tracking-tight drop-shadow-md mb-2">HoopAI PRO</h1>
             <p className="text-white/90 text-sm font-medium">Elevate your game with unlimited access to elite tools.</p>
          </div>
       </div>
       
       <div className="flex-1 overflow-y-auto p-6 pb-32 space-y-8">
          <div className="space-y-4">
             <h3 className="font-bold text-xs uppercase tracking-widest text-zinc-500">Pro Benefits</h3>
             <div className="space-y-4 bg-zinc-900 p-5 rounded-2xl border border-white/5">
                <FeatureItem text="Ad-Free Experience" />
                <FeatureItem text="Unlock AI Form Checker" />
                <FeatureItem text="Join Unlimited Communities" />
                <FeatureItem text="Advanced Analytics & Trends" />
                <FeatureItem text="Exclusive Pro Workouts" />
             </div>
          </div>

          <div className="space-y-3">
             <h3 className="font-bold text-xs uppercase tracking-widest text-zinc-500 mb-4">Choose your plan</h3>
             
             <div className="bg-orange-500/10 border-2 border-orange-500 rounded-2xl p-5 flex items-center justify-between active:scale-[0.98] transition-all cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">BEST VALUE</div>
                <div>
                   <h4 className="font-bold text-lg text-white">Annual</h4>
                   <p className="text-sm text-zinc-400">$79.99 / year</p>
                </div>
                <div className="text-right">
                   <p className="font-bold text-orange-500 text-xl">$6.66</p>
                   <p className="text-xs text-zinc-500 font-medium">/ month</p>
                </div>
             </div>

             <div className="bg-zinc-900 border border-white/10 rounded-2xl p-5 flex items-center justify-between active:scale-[0.98] transition-all cursor-pointer hover:bg-zinc-800">
                <div>
                   <h4 className="font-bold text-lg text-white">Monthly</h4>
                   <p className="text-sm text-zinc-400">Cancel anytime</p>
                </div>
                <div className="text-right">
                   <p className="font-bold text-white text-xl">$9.99</p>
                   <p className="text-xs text-zinc-500 font-medium">/ month</p>
                </div>
             </div>
          </div>
          
          <button className="w-full py-4 mt-6 rounded-xl font-bold flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-[0_0_20px_rgba(255,98,0,0.3)] active:scale-95 transition-all text-base">
             Start 7-Day Free Trial
          </button>
          <p className="text-center text-[10px] text-zinc-500 font-medium mt-4">Recurring billing. Cancel anytime before trial ends.</p>
       </div>
    </div>
  );
}

function FeatureItem({ text }) {
  return (
    <div className="flex items-center gap-3">
       <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
          <Check size={12} className="text-orange-500" />
       </div>
       <span className="text-sm font-semibold text-zinc-200">{text}</span>
    </div>
  );
}

function AICameraOverlay({ onClose }) {
  const [status, setStatus] = useState('align'); 
  const [stats, setStats] = useState({ makes: 0, misses: 0 });
  const videoRef = useRef(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let activeStream;
    const initCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        activeStream = stream;
        if (videoRef.current) { videoRef.current.srcObject = stream; }
      } catch (err) {
        console.error("Camera error:", err);
        setHasError(true);
      }
    };
    initCamera();
    return () => { if (activeStream) { activeStream.getTracks().forEach(track => track.stop()); } };
  }, []);

  useEffect(() => {
    let interval;
    if (status === 'tracking') {
      interval = setInterval(() => {
        setStats(prev => {
          const isMake = Math.random() > 0.45; 
          return { makes: prev.makes + (isMake ? 1 : 0), misses: prev.misses + (isMake ? 0 : 1) };
        });
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [status]);

  const totalShots = stats.makes + stats.misses;
  const fgPercentage = totalShots > 0 ? Math.round((stats.makes / totalShots) * 100) : 0;

  return (
    <div className="absolute inset-0 bg-black z-50 flex flex-col animate-in slide-in-from-bottom duration-300">
      <div className="p-5 pt-12 flex justify-between items-center absolute top-0 w-full z-20 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-2"><Target size={20} className={status === 'tracking' ? "text-green-500 animate-pulse" : "text-white"} /><span className="font-bold text-sm tracking-wider">AI SHOT TRACKER</span></div>
        <button onClick={onClose} className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 active:scale-95 transition-all"><X size={20} /></button>
      </div>

      <div className="flex-1 relative bg-zinc-900 overflow-hidden flex items-center justify-center">
        {hasError ? (
          <div className="text-center p-6 z-10"><Camera size={48} className="text-zinc-600 mx-auto mb-4" /><p className="text-zinc-400 text-sm">Camera access denied or unavailable. Please allow camera permissions in your browser.</p></div>
        ) : (
          <video ref={videoRef} autoPlay playsInline muted className={`w-full h-full object-cover transition-opacity duration-500 ${status === 'summary' ? 'opacity-20 blur-sm' : 'opacity-80'}`} />
        )}

        {status === 'tracking' && (
          <div className="absolute top-24 w-full px-6 flex justify-center z-30 animate-in slide-in-from-top-4 fade-in duration-300">
             <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-4 px-6 border border-white/10 flex gap-8 shadow-2xl">
                <div className="text-center"><p className="text-[10px] text-zinc-400 font-bold uppercase mb-1">Makes</p><p className="text-4xl font-black text-green-400 font-mono tracking-tighter">{stats.makes}</p></div><div className="w-px bg-white/10"></div>
                <div className="text-center"><p className="text-[10px] text-zinc-400 font-bold uppercase mb-1">Misses</p><p className="text-4xl font-black text-orange-500 font-mono tracking-tighter">{stats.misses}</p></div><div className="w-px bg-white/10"></div>
                <div className="text-center"><p className="text-[10px] text-zinc-400 font-bold uppercase mb-1">FG%</p><p className="text-4xl font-black text-white font-mono tracking-tighter">{fgPercentage}</p></div>
             </div>
          </div>
        )}

        {status === 'tracking' && (
           <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-48 h-48 border-2 border-dashed border-green-500/30 rounded-lg flex items-center justify-center pointer-events-none"><Scan size={64} className="text-green-500/20 animate-ping" /></div>
        )}

        {status === 'align' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/40 backdrop-blur-sm z-30">
            <div className="w-48 h-48 border-2 border-dashed border-white/50 rounded-2xl mb-8 flex items-center justify-center"><Target size={48} className="text-white/50" /></div>
            <p className="text-lg font-bold mb-2 shadow-black drop-shadow-md">Point Camera at the Hoop</p><p className="text-sm text-zinc-300 mb-12 shadow-black drop-shadow-md">Ensure the rim and backboard are clearly visible in the frame.</p>
            <button onClick={() => setStatus('tracking')} className="bg-green-500 text-black font-bold py-4 px-12 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] active:scale-95 transition-all flex items-center gap-2"><Play size={20} className="fill-black" /> Start Session</button>
          </div>
        )}

        {status === 'tracking' && (
          <div className="absolute bottom-10 w-full px-6 z-30">
            <button onClick={() => setStatus('summary')} className="w-full py-4 bg-red-600/90 backdrop-blur-md text-white font-bold rounded-xl active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2"><div className="w-3 h-3 bg-white rounded-sm"></div> End Session</button>
          </div>
        )}

        {status === 'summary' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-40 bg-black/60 animate-in fade-in duration-300">
             <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 shadow-2xl w-full max-w-sm">
                <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-4"><Target size={32} className="text-green-500" /></div>
                <h3 className="text-2xl font-bold mb-1">Session Complete</h3><p className="text-sm text-zinc-400 mb-8">Great shooting today!</p>
                <div className="grid grid-cols-2 gap-4 mb-8 text-left">
                   <div className="bg-black/50 p-4 rounded-xl border border-white/5"><p className="text-[10px] text-zinc-500 font-bold uppercase mb-1">Total Shots</p><p className="text-2xl font-bold">{totalShots}</p></div>
                   <div className="bg-black/50 p-4 rounded-xl border border-white/5"><p className="text-[10px] text-zinc-500 font-bold uppercase mb-1">Overall FG%</p><p className="text-2xl font-bold text-green-400">{fgPercentage}%</p></div>
                   <div className="bg-black/50 p-4 rounded-xl border border-white/5"><p className="text-[10px] text-zinc-500 font-bold uppercase mb-1">Makes</p><p className="text-2xl font-bold">{stats.makes}</p></div>
                   <div className="bg-black/50 p-4 rounded-xl border border-white/5"><p className="text-[10px] text-zinc-500 font-bold uppercase mb-1">Misses</p><p className="text-2xl font-bold text-orange-500">{stats.misses}</p></div>
                </div>
                <div className="flex flex-col gap-3">
                  <button onClick={onClose} className="w-full py-4 bg-white text-black font-bold rounded-xl text-sm active:scale-95 transition-all shadow-lg">Save to Profile</button>
                  <button onClick={onClose} className="w-full py-3 text-zinc-400 font-bold rounded-xl text-sm active:scale-95 transition-all hover:text-white">Discard</button>
                </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}

function NotificationsOverlay({ onClose }) {
  const notifications = [
    { id: 1, title: "New Community Member", text: "Aarif Ng joined your community 'Point Guard Academy'!", time: "12m ago", icon: Users, color: "text-blue-400", bg: "bg-blue-500/10" },
    { id: 2, title: "Workout Saved", text: "New workout 'Elite Guard Finishing' successfully saved to your profile!", time: "2h ago", icon: Target, color: "text-green-400", bg: "bg-green-500/10" },
    { id: 3, title: "Goal Reminder", text: "You are only 1 session away from hitting your weekly goal. Get out there!", time: "5h ago", icon: Flame, color: "text-orange-500", bg: "bg-orange-500/10" }
  ];

  return (
    <div className="absolute inset-0 z-50 flex flex-col animate-in slide-in-from-right duration-300" style={{ backgroundColor: COLORS.bgBase }}>
      <div className="p-5 pt-12 flex justify-between items-center border-b border-white/10 bg-black/50 backdrop-blur-md">
        <h2 className="text-xl font-bold flex items-center gap-2">Notifications <span className="bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded-full">3 New</span></h2>
        <button onClick={onClose} className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 active:scale-95 transition-all"><X size={20} /></button>
      </div>
      <div className="flex-1 overflow-y-auto p-5 space-y-3 pb-24">
        {notifications.map(n => (
          <div key={n.id} className="bg-zinc-900 rounded-2xl p-4 border border-white/5 flex gap-4 items-start active:scale-[0.98] transition-all cursor-pointer hover:bg-zinc-800">
            <div className={`w-10 h-10 rounded-full ${n.bg} flex items-center justify-center shrink-0 mt-1`}><n.icon size={18} className={n.color} /></div>
            <div className="flex-1"><div className="flex justify-between items-start mb-1"><h3 className="font-bold text-sm">{n.title}</h3><span className="text-[10px] text-zinc-500 font-medium whitespace-nowrap ml-2">{n.time}</span></div><p className="text-xs text-zinc-400 leading-relaxed">{n.text}</p></div>
          </div>
        ))}
        <div className="text-center pt-6"><p className="text-xs text-zinc-600 font-medium">You're all caught up!</p></div>
      </div>
    </div>
  );
}

function WearableOverlay({ onClose, onConnect }) {
  const [connectingTo, setConnectingTo] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState('idle'); 

  const brands = [
    { id: 'apple', name: 'Apple Watch', color: 'hover:border-zinc-400' }, { id: 'garmin', name: 'Garmin', color: 'hover:border-blue-500' },
    { id: 'huawei', name: 'Huawei', color: 'hover:border-red-500' }, { id: 'samsung', name: 'Galaxy Watch', color: 'hover:border-indigo-500' },
    { id: 'fitbit', name: 'Fitbit', color: 'hover:border-teal-500' }, { id: 'redmi', name: 'Redmi / Xiaomi', color: 'hover:border-orange-500' },
    { id: 'whoop', name: 'Whoop', color: 'hover:border-zinc-100' }, { id: 'coros', name: 'Coros', color: 'hover:border-zinc-300' }
  ];

  const handleConnect = (brand) => {
    setConnectingTo(brand);
    setConnectionStatus('connecting');
    setTimeout(() => {
      setConnectionStatus('success');
      onConnect(brand);
      setTimeout(() => { onClose(); }, 1500);
    }, 2000);
  };

  return (
    <div className="absolute inset-0 z-50 flex items-end justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-zinc-900 border-t border-white/10 w-full rounded-t-3xl p-6 pb-12 shadow-2xl animate-in slide-in-from-bottom-full duration-300">
        <div className="flex justify-between items-center mb-6"><h2 className="text-xl font-bold">Connect Device</h2><button onClick={onClose} className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"><X size={16} /></button></div>
        {connectionStatus === 'idle' ? (
          <><p className="text-sm text-zinc-400 mb-6">Select your smartwatch or tracker brand to sync heart rate, calories, and recovery data automatically.</p>
            <div className="grid grid-cols-2 gap-3">
              {brands.map(brand => (
                <button key={brand.id} onClick={() => handleConnect(brand)} className={`p-4 bg-black border border-white/5 rounded-2xl flex flex-col items-center gap-2 active:scale-95 transition-all duration-200 ${brand.color}`}>
                  <Watch size={28} className="text-zinc-300" /><span className="font-semibold text-sm text-zinc-200">{brand.name}</span>
                </button>
              ))}
            </div>
            <button className="w-full mt-4 p-4 text-sm font-bold text-zinc-500 hover:text-zinc-300 transition-colors">Don't see your device?</button>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            {connectionStatus === 'connecting' ? (
              <><Loader2 size={48} className="text-orange-500 animate-spin mb-4" /><h3 className="text-lg font-bold">Looking for {connectingTo.name}...</h3><p className="text-sm text-zinc-400 mt-2 text-center">Make sure your device is nearby and Bluetooth is turned on.</p></>
            ) : (
              <><div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 border border-green-500/30"><Check size={32} className="text-green-500" /></div><h3 className="text-lg font-bold">Connected Successfully!</h3><p className="text-sm text-zinc-400 mt-2 text-center">Your {connectingTo.name} is now synced with HoopAI.</p></>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function BottomNav({ activeTab, setActiveTab, onOpenAction }) {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' }, { id: 'train', icon: Dumbbell, label: 'Train' },
    { id: 'ai_form', icon: Sparkles, label: 'Form' },
    { id: 'communities', icon: Users, label: 'Communities' }, { id: 'stats', icon: BarChart2, label: 'Stats' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="absolute bottom-0 w-full border-t border-white/10 bg-black/50 backdrop-blur-xl pb-safe z-40 supports-[backdrop-filter]:bg-black/20">
      <div className="flex justify-between items-center h-20 px-4 relative max-w-sm mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button key={tab.id} data-sound="tab" onClick={() => setActiveTab(tab.id)} className={`flex flex-col items-center justify-center w-12 space-y-1.5 transition-all duration-300 shrink-0 ${isActive ? 'text-white scale-105' : 'text-zinc-500 hover:text-zinc-400'}`}>
              <Icon size={22} strokeWidth={isActive ? 2.5 : 2} className={isActive ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]' : ''} />
              <span className="text-[9px] font-bold tracking-tight truncate w-full text-center">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ActionCard({ icon, title }) {
  return (
    <div className="p-4 rounded-3xl flex items-center space-x-3 border border-white/5 bg-gradient-to-br from-white/[0.05] to-transparent hover:from-white/[0.08] active:scale-95 cursor-pointer transition-all duration-300 shadow-lg backdrop-blur-sm">
      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">{icon}</div>
      <span className="font-bold text-sm tracking-tight">{title}</span>
    </div>
  );
}

function StatBox({ title, value, highlight }) {
  return (
    <div className="p-4 rounded-3xl flex flex-col justify-center border border-white/5 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm shadow-lg">
      <span className="text-[10px] font-bold text-zinc-500 mb-1 uppercase tracking-widest">{title}</span>
      <span className={`text-3xl font-black tracking-tighter ${highlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600' : 'text-white'}`}>{value}</span>
    </div>
  );
}

function CourtVisualization() {
  const shots = Array.from({ length: 80 }).map((_, i) => {
    const angle = Math.random() * Math.PI; const distance = 40 + Math.random() * 50; 
    let x = 150 + Math.cos(angle) * distance; let y = 25 + Math.sin(angle) * distance;
    y += Math.random() * 20;
    const isMake = Math.random() > 0.4; 
    return { x, y, isMake, id: i };
  });

  return (
    <svg viewBox="0 0 300 200" className="w-full h-full stroke-zinc-700 opacity-80" fill="none">
      <line x1="0" y1="0" x2="300" y2="0" strokeWidth="2" /><rect x="115" y="0" width="70" height="95" strokeWidth="1.5" /><path d="M 115 95 A 35 35 0 0 0 185 95" strokeWidth="1.5" strokeDasharray="4 4" /><path d="M 115 95 A 35 35 0 0 1 185 95" strokeWidth="1.5" /><line x1="130" y1="12" x2="170" y2="12" strokeWidth="2" stroke="white" opacity="0.5" /><circle cx="150" cy="22" r="6" stroke="white" strokeWidth="1.5" opacity="0.5" /><path d="M 25 0 L 25 35 A 125 125 0 0 0 275 35 L 275 0" strokeWidth="1.5" />
      {shots.map((shot) => (
        <g key={shot.id} transform={`translate(${shot.x}, ${shot.y})`}>
          {shot.isMake ? (<><circle r="4" fill="#FF6200" opacity="0.3" filter="blur(2px)"/><circle r="2.5" fill="#FF6200" /></>) : (<path d="M-2,-2 L2,2 M-2,2 L2,-2" stroke="#666" strokeWidth="1" />)}
        </g>
      ))}
    </svg>
  );
}

// --- Mock Data: Hong Kong Basketball Courts ---
const HK_COURTS = [
  { id: 'c1', name: 'Victoria Park Basketball Courts', type: 'Outdoor', location: 'Causeway Bay' },
  { id: 'c2', name: 'MacPherson Playground', type: 'Outdoor', location: 'Mong Kok' },
  { id: 'c3', name: 'Southorn Playground', type: 'Outdoor', location: 'Wan Chai' },
  { id: 'c4', name: 'Kowloon Park Sports Centre', type: 'Indoor', location: 'Tsim Sha Tsui' },
  { id: 'c5', name: 'Sun Yat Sen Memorial Park', type: 'Outdoor', location: 'Sai Ying Pun' },
  { id: 'c6', name: 'Mong Kok Road Playground', type: 'Outdoor', location: 'Mong Kok' },
  { id: 'c7', name: 'Hang Hau Sports Centre', type: 'Indoor', location: 'Tseung Kwan O' }
];

// --- PickUp Runs View Component ---
function PickUpView() {
  const [isCreating, setIsCreating] = useState(false);
  const [activeGames, setActiveGames] = useState([
    { id: 1, court: 'MacPherson Playground', date: '2026-05-26', time: '18:00', playersNeeded: 4, maxPlayers: 10, level: 'Intermediate', host: 'Alex L.' },
    { id: 2, court: 'Southorn Playground', date: '2026-05-27', time: '19:30', playersNeeded: 2, maxPlayers: 6, level: 'Advanced', host: 'Marcus T.' }
  ]);

  // Form States
  const [selectedCourt, setSelectedCourt] = useState(HK_COURTS[0].id);
  const [gameDate, setGameDate] = useState('');
  const [gameTime, setGameTime] = useState('');
  const [playerLimit, setPlayerLimit] = useState(10);
  const [skillLevel, setSkillLevel] = useState('All Levels');

  const handleCreateGame = (e) => {
    e.preventDefault();
    if (!gameDate || !gameTime) return;

    const chosenCourt = HK_COURTS.find(c => c.id === selectedCourt);
    const newGame = {
      id: Date.now(),
      court: chosenCourt.name,
      date: gameDate,
      time: gameTime,
      playersNeeded: playerLimit,
      maxPlayers: playerLimit,
      level: skillLevel,
      host: 'Jason Kwok' // Logged in user
    };

    setActiveGames([newGame, ...activeGames]);
    setIsCreating(false);
    // Reset fields
    setGameDate('');
    setGameTime('');
  };

  return (
    <div className="p-5 space-y-6 pt-12 animate-in fade-in duration-300 pb-24">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">PickUp runs</h1>
          <p className="text-sm text-zinc-400">Find or host games in Hong Kong</p>
        </div>
        <button 
          onClick={() => setIsCreating(!isCreating)}
          className="p-3 bg-orange-500 text-white rounded-2xl flex items-center justify-center shadow-md active:scale-95 transition-transform"
        >
          {isCreating ? <X size={20} /> : <Plus size={20} />}
        </button>
      </div>

      {isCreating ? (
        <form onSubmit={handleCreateGame} className="bg-zinc-900 rounded-3xl p-5 border border-white/5 space-y-5 animate-in slide-in-from-bottom duration-300">
          <h2 className="text-lg font-bold flex items-center gap-2 text-orange-500">
            <MapPin size={18} /> Host a New Run
          </h2>

          {/* 1. Interactive Hong Kong Map Visualizer */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Select Hong Kong Court Location</label>
            <div className="w-full h-44 rounded-2xl overflow-hidden border border-white/10 relative">
              {/* Embed structural OpenStreetMap frame scaled for HK core basketball spots */}
              <iframe 
                title="Hong Kong Basketball Courts Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=114.1200%2C22.2500%2C114.2200%2C22.3400&amp;layer=mapnik" 
                className="w-full h-full opacity-80 grayscale invert"
                frameBorder="0" 
                scrolling="no" 
              />
              <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-md px-3 py-1 rounded-xl border border-white/10 text-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                Live Court Pinpoint Map
              </div>
            </div>
          </div>

          {/* Court Selector Field */}
          <div className="space-y-1">
            <label className="text-xs text-zinc-400 font-medium">Choose Listed Court</label>
            <select 
              value={selectedCourt} 
              onChange={(e) => setSelectedCourt(e.target.value)}
              className="w-full bg-zinc-800 border border-white/10 rounded-xl py-3 px-4 text-sm text-white outline-none focus:border-orange-500"
            >
              {HK_COURTS.map(court => (
                <option key={court.id} value={court.id}>
                  {court.name} ({court.location} - {court.type})
                </option>
              ))}
            </select>
          </div>

          {/* 2. Date & Time Selection Inputs */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs text-zinc-400 font-medium">Select Date</label>
              <input 
                type="date" 
                required
                value={gameDate}
                onChange={(e) => setGameDate(e.target.value)}
                className="w-full bg-zinc-800 border border-white/10 rounded-xl py-3 px-4 text-sm text-white outline-none focus:border-orange-500"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-zinc-400 font-medium">Set Time</label>
              <input 
                type="time" 
                required
                value={gameTime}
                onChange={(e) => setGameTime(e.target.value)}
                className="w-full bg-zinc-800 border border-white/10 rounded-xl py-3 px-4 text-sm text-white outline-none focus:border-orange-500"
              />
            </div>
          </div>

          {/* 3. Player Target Count & Skill Level Requirements */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs text-zinc-400 font-medium">Max Players</label>
              <select 
                value={playerLimit} 
                onChange={(e) => setPlayerLimit(Number(e.target.value))}
                className="w-full bg-zinc-800 border border-white/10 rounded-xl py-3 px-4 text-sm text-white outline-none focus:border-orange-500"
              >
                {[4, 6, 8, 10, 12, 15].map(num => (
                  <option key={num} value={num}>{num} Hoopers</option>
                ))}
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-xs text-zinc-400 font-medium">Competition Level</label>
              <select 
                value={skillLevel} 
                onChange={(e) => setSkillLevel(e.target.value)}
                className="w-full bg-zinc-800 border border-white/10 rounded-xl py-3 px-4 text-sm text-white outline-none focus:border-orange-500"
              >
                {['All Levels', 'Beginner', 'Intermediate', 'Advanced', 'Elite'].map(lvl => (
                  <option key={lvl} value={lvl}>{lvl}</option>
                ))}
              </select>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-orange-600 to-orange-400 text-white font-bold py-4 rounded-2xl shadow-lg active:scale-[0.98] transition-all border border-orange-400/20 text-center"
          >
            Publish Open Run
          </button>
        </form>
      ) : (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">Upcoming Open Runs</h2>
            <span className="text-xs bg-zinc-900 px-3 py-1 rounded-full text-zinc-400 border border-white/5 font-medium">
              {activeGames.length} Available
            </span>
          </div>

          {activeGames.map(game => (
            <div key={game.id} className="bg-zinc-900 rounded-2xl p-4 border border-white/5 flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-base text-white">{game.court}</h3>
                  <p className="text-xs text-zinc-400 flex items-center gap-1 mt-0.5">
                    <Calendar size={12} /> {game.date} @ {game.time}
                  </p>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-500/10 text-orange-500 px-2 py-1 rounded border border-orange-500/20">
                  {game.level}
                </span>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-white/5 mt-2">
                <p className="text-xs text-zinc-400">Hosted by <span className="text-zinc-200 font-semibold">{game.host}</span></p>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-zinc-300 font-medium">{game.playersNeeded} spots left</span>
                  <button className="px-4 py-2 bg-white text-black font-bold text-xs rounded-xl active:scale-95 transition-transform">
                    Join Run
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
