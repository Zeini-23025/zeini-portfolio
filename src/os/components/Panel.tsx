import React, { useState, useEffect } from 'react';
import { Terminal, Folder, User, Mail, Cpu, Wifi, Volume2, Battery } from 'lucide-react';
import { format } from 'date-fns';

interface PanelProps {
    openWindows: { id: string; title: string; icon: React.ReactNode; isActive: boolean; isMinimized: boolean }[];
    onWindowClick: (id: string) => void;
    onLaunch: (appId: string) => void;
}

export const Panel: React.FC<PanelProps> = ({ openWindows, onWindowClick, onLaunch }) => {
    const [time, setTime] = useState(new Date());
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#2a2e32] border-t border-white/5 flex items-center justify-between px-2 select-none z-50">

            {/* Left: Launcher & Active Tasks */}
            <div className="flex items-center h-full gap-1 overflow-x-auto no-scrollbar">

                {/* Start Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`h-8 w-8 flex-shrink-0 flex items-center justify-center rounded hover:bg-white/10 transition-colors ${isMenuOpen ? 'bg-kde-blue/20' : ''}`}
                >
                    <div className="font-bold text-kde-blue text-xl">Z</div>
                </button>

                {/* Quick Launch / Active Windows */}
                <div className="flex items-center gap-1 ml-2">
                    {openWindows.map(window => (
                        <button
                            key={window.id}
                            onClick={() => onWindowClick(window.id)}
                            className={`h-8 px-2 md:px-3 min-w-[40px] md:min-w-[120px] max-w-[200px] flex items-center justify-center md:justify-start gap-2 rounded border-b-2 transition-all ${window.isActive && !window.isMinimized
                                ? 'bg-white/10 border-kde-blue'
                                : 'hover:bg-white/5 border-transparent'
                                } ${window.isMinimized ? 'opacity-60' : ''}`}
                        >
                            <span className="opacity-80 scale-75">{window.icon}</span>
                            <span className="text-xs truncate text-gray-200 hidden md:block">{window.title}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Right: System Tray */}
            <div className="flex items-center gap-3 px-2 text-gray-400 text-xs flex-shrink-0">
                <div className="hidden sm:flex gap-2">
                    <Wifi size={16} />
                    <Volume2 size={16} />
                    <Battery size={16} />
                </div>
                <div className="flex flex-col items-end leading-tight">
                    <span>{format(time, 'HH:mm')}</span>
                    <span className="text-[10px] hidden sm:block">{format(time, 'MMM d')}</span>
                </div>
            </div>

            {/* Start Menu Popup */}
            {isMenuOpen && (
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsMenuOpen(false)}></div>
                    <div className="absolute bottom-12 left-2 w-80 bg-[#31363b]/95 backdrop-blur-md rounded-lg shadow-2xl border border-white/10 z-50 flex overflow-hidden">
                        {/* Sidebar Categories */}
                        <div className="w-12 bg-[#2a2e32] flex flex-col items-center py-2 gap-4 border-r border-white/5">
                            <button className="p-2 hover:bg-white/5 rounded text-gray-400 hover:text-white"><div className="rotate-90 text-[10px] font-bold tracking-widest mt-4">APPS</div></button>
                        </div>

                        {/* Apps List */}
                        <div className="flex-1 p-2">
                            <div className="text-xs font-bold text-gray-500 uppercase mb-2 px-2">Applications</div>

                            <MenuButton icon={<User size={18} />} label="About Me" onClick={() => { onLaunch('about'); setIsMenuOpen(false); }} />
                            <MenuButton icon={<Folder size={18} />} label="Projects" onClick={() => { onLaunch('projects'); setIsMenuOpen(false); }} />
                            <MenuButton icon={<Cpu size={18} />} label="Skills Monitor" onClick={() => { onLaunch('skills'); setIsMenuOpen(false); }} />
                            <MenuButton icon={<Mail size={18} />} label="Contact" onClick={() => { onLaunch('contact'); setIsMenuOpen(false); }} />
                            <MenuButton icon={<Terminal size={18} />} label="Konsole" onClick={() => { onLaunch('terminal'); setIsMenuOpen(false); }} />

                        </div>
                    </div>
                </>
            )}

        </div>
    );
};

const MenuButton = ({ icon, label, onClick }: { icon: any, label: string, onClick: () => void }) => (
    <button
        onClick={onClick}
        className="w-full flex items-center gap-3 p-2 rounded hover:bg-kde-blue hover:text-white text-gray-200 transition-colors text-left group"
    >
        <div className="text-kde-blue group-hover:text-white transition-colors">{icon}</div>
        <span className="text-sm">{label}</span>
    </button>
);
