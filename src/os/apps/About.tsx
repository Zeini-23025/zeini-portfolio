import { PROFILE } from '../../data/content';

export const AboutApp = () => {
    return (
        <div className="h-full bg-white text-black p-0 flex flex-col font-mono text-sm">
            {/* Menu Bar (Kate style) */}
            <div className="bg-gray-100 border-b border-gray-300 flex px-2 py-1 text-xs gap-4">
                <span className="hover:bg-blue-100 px-1 cursor-pointer">File</span>
                <span className="hover:bg-blue-100 px-1 cursor-pointer">Edit</span>
                <span className="hover:bg-blue-100 px-1 cursor-pointer">View</span>
                <span className="hover:bg-blue-100 px-1 cursor-pointer">Tools</span>
                <span className="hover:bg-blue-100 px-1 cursor-pointer">Help</span>
            </div>

            <div className="flex-1 flex">
                {/* Line Numbers */}
                <div className="w-10 bg-gray-50 text-gray-400 text-right pr-2 py-4 select-none border-r border-gray-200">
                    {Array.from({ length: 20 }).map((_, i) => <div key={i}>{i + 1}</div>)}
                </div>

                {/* Content */}
                <div className="flex-1 p-4 overflow-auto whitespace-pre-wrap font-medium">
                    <span className="text-purple-600"># About Me</span>
                    {"\n\n"}
                    <span className="text-blue-600">const</span> <span className="text-yellow-600">developer</span> = {"{"}
                    {"\n"}
                    {"  "}name: <span className="text-green-600">"{PROFILE.name}"</span>,
                    {"\n"}
                    {"  "}role: <span className="text-green-600">"{PROFILE.title}"</span>,
                    {"\n"}
                    {"  "}bio: <span className="text-green-600">"{PROFILE.bio}"</span>
                    {"\n"}
                    {"}"};
                    {"\n\n"}
                    <span className="text-gray-500">// Specialized in robust software solutions.</span>
                    {"\n"}
                    <span className="text-gray-500">// Passionate about modern web apps.</span>
                </div>
            </div>

            {/* Status Bar */}
            <div className="bg-gray-100 border-t border-gray-300 px-2 py-0.5 text-xs text-gray-500 flex justify-between">
                <span>Line 13, Col 1</span>
                <span>UTF-8</span>
                <span>JavaScript</span>
            </div>
        </div>
    );
};
