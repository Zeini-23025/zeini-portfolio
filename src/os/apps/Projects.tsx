import { useState } from 'react';
import { Folder, FileText, ChevronRight, HardDrive, Download, Globe, Github, ArrowLeft, RefreshCw, X, Image } from 'lucide-react';
import { PROJECTS } from '../../data/content';

export const ProjectsApp = () => {
    const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

    const handleRestrictedClick = (msg: string) => {
        alert(msg); // Simple alert for now, could be a custom toast
    };

    if (selectedProject) {
        return (
            <div className="flex flex-col h-full bg-[#1e1e1e] text-gray-200 font-sans">
                {/* Browser Toolbar */}
                <div className="h-10 bg-[#2b2b2b] flex items-center px-2 gap-2 border-b border-[#3e3e3e]">
                    <div className="flex gap-2 mr-2">
                        <button onClick={() => setSelectedProject(null)} className="p-1 hover:bg-white/10 rounded-full"><ArrowLeft size={16} /></button>
                        <button className="p-1 hover:bg-white/10 rounded-full text-gray-500"><ChevronRight size={16} /></button>
                        <button className="p-1 hover:bg-white/10 rounded-full"><RefreshCw size={14} /></button>
                    </div>
                    <div className="flex-1 bg-[#1e1e1e] rounded-full px-4 py-1 text-sm flex items-center text-gray-300 border border-[#3e3e3e]">
                        <Globe size={12} className="mr-2 text-gray-500" />
                        <span>https://github.com/zeiny/{selectedProject.id}</span>
                    </div>
                    <div className="flex gap-3 ml-2 text-gray-400">
                        <Github size={18} className="cursor-pointer hover:text-white" />
                        <X size={18} className="cursor-pointer hover:text-red-400" onClick={() => setSelectedProject(null)} />
                    </div>
                </div>

                {/* Browser Content */}
                <div className="flex-1 overflow-auto bg-white text-gray-800 relative">
                    {/* Hero Section */}
                    <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600 text-white flex flex-col justify-center px-8 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20" />
                        <h1 className="text-4xl font-bold relative z-10">{selectedProject.title}</h1>
                        <p className="text-blue-100 mt-2 relative z-10">{selectedProject.type}</p>
                    </div>

                    <div className="max-w-4xl mx-auto p-8">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8 -mt-12 relative z-20">
                            <h2 className="text-2xl font-bold mb-4 text-gray-800">About this Project</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {selectedProject.description}
                                <br /><br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                            <h3 className="text-lg font-semibold mb-3 text-gray-800">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {selectedProject.tags.map((tech: string, i: number) => (
                                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <button className="px-6 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
                                    <Github size={18} /> View Source
                                </button>
                                <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
                                    <Globe size={18} /> Live Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-full text-gray-200">
            {/* Sidebar - Dolphin Style */}
            <div className="w-14 md:w-48 bg-[#2a2e32] border-r border-white/10 flex flex-col p-2 text-sm select-none transition-all duration-300 flex-shrink-0">
                <div className="mb-4">
                    <div className="text-gray-500 text-xs font-bold px-2 mb-1 uppercase tracking-wider hidden md:block">Places</div>
                    <NavItem icon={<HardDrive size={16} />} label="Root (/)" onClick={() => handleRestrictedClick("Bro what are you doing? Get out, that is not your business 😐")} />
                    <NavItem icon={<Folder size={16} />} label="Home (~)" active />
                    <NavItem icon={<Folder size={16} />} label="Desktop" onClick={() => handleRestrictedClick("Come on bro… why are you so curious? 👀")} />
                    <NavItem icon={<Download size={16} />} label="Downloads" onClick={() => handleRestrictedClick("Come on bro… why are you so curious? 👀")} />
                    <NavItem icon={<FileText size={16} />} label="Documents" onClick={() => handleRestrictedClick("Come on bro… why are you so curious? 👀")} />
                    <NavItem icon={<Image size={16} />} label="Pictures" onClick={() => handleRestrictedClick("Come on bro… why are you so curious? 👀")} />
                </div>

                <div>
                    <div className="text-gray-500 text-xs font-bold px-2 mb-1 uppercase tracking-wider hidden md:block">Devices</div>
                    <NavItem icon={<HardDrive size={16} />} label="900GB Volume" />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-[#232629] min-w-0">
                {/* Navbar/Path */}
                <div className="h-10 border-b border-white/10 flex items-center px-4 bg-[#2a2e32] gap-2">
                    <button className="hover:bg-white/10 p-1 rounded"><ChevronRight className="rotate-180" size={16} /></button>
                    <button className="hover:bg-white/10 p-1 rounded"><ChevronRight size={16} /></button>
                    <div className="flex-1 bg-[#1b1e20] rounded px-3 py-1 text-sm flex items-center shadow-inner border border-white/5 overflow-hidden">
                        <span className="text-gray-400 truncate">/home/zeiny/</span>
                        <span className="text-white">projects</span>
                    </div>
                </div>

                {/* File Grid */}
                <div className="flex-1 p-4 grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] content-start gap-4 overflow-auto">
                    {PROJECTS.map((project, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center gap-2 group p-2 rounded hover:bg-[#3daee9]/20 cursor-pointer transition-colors border border-transparent hover:border-[#3daee9]/40"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="w-16 h-16 flex items-center justify-center text-blue-400">
                                <Folder size={48} className="fill-blue-500/20" />
                            </div>
                            <span className="text-xs text-center line-clamp-2 w-full break-words group-hover:text-white text-gray-300">
                                {project.title}
                            </span>
                        </div>
                    ))}

                    {/* Fake Files for Realism */}
                    <div className="flex flex-col items-center gap-2 group p-2 rounded hover:bg-[#3daee9]/20 cursor-pointer transition-colors border border-transparent hover:border-[#3daee9]/40" onClick={() => alert("Just a text file :)")}>
                        <div className="w-16 h-16 flex items-center justify-center text-gray-500">
                            <FileText size={48} />
                        </div>
                        <span className="text-xs text-center text-gray-300">note_to_recruiters.txt</span>
                    </div>
                </div>

                {/* Status Bar */}
                <div className="h-6 bg-[#2a2e32] border-t border-white/10 flex items-center px-3 text-xs text-gray-500 justify-between">
                    <span>{PROJECTS.length + 1} items</span>
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
