import React, { useState } from 'react';
import { User, ArrowRight } from 'lucide-react';

interface LoginScreenProps {
    onLogin: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate auth delay
        setTimeout(() => {
            onLogin();
        }, 1500);
    };

    return (
        <div className="h-full w-full relative flex items-center justify-center overflow-hidden">
            {/* Background - Blur style */}
            <div className="absolute inset-0 bg-[url('/wallpapers/Manga-Girl-Rain.png')] bg-cover bg-center filter blur-sm transform scale-105"></div>
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="z-10 bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-sm border border-white/20">
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                        <User size={48} className="text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-6">Zeini Cheikh</h2>

                    <form onSubmit={handleLogin} className="w-full relative">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full bg-black/30 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white/40 transition-all"
                            autoFocus
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-1.5 p-1.5 bg-blue-500 rounded-md text-white hover:bg-blue-600 transition-colors disabled:opacity-50"
                            disabled={loading}
                        >
                            {loading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <ArrowRight size={20} />
                            )}
                        </button>
                    </form>
                    <div className="mt-4 text-white/50 text-xs text-center">
                        Session: Plasma (Wayland)
                    </div>
                </div>
            </div>

            {/* Simulating Time at bottom right like typical SDDM themes sometimes do, or top */}
            <div className="absolute top-8 right-8 text-white text-right">
                <div className="text-4xl font-light">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                <div className="text-white/70">{new Date().toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}</div>
            </div>
        </div>
    );
};
