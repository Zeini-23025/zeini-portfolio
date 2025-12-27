import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';
import { X, Minus, Square, Maximize2 } from 'lucide-react';
import 'react-resizable/css/styles.css';

interface WindowFrameProps {
    id: string;
    title: string;
    children: React.ReactNode;
    isActive: boolean;
    isMinimized: boolean;
    isMaximized: boolean;
    onClose: (id: string) => void;
    onMinimize: (id: string) => void;
    onMaximize: (id: string) => void;
    onFocus: (id: string) => void;
    zIndex: number;
}

export const WindowFrame: React.FC<WindowFrameProps> = ({
    id,
    title,
    children,
    isActive,
    isMinimized,
    isMaximized,
    onClose,
    onMinimize,
    onMaximize,
    onFocus,
    zIndex,
}) => {
    const nodeRef = useRef(null);
    const [size, setSize] = useState({ width: 800, height: 500 });

    // if (isMinimized) return null; // REMOVED to persist drag position

    const onResize: ResizableBoxProps['onResize'] = (_, { size }) => {
        setSize({ width: size.width, height: size.height });
    };

    return (
        <Draggable
            handle=".window-titlebar"
            bounds="parent"
            nodeRef={nodeRef}
            onStart={() => onFocus(id)}
            disabled={isMaximized}
        >
            <div
                ref={nodeRef}
                className={`absolute ${isMaximized ? 'inset-0 !transform-none !w-full !h-[calc(100%-3rem)]' : ''} animate-in fade-in zoom-in-95 duration-200 pointer-events-auto ${isMinimized ? 'opacity-0 pointer-events-none' : ''}`}
                style={{ zIndex, width: isMaximized ? '100%' : 'auto', display: isMinimized ? 'none' : 'block' }}
                onClick={() => onFocus(id)}
            >
                <ResizableBox
                    width={isMaximized ? window.innerWidth : size.width}
                    height={isMaximized ? window.innerHeight - 48 : size.height}
                    minConstraints={[300, 200]}
                    maxConstraints={[window.innerWidth, window.innerHeight - 40]}
                    onResize={onResize}
                    resizeHandles={isMaximized ? [] : ['se', 'e', 's']}
                    className={`flex flex-col rounded-lg shadow-2xl overflow-hidden border border-white/10 ${isMaximized ? 'rounded-none h-full w-full' : ''}`}
                    handle={
                        <span className="react-resizable-handle react-resizable-handle-se cursor-se-resize absolute bottom-0 right-0 w-4 h-4 z-50" />
                    }
                >
                    <div className="flex flex-col h-full w-full">
                        {/* Title Bar - KDE Breeze Dark Style */}
                        <div className={`window-titlebar h-9 flex items-center justify-between px-3 select-none flex-shrink-0 ${isActive ? 'bg-[#31363b] text-[#eff0f1]' : 'bg-[#2a2e32] text-[#898b8d]'
                            }`}>
                            {/* Title */}
                            <div className="flex items-center gap-2">
                                <span className="font-sans text-sm tracking-wide">{title}</span>
                            </div>

                            {/* Window Controls */}
                            <div className="flex items-center space-x-1">
                                <button
                                    onClick={(e) => { e.stopPropagation(); onMinimize(id); }}
                                    className="p-1 hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <Minus size={14} />
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); onMaximize(id); }}
                                    className="p-1 hover:bg-white/10 rounded-full transition-colors"
                                >
                                    {isMaximized ? <Square size={12} /> : <Maximize2 size={12} />}
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); onClose(id); }}
                                    className={`p-1 hover:bg-red-500 rounded-full transition-colors ${isActive ? 'text-[#eff0f1]' : ''}`}
                                >
                                    <X size={14} />
                                </button>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 bg-[#232629]/95 backdrop-blur-md overflow-hidden text-gray-200 relative">
                            {children}
                        </div>
                    </div>
                </ResizableBox>
            </div>
        </Draggable>
    );
};
