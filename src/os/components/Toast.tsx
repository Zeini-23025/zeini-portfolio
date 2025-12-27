import React, { useEffect } from 'react';
import { X, Info } from 'lucide-react';

interface ToastProps {
    message: string;
    onClose: () => void;
    duration?: number;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose, duration = 3000 }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="bg-[#31363b]/95 backdrop-blur-md text-white px-4 py-3 rounded-lg shadow-2xl border border-white/10 flex items-center gap-3 min-w-[300px]">
                <div className="p-1 bg-kde-blue/20 rounded-full">
                    <Info size={16} className="text-kde-blue" />
                </div>
                <span className="text-sm font-medium flex-1">{message}</span>
                <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                    <X size={14} />
                </button>
            </div>
        </div>
    );
};
