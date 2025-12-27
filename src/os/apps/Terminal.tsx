import React, { useState, useEffect, useRef } from 'react';
import { PROFILE } from '../../data/content';

interface TerminalAppProps {
    onCommand?: (command: string) => void;
}

export const TerminalApp: React.FC<TerminalAppProps> = ({ onCommand }) => {
    const [history, setHistory] = useState<string[]>(["Welcome to Arch Linux. Type 'help' for commands.", ""]);
    const [input, setInput] = useState("");
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = input.trim().toLowerCase();

        if (onCommand) onCommand(cmd);

        let output: string[] = [`[zeini@arch ~]$ ${input}`];

        switch (cmd) {
            case 'help':
                output.push(
                    "Available commands:",
                    "  help     - Show this help message",
                    "  clear    - Clear terminal",
                    "  neofetch - System info",
                    "  whoami   - Current user",
                    "  ls       - List directory",
                    "  cat [file] - Read file (try 'cat bio.txt')",
                    "  skills   - List technical skills",
                    "  projects - List recent projects",
                    "  matrix   - Enter the matrix"
                );
                break;
            case 'clear':
                setHistory([]);
                setInput("");
                return;
            case 'whoami':
                output.push("zeini");
                break;
            case 'skills':
                output.push(
                    "Languages: TypeScript, JavaScript, Python",
                    "Frontend: React, TailwindCSS, Vite",
                    "Backend: Node.js, Express, Postgres",
                    "Tools: Git, Docker, Linux/Bash"
                );
                break;
            case 'projects':
                output.push(
                    "Fetching projects from GitHub...",
                    "--------------------------------",
                    "1. zeini-os-portfolio [Active]",
                    "2. e-commerce-dashboard",
                    "3. task-manager-api",
                    "--------------------------------",
                    "Tip: Type 'ls projects/' to see file structure."
                );
                if (onCommand) onCommand('open_projects'); // Optional integration to open apps
                break;
            case 'ls':
                output.push("Desktop  Documents  Downloads  bio.txt  skills.json  projects/");
                break;
            case 'matrix':
                output.push("Wake up, Neo...");
                break;
            case 'neofetch':
                output.push(
                    "                   -`                 ",
                    "                  .o+`                zieni@arch",
                    "                 `ooo/                ----------",
                    "                `+oooo:               OS: Arch Linux x86_64",
                    "               `+oooooo:              Kernel: 6.8.1-arch",
                    "               -+oooooo+:             Uptime: 10 mins",
                    "             `/:-:++oooo+:            Shell: zsh 5.9",
                    "            `/++++/+++++++:           DE: Plasma 6.0",
                    "           `/++++++++++++++:          WM: KWin",
                    "          `/+++ooooooooooooo/`        Theme: Breeze Dark",
                    "         ./ooosssso++osssssso+`       Icons: Newbreeze",
                    "        .oossssso-````/ossssss+`      Terminal: Konsole",
                    "       -osssssso.      :ssssssso.     CPU: Intel i7 (8) @ 4.8GHz",
                    "      :osssssss/        osssso+++.    Memory: 16384MiB",
                    "     /ossssssss/        +ssssooo/-    ",
                    "   `/ossssso+/:-        -:/+osssso+-  ",
                    "  `+sso+:-`                 `.-/+oso: ",
                    " `++:.                           `-/+/ ",
                    " .`                                 `/ "
                );
                break;
            case 'cat bio.txt':
                output.push(PROFILE.bio);
                break;
            case '':
                break;
            default:
                if (cmd.startsWith('cat ')) {
                    output.push(`cat: ${cmd.split(' ')[1]}: No such file or directory`);
                } else {
                    output.push(`zsh: command not found: ${cmd}`);
                }
        }

        setHistory(prev => [...prev, ...output]);
        setInput("");
    };

    return (
        <div className="h-full bg-black/95 text-green-400 font-mono text-sm p-2 overflow-auto" onClick={() => document.getElementById('term-input')?.focus()}>
            {history.map((line, i) => (
                <div key={i} className="whitespace-pre-wrap leading-tight font-medium" style={{ color: line.includes('zsh:') || line.includes('cat:') ? '#ff5555' : 'inherit' }}>
                    {line}
                </div>
            ))}
            <form onSubmit={handleCommand} className="flex mt-1">
                <span className="text-blue-400 font-bold mr-2">[zeini@arch ~]$</span>
                <input
                    id="term-input"
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-gray-200 caret-gray-200"
                    autoComplete="off"
                    autoFocus
                />
            </form>
            <div ref={bottomRef}></div>
        </div>
    );
};
