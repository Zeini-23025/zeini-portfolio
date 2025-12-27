import React, { useState } from 'react';
import { Panel } from './components/Panel';
import { WindowFrame } from './components/WindowFrame';
import { ContextMenu } from './components/ContextMenu';
import { MatrixRain } from './apps/MatrixRain';
import { AboutApp } from './apps/About';
import { HomeApp } from './apps/Home';
import { ProjectsApp } from './apps/Projects';
import { SkillsApp } from './apps/Skills';
import { ContactApp } from './apps/Contact';
import { TerminalApp } from './apps/Terminal';
import { PROFILE } from '../data/content';
// Icons
import { User, Folder, Cpu, Mail, Terminal, FileText, Globe } from 'lucide-react';

interface WindowState {
    id: string;
    title: string;
    component: React.ReactNode;
    icon: React.ReactNode;
    isOpen: boolean;
    isMinimized: boolean;
    isMaximized: boolean;
    zIndex: number;
}

const WALLPAPERS = [
    "/wallpapers/Anime-Girl-Rain.png",
    "/wallpapers/Manga-Girl-Rain.png",
    "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2574&auto=format&fit=crop", // Dark Mesh
];

const APPS_CONFIG = {
    home: { title: 'Home - Dolphin', icon: <Folder />, component: <HomeApp /> },
    about: { title: 'About Me.txt - Kate', icon: <User />, component: <AboutApp /> },
    projects: { title: 'Projects - Firefox', icon: <Globe />, component: <ProjectsApp /> },
    skills: { title: 'System Monitor', icon: <Cpu />, component: <SkillsApp /> },
    contact: { title: 'Contact - KMail', icon: <Mail />, component: <ContactApp /> },
    terminal: { title: 'zeini@arch: ~', icon: <Terminal />, component: <TerminalApp /> },
};

export const Desktop = () => {
    const [windows, setWindows] = useState<WindowState[]>([]);
    const [nextZIndex, setNextZIndex] = useState(1);
    const [wallpaperIndex, setWallpaperIndex] = useState(0);
    const [contextMenu, setContextMenu] = useState<{ x: number, y: number } | null>(null);
    const [showMatrix, setShowMatrix] = useState(false);



    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        setContextMenu({ x: e.clientX, y: e.clientY });
    };

    const handleContextAction = (action: string) => {
        if (action === 'wallpaper') {
            setWallpaperIndex(prev => (prev + 1) % WALLPAPERS.length);
        } else if (action === 'refresh') {
            window.location.reload();
        } else if (action === 'new_folder') {
            alert('Permission denied: Read-only file system');
        }
        setContextMenu(null);
    };

    const launchApp = (appId: string) => {
        const existingWindow = windows.find(w => w.id === appId);

        if (existingWindow) {
            if (existingWindow.isMinimized) {
                setWindows(prev => prev.map(w => w.id === appId ? { ...w, isMinimized: false, zIndex: nextZIndex } : w));
                setNextZIndex(prev => prev + 1);
            } else {
                focusWindow(appId);
            }
        } else {
            const config = APPS_CONFIG[appId as keyof typeof APPS_CONFIG];
            if (!config) return;

            // Inject props
            let component = config.component;
            if (React.isValidElement(component)) {
                const props: any = {};
                if (appId === 'terminal') {
                    props.onCommand = (cmd: string) => {
                        if (cmd === 'matrix') setShowMatrix(prev => !prev);
                    };
                }
                if (appId === 'home') {
                    props.onLaunch = launchApp;
                }
                component = React.cloneElement(component, props);
            }

            setWindows(prev => [...prev, {
                id: appId,
                title: config.title,
                component: component,
                icon: config.icon,
                isOpen: true,
                isMinimized: false,
                isMaximized: false,
                zIndex: nextZIndex
            }]);
            setNextZIndex(prev => prev + 1);
        }
    };

    const closeWindow = (id: string) => {
        setWindows(prev => prev.filter(w => w.id !== id));
    };

    const minimizeWindow = (id: string) => {
        setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: true } : w));
    };

    const maximizeWindow = (id: string) => {
        setWindows(prev => prev.map(w => w.id === id ? { ...w, isMaximized: !w.isMaximized } : w));
    };

    const focusWindow = (id: string) => {
        setWindows(prev => prev.map(w => w.id === id ? { ...w, zIndex: nextZIndex } : w));
        setNextZIndex(prev => prev + 1);
    };

    return (
        <div
            className="h-full w-full relative overflow-hidden bg-cover bg-center transition-all duration-700 ease-in-out"
            style={{ backgroundImage: `url('${WALLPAPERS[wallpaperIndex]}')` }}
            onContextMenu={handleContextMenu}
        >
            {showMatrix && <MatrixRain />}

            {/* Desktop Icons */}
            <div className={`absolute top-4 left-4 flex flex-col gap-6 p-2 rounded-lg ${showMatrix ? 'opacity-0' : 'opacity-100'}`}>
                <DesktopIcon label="Home" icon={<Folder className="fill-blue-500 text-blue-300" />} onClick={() => launchApp('home')} />
                <DesktopIcon label="Projects" icon={<Globe className="text-orange-400" />} onClick={() => launchApp('projects')} />
                <DesktopIcon label="Bio.txt" icon={<User className="text-gray-300" />} onClick={() => launchApp('about')} />
                <DesktopIcon label="Skills" icon={<Cpu className="text-green-400" />} onClick={() => launchApp('skills')} />
                <DesktopIcon label="Terminal" icon={<Terminal className="text-gray-400" />} onClick={() => launchApp('terminal')} />
                <a href={PROFILE.cv} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 group w-20 p-2 rounded hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="w-12 h-12 flex items-center justify-center drop-shadow-md">
                        <FileText className="text-red-400 w-10 h-10" />
                    </div>
                    <span className="text-white text-xs text-center drop-shadow-md group-hover:underline">CV.pdf</span>
                </a>
            </div>

            {/* Windows Area */}
            <div className={`absolute inset-0 pointer-events-none ${showMatrix ? 'opacity-0' : 'opacity-100'}`}>
                {windows.map(window => (
                    <div key={window.id} className="contents">
                        <WindowFrame
                            id={window.id}
                            title={window.title}
                            isActive={window.zIndex === nextZIndex - 1}
                            isMinimized={window.isMinimized}
                            isMaximized={window.isMaximized}
                            onClose={closeWindow}
                            onMinimize={minimizeWindow}
                            onMaximize={maximizeWindow}
                            onFocus={focusWindow}
                            zIndex={window.zIndex}
                        >
                            {window.component}
                        </WindowFrame>
                    </div>
                ))}
            </div>

            <Panel
                openWindows={windows.map(w => ({ id: w.id, title: w.title, icon: w.icon, isActive: w.zIndex === nextZIndex - 1, isMinimized: w.isMinimized }))}
                onWindowClick={(id) => {
                    const w = windows.find(win => win.id === id);
                    const isActive = w && w.zIndex === nextZIndex - 1;
                    if (isActive && !w.isMinimized) minimizeWindow(id);
                    else launchApp(id);
                }}
                onLaunch={launchApp}
            />

            {contextMenu && (
                <ContextMenu
                    x={contextMenu.x}
                    y={contextMenu.y}
                    onClose={() => setContextMenu(null)}
                    onAction={handleContextAction}
                />
            )}
        </div>
    );
};

const DesktopIcon = ({ label, icon, onClick }: { label: string, icon: any, onClick: () => void }) => (
    <button onClick={onClick} className="flex flex-col items-center gap-1 group w-20 p-2 rounded hover:bg-white/10 transition-colors">
        <div className="w-12 h-12 flex items-center justify-center drop-shadow-md [&>svg]:w-10 [&>svg]:h-10">
            {icon}
        </div>
        <span className="text-white text-xs text-center drop-shadow-md group-hover:underline">{label}</span>
    </button>
);
