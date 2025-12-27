import { SKILLS } from '../../data/content';
import { Activity, Database, Layout, Server, Cpu } from 'lucide-react';

export const SkillsApp = () => {
    return (
        <div className="h-full bg-[#1e2227] text-gray-200 flex flex-col font-sans">
            {/* Header */}
            <div className="p-4 border-b border-white/5">
                <h2 className="text-lg font-light flex items-center gap-2">
                    <Activity className="text-green-500" /> System Monitor
                </h2>
            </div>

            <div className="flex-1 overflow-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                {SKILLS.map((category, idx) => (
                    <div key={idx} className="bg-[#2a2e32] rounded-lg p-4 border border-white/5">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-sm text-blue-400 flex items-center gap-2">
                                {category.category === 'Frontend' && <Layout size={16} />}
                                {category.category === 'Backend' && <Server size={16} />}
                                {category.category === 'Databases' && <Database size={16} />}
                                {category.category === 'DevOps & Tools' && <Cpu size={16} />}
                                {category.category}
                            </h3>
                            <span className="text-xs text-gray-500">Running</span>
                        </div>

                        <div className="space-y-3">
                            {category.items.map((skill, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span>{skill}</span>
                                        <span className="text-gray-500">{Math.floor(Math.random() * 30 + 70)}%</span>
                                    </div>
                                    <div className="h-1.5 bg-black/40 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                                            style={{ width: `${Math.random() * 30 + 70}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
