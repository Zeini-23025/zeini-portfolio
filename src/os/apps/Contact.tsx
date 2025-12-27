import { Mail, Github, MessageSquare } from 'lucide-react';
import { PROFILE } from '../../data/content';

export const ContactApp = () => {
    return (
        <div className="h-full flex flex-col bg-white text-gray-800 font-sans">
            {/* Header / Toolbar */}
            <div className="bg-gray-100 p-2 border-b flex items-center gap-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">Compose</button>
                <div className="h-6 w-px bg-gray-300 mx-2"></div>
                <button className="p-1 hover:bg-gray-200 rounded"><Mail size={18} /></button>
            </div>

            <div className="flex-1 flex">
                {/* Sidebar */}
                <div className="w-48 bg-gray-50 border-r p-2 text-sm">
                    <div className="font-bold text-gray-500 mb-2 px-2">FOLDERS</div>
                    <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded font-medium cursor-pointer">Inbox (1)</div>
                    <div className="px-2 py-1 text-gray-600 hover:bg-gray-200 rounded cursor-pointer">Sent</div>
                    <div className="px-2 py-1 text-gray-600 hover:bg-gray-200 rounded cursor-pointer">Drafts</div>
                </div>

                {/* Message View */}
                <div className="flex-1 p-6">
                    <div className="border border-gray-200 rounded-lg shadow-sm p-6 bg-white max-w-2xl mx-auto">
                        <div className="border-b pb-4 mb-4">
                            <h3 className="text-xl font-bold mb-2">Let's Connect!</h3>
                            <div className="flex items-center gap-3 text-sm text-gray-500">
                                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">Z</div>
                                <div>
                                    <div className="text-gray-900 font-medium">{PROFILE.name}</div>
                                    <div>&lt;{PROFILE.email}&gt;</div>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-sm text-gray-600">
                            <p>Hello visitor,</p>
                            <p>I am currently open to new opportunities and collaborations. Feel free to reach out via email or check my work on GitHub.</p>

                            <div className="flex gap-4 mt-6">
                                <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                                    <Mail size={16} /> Send Email
                                </a>
                                <a href={PROFILE.github} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition-colors">
                                    <Github size={16} /> GitHub
                                </a>
                                <a href={PROFILE.reddit} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors">
                                    <MessageSquare size={16} /> Reddit
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
