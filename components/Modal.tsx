
import React from 'react';
import { Episode, PillarColor } from '../types';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    episode: Episode;
    children: React.ReactNode;
}

const headerColorVariants: Record<PillarColor, string> = {
    'brand-deep-blue': 'bg-brand-deep-blue',
    'brand-purple': 'bg-brand-purple',
    'brand-magenta': 'bg-brand-magenta',
    'brand-coral': 'bg-brand-coral',
    'brand-gold': 'bg-brand-gold',
    'brand-green': 'bg-emerald-500',
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, episode, children }) => {
    const headerBg = headerColorVariants[episode.pillarColor] || 'bg-brand-deep-blue';
    const modalClasses = `modal fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 ${isOpen ? 'active' : ''}`;

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={modalClasses} onClick={handleOverlayClick}>
            <div className="modal-content bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden" onClick={e => e.stopPropagation()}>
                
                <div className={`${headerBg} p-6 flex justify-between items-start sticky top-0 z-10`}>
                    <div>
                        <span className="text-brand-gold font-bold text-xs tracking-widest uppercase mb-2 block">Chi Tiết {episode.title.split(':')[0]}</span>
                        <h3 className="text-2xl font-bold text-white leading-tight">{episode.title.split(':').slice(1).join(':').trim()}</h3>
                    </div>
                    <button onClick={onClose} className="text-white hover:text-brand-gold transition-colors p-1">
                        <span className="text-3xl">&times;</span>
                    </button>
                </div>

                <div className="p-6 overflow-y-auto text-gray-800 leading-relaxed">
                    {children}
                </div>

                <div className="bg-gray-100 p-4 flex justify-end border-t border-gray-200">
                    <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded transition-colors">
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
