import { useState } from 'react';
import { BootSequence } from './os/BootSequence';
import { LoginScreen } from './os/LoginScreen';
import { Desktop } from './os/Desktop';

function App() {
    const [bootStep, setBootStep] = useState<'boot' | 'login' | 'desktop'>('boot');
    console.log('[App] Current step:', bootStep);

    return (
        <div className="h-screen w-screen overflow-hidden bg-black text-white font-mono">
            {bootStep === 'boot' && <BootSequence onComplete={() => setBootStep('login')} />}
            {bootStep === 'login' && <LoginScreen onLogin={() => setBootStep('desktop')} />}
            {bootStep === 'desktop' && <Desktop />}
        </div>
    );
}

export default App;
