import React, { useEffect, useState } from 'react';

const BOOT_LOGS = [
    "Arch Linux 6.8.1-arch1-1 (tty1)",
    ":: running early hook [udev]",
    "Starting systemd-udevd version 255.4-2-arch",
    ":: running hook [udev]",
    ":: Triggering uevents...",
    "Loading keymap...",
    "Mounting 'UUID=1234-5678' to /boot...",
    "Starting version 255.4-2-arch",
    "[  OK  ] Created slice System Slice.",
    "[  OK  ] Created slice User and Session Slice.",
    "[  OK  ] Listen on /dev/initctl Compatibility Named Pipe.",
    "[  OK  ] Listen on Journal Socket (/dev/log).",
    "[  OK  ] Started Remount Root and Kernel File Systems.",
    "[  OK  ] Reached target Local File Systems (Pre).",
    "[  OK  ] Reached target Local File Systems.",
    "[  OK  ] Reached target System Initialization.",
    "[  OK  ] Started Daily Man-db Regeneration.",
    "[  OK  ] Reached target Basic System.",
    "[  OK  ] Started D-Bus System Message Bus.",
    "[  OK  ] Started User Login Management.",
    "[  OK  ] Reached target Multi-User System.",
    "[  OK  ] Reached target Graphical Interface.",
    "Starting Display Manager...",
];

interface BootSequenceProps {
    onComplete: () => void;
}

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
    const [logs, setLogs] = useState<string[]>([]);

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex >= BOOT_LOGS.length) {
                clearInterval(interval);
                setTimeout(onComplete, 800);
                return;
            }
            setLogs(prev => [...prev, BOOT_LOGS[currentIndex]]);
            currentIndex++;
        }, 150); // Speed of logs

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="h-full w-full bg-black text-gray-300 font-mono p-4 text-sm overflow-hidden cursor-none select-none">
            {logs.map((log, i) => (
                <div key={i} className="mb-0.5">
                    {log && log.includes("[  OK  ]") ? (
                        <>
                            <span className="text-green-500 font-bold">[  OK  ]</span> {log.replace("[  OK  ] ", "")}
                        </>
                    ) : (
                        log || ""
                    )}
                </div>
            ))}
            <div className="animate-pulse">_</div>
        </div>
    );
};
