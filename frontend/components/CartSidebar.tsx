import React, { useState } from 'react';
import { Trash2, GripVertical, Save, X, ListMusic, Plus } from 'lucide-react';
import { Song, CartItem } from '../types';

interface CartSidebarProps {
  items: CartItem[];
  onRemove: (id: string) => void;
  onClear: () => void;
  isOpen: boolean;
  onClose: () => void;
  onSavePlaylist: (name: string, desc: string) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ 
  items, onRemove, onClear, isOpen, onClose, onSavePlaylist 
}) => {
  const [isSaving, setIsSaving] = useState(false);
  const [playlistName, setPlaylistName] = useState('');
  const [playlistDesc, setPlaylistDesc] = useState('');

  const handleSave = () => {
    if (!playlistName.trim()) return;
    onSavePlaylist(playlistName, playlistDesc);
    setIsSaving(false);
    setPlaylistName('');
    setPlaylistDesc('');
  };

  return (
    <div 
      className={`fixed top-0 right-0 h-full w-80 md:w-96 bg-card border-l border-zinc-800 transform transition-transform duration-300 z-50 shadow-2xl flex flex-col ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Header */}
      <div className="p-4 border-b border-zinc-800 flex justify-between items-center bg-zinc-900">
        <div className="flex items-center gap-2">
          <ListMusic className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-bold">큐레이션 장바구니</h2>
          <span className="bg-zinc-800 text-xs px-2 py-0.5 rounded-full text-zinc-400">{items.length}</span>
        </div>
        <button onClick={onClose} className="text-zinc-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {items.length === 0 ? (
          <div className="text-center text-zinc-500 mt-10">
            <p>장바구니가 비어있습니다.</p>
            <p className="text-sm mt-2">음악을 추가하여 큐레이션을 시작하세요.</p>
          </div>
        ) : (
          items.map((item, idx) => (
            // Fixed property names to match Music interface (CartItem extends Music):
            // id -> spotify_url, coverUrl -> album_image_url, title -> track_name, artist -> artist_name
            <div key={item.spotify_url + idx} className="group flex items-center bg-zinc-900/50 p-2 rounded-md hover:bg-zinc-800 transition-colors">
              <div className="cursor-grab text-zinc-600 hover:text-zinc-400 mr-2">
                <GripVertical className="w-4 h-4" />
              </div>
              <img src={item.album_image_url} alt={item.track_name} className="w-10 h-10 rounded object-cover mr-3" />
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm truncate">{item.track_name}</h4>
                <p className="text-xs text-zinc-400 truncate">{item.artist_name}</p>
              </div>
              <button 
                onClick={() => onRemove(item.spotify_url)}
                className="p-1.5 text-zinc-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer / Actions */}
      <div className="p-4 border-t border-zinc-800 bg-zinc-900">
        {isSaving ? (
          <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4">
            <input 
              type="text" 
              placeholder="플레이리스트 이름" 
              className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
              autoFocus
            />
            <textarea 
              placeholder="설명 (선택사항)" 
              className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary resize-none h-20"
              value={playlistDesc}
              onChange={(e) => setPlaylistDesc(e.target.value)}
            />
            <div className="flex gap-2">
              <button 
                onClick={() => setIsSaving(false)}
                className="flex-1 py-2 text-sm font-medium text-zinc-400 hover:bg-zinc-800 rounded"
              >
                취소
              </button>
              <button 
                onClick={handleSave}
                disabled={!playlistName.trim()}
                className="flex-1 py-2 text-sm font-medium bg-primary text-black rounded hover:bg-green-400 disabled:opacity-50"
              >
                저장
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
             <div className="flex justify-between text-sm text-zinc-400 mb-2">
                <span>총 재생 시간</span>
                <span>{items.length * 3} 분 (예상)</span>
             </div>
             <button 
               onClick={() => setIsSaving(true)}
               disabled={items.length === 0}
               className="w-full py-3 bg-white text-black font-bold rounded-full hover:bg-zinc-200 disabled:opacity-50 disabled:hover:bg-white flex items-center justify-center gap-2 transition-colors"
             >
               <Save className="w-4 h-4" />
               플레이리스트 생성
             </button>
             <button 
               onClick={onClear}
               disabled={items.length === 0}
               className="w-full py-2 text-xs text-zinc-500 hover:text-red-400 transition-colors"
             >
               장바구니 비우기
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
