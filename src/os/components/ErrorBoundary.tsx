import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="h-screen w-screen bg-black text-red-500 flex flex-col items-center justify-center p-4 font-mono">
                    <h1 className="text-2xl font-bold mb-4">Kernel Panic - Not Syncing</h1>
                    <p>Critical System Error. Please refresh.</p>
                </div>
            );
        }

        return this.props.children;
    }
}
