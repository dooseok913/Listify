import React, { useState, useEffect } from 'react';
import { X, Save, AlertCircle, CheckCircle2 } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (id: string, secret: string) => void;
  initialClientId: string;
  initialClientSecret: string;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ 
  isOpen, onClose, onSave, initialClientId, initialClientSecret 
}) => {
  const [clientId, setClientId] = useState(initialClientId);
  const [clientSecret, setClientSecret] = useState(initialClientSecret);
  const [status, setStatus] = useState<'idle' | 'saved'>('idle');

  useEffect(() => {
    setClientId(initialClientId);
    setClientSecret(initialClientSecret);
  }, [initialClientId, initialClientSecret, isOpen]);

  const handleSave = () => {
    onSave(clientId, clientSecret);
    setStatus('saved');
    setTimeout(() => {
      setStatus('idle');
      onClose();
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl w-full max-w-md p-6 shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold mb-1">API 설정</h2>
        <p className="text-zinc-400 text-sm mb-6">실제 음악 검색을 위해 Spotify 개발자 자격 증명을 입력하세요.</p>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1.5 uppercase">클라이언트 ID</label>
            <input 
              type="text" 
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-primary text-white"
              placeholder="입력하세요..."
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1.5 uppercase">클라이언트 시크릿</label>
            <input 
              type="password" 
              value={clientSecret}
              onChange={(e) => setClientSecret(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-primary text-white"
              placeholder="••••••••••••••••••••"
            />
          </div>

          <div className="bg-blue-900/20 border border-blue-900/50 rounded p-3 flex gap-3">
             <AlertCircle className="w-5 h-5 text-blue-400 shrink-0" />
             <div className="text-xs text-blue-200">
                <p className="font-semibold mb-1">키 발급 방법</p>
                <p><a href="https://developer.spotify.com/dashboard" target="_blank" rel="noreferrer" className="underline hover:text-white">Spotify Developer Dashboard</a>로 이동하여 앱을 생성하고 자격 증명을 복사하세요.</p>
                <p className="mt-1 text-zinc-400 opacity-70">* 키는 브라우저에 로컬로 저장됩니다.</p>
             </div>
          </div>
        </div>

        <div className="mt-8">
          <button 
            onClick={handleSave}
            className={`w-full py-3 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                status === 'saved' 
                ? 'bg-green-500 text-white' 
                : 'bg-white text-black hover:bg-zinc-200'
            }`}
          >
            {status === 'saved' ? (
                <>
                    <CheckCircle2 className="w-4 h-4" />
                    저장됨!
                </>
            ) : (
                <>
                    <Save className="w-4 h-4" />
                    자격 증명 저장
                </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;