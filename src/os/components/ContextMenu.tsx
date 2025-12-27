import React, { useEffect, useRef } from 'react';
import { RefreshCw, Monitor, FolderPlus } from 'lucide-react';

interface ContextMenuProps {
    x: number;
    y: number;
    onClose: () => void;
    onAction: (action: string) => void;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({ x, y, onClose, onAction }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [onClose]);

    return (
        <div
            ref={ref}
            className="fixed z-50 w-48 bg-[#31363b]/95 backdrop-blur-md text-white rounded-lg shadow-2xl border border-white/10 py-1"
            style={{ top: y, left: x }}
        >
            <ContextMenuItem icon={<Monitor size={14} />} label="Change Wallpaper" onClick={() => onAction('wallpaper')} />
            <ContextMenuItem icon={<RefreshCw size={14} />} label="Refresh" onClick={() => onAction('refresh')} />
            <div className="h-px bg-white/10 my-1" />
            <ContextMenuItem icon={<FolderPlus size={14} />} label="Create New Folder" onClick={() => onAction('new_folder')} />
        </div>
    );
};

const ContextMenuItem = ({ icon, label, onClick }: { icon: any, label: string, onClick: () => void }) => (
    <button
        onClick={onClick}
        className="w-full px-3 py-1.5 flex items-center gap-3 hover:bg-kde-blue/50 text-left text-sm transition-colors"
    >
        <span className="text-gray-300">{icon}</span>
        <span>{label}</span>
    </button>
);
