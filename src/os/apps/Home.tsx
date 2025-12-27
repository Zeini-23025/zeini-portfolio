import { Folder, FileText, ChevronRight, HardDrive, Download, Image as ImageIcon, Music, Video } from 'lucide-react';

interface HomeAppProps {
    onLaunch?: (appId: string) => void;
}

export const HomeApp: React.FC<HomeAppProps> = ({ onLaunch }) => {
    const handleRestrictedClick = (msg: string) => {
        alert(msg);
    };

    const handleItemClick = (label: string) => {
        if (label === 'Projects' && onLaunch) {
            onLaunch('projects');
        } else if (label === 'bio.txt' && onLaunch) {
            onLaunch('about');
        } else {
            handleRestrictedClick(`Opened ${label} (Empty)`);
        }
    };

    return (
        <div className="flex h-full text-gray-200 font-sans">
            {/* Sidebar */}
            <div className="w-14 md:w-48 bg-[#2a2e32] border-r border-white/10 flex flex-col p-2 text-sm select-none transition-all duration-300">
                <div className="mb-4">
                    <div className="text-gray-500 text-xs font-bold px-2 mb-1 uppercase tracking-wider hidden md:block">Places</div>
                    <NavItem icon={<HardDrive size={16} />} label="Root (/)" onClick={() => handleRestrictedClick("Bro what are you doing? Get out, that is not your business 😐")} />
                    <NavItem icon={<Folder size={16} />} label="Home (~)" active />
                    <NavItem icon={<Folder size={16} />} label="Desktop" onClick={() => handleRestrictedClick("Come on bro… why are you so curious? 👀")} />
                    <NavItem icon={<Download size={16} />} label="Downloads" onClick={() => handleRestrictedClick("Come on bro… why are you so curious? 👀")} />
                    <NavItem icon={<FileText size={16} />} label="Documents" onClick={() => handleRestrictedClick("Come on bro… why are you so curious? 👀")} />
                    <NavItem icon={<ImageIcon size={16} />} label="Pictures" onClick={() => handleRestrictedClick("Come on bro… why are you so curious? 👀")} />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-[#232629]">
                {/* Navbar */}
                <div className="h-10 border-b border-white/10 flex items-center px-4 bg-[#2a2e32] gap-2">
                    <button className="hover:bg-white/10 p-1 rounded"><ChevronRight className="rotate-180" size={16} /></button>
                    <button className="hover:bg-white/10 p-1 rounded"><ChevronRight size={16} /></button>
                    <div className="flex-1 bg-[#1b1e20] rounded px-3 py-1 text-sm flex items-center shadow-inner border border-white/5 overflow-hidden">
                        <span className="text-gray-400 truncate">/home/zeiny/</span>
                    </div>
                </div>

                {/* File Grid */}
                <div className="flex-1 p-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-[repeat(auto-fill,minmax(100px,1fr))] content-start gap-2 md:gap-4 overflow-auto">
                    <FileItem label="Projects" icon={<Folder className="fill-blue-500 text-blue-300" />} onClick={() => handleItemClick('Projects')} />
                    <FileItem label="Desktop" icon={<Folder className="fill-blue-500 text-blue-300" />} onClick={() => handleItemClick('Desktop')} />
                    <FileItem label="Downloads" icon={<Download className="text-blue-400" />} onClick={() => handleItemClick('Downloads')} />
                    <FileItem label="Documents" icon={<FileText className="text-gray-400" />} onClick={() => handleItemClick('Documents')} />
                    <FileItem label="Pictures" icon={<ImageIcon className="text-purple-400" />} onClick={() => handleItemClick('Pictures')} />
                    <FileItem label="Music" icon={<Music className="text-pink-400" />} onClick={() => handleItemClick('Music')} />
                    <FileItem label="Videos" icon={<Video className="text-red-400" />} onClick={() => handleItemClick('Videos')} />
                    <FileItem label="bio.txt" icon={<FileText className="text-gray-300" />} onClick={() => handleItemClick('bio.txt')} />
                </div>

                {/* Status Bar */}
                <div className="h-6 bg-[#2a2e32] border-t border-white/10 flex items-center px-3 text-xs text-gray-500 justify-between">
                    <span>7 items</span>
                    <span>Free space: 124 GiB</span>
                </div>
            </div>
        </div>
    );
};

const NavItem = ({ icon, label, active, onClick }: { icon: any, label: string, active?: boolean, onClick?: () => void }) => (
    <div
        onClick={onClick}
        className={`flex items-center gap-3 px-2 py-1.5 rounded cursor-pointer mb-0.5 ${active ? 'bg-[#3daee9]/20 text-[#3daee9]' : 'hover:bg-white/5 text-gray-400 hover:text-gray-200'}`}
    >
        {icon}
        <span>{label}</span>
    </div>
);

const FileItem = ({ label, icon, onClick }: { label: string, icon: any, onClick?: () => void }) => (
    <div onClick={onClick} className="flex flex-col items-center gap-2 group p-2 rounded hover:bg-[#3daee9]/20 cursor-pointer transition-colors border border-transparent hover:border-[#3daee9]/40">
        <div className="w-16 h-16 flex items-center justify-center [&>svg]:w-10 [&>svg]:h-10">
            {icon}
        </div>
        <span className="text-xs text-center text-gray-300 group-hover:text-white">{label}</span>
    </div>
);
