
import React from 'react';
import { Episode, PillarColor } from '../types';

interface EpisodeCardProps {
    episode: Episode;
    onCardClick: (id: string) => void;
}

const colorVariants: Record<PillarColor, { border: string; text: string; bg: string; hoverBg: string; }> = {
    'brand-deep-blue': {
        border: 'border-brand-deep-blue',
        text: 'text-brand-deep-blue',
        bg: 'bg-brand-deep-blue',
        hoverBg: 'hover:bg-blue-50',
    },
    'brand-purple': {
        border: 'border-brand-purple',
        text: 'text-brand-purple',
        bg: 'bg-brand-purple',
        hoverBg: 'hover:bg-purple-50',
    },
    'brand-magenta': {
        border: 'border-brand-magenta',
        text: 'text-brand-magenta',
        bg: 'bg-brand-magenta',
        hoverBg: 'hover:bg-pink-50',
    },
    'brand-coral': {
        border: 'border-brand-coral',
        text: 'text-brand-coral',
        bg: 'bg-brand-coral',
        hoverBg: 'hover:bg-red-50',
    },
    'brand-gold': {
        border: 'border-brand-gold',
        text: 'text-brand-gold',
        bg: 'bg-brand-gold',
        hoverBg: 'hover:bg-yellow-50',
    },
    'brand-green': {
        border: 'border-emerald-500',
        text: 'text-emerald-600',
        bg: 'bg-emerald-500',
        hoverBg: 'hover:bg-emerald-50',
    },
};

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode, onCardClick }) => {
    const { id, pillar, pillarColor, title, description, isClickable, span } = episode;
    const colors = colorVariants[pillarColor] || colorVariants['brand-deep-blue'];
    
    const cardContent = (
        <>
            <div className="flex justify-between items-start">
                <span className={`text-xs font-bold ${colors.text} uppercase`}>{pillar}</span>
                {isClickable && <span className={`${colors.bg} text-white text-xs px-2 py-1 rounded-full group-hover:bg-brand-gold transition-colors`}>Chi tiết +</span>}
            </div>
            <h4 className={`text-lg font-bold text-brand-text mt-1 ${isClickable ? `group-hover:${colors.text}` : ''}`}>{title}</h4>
            <p className="text-gray-600 text-sm mt-2 flex-grow">{description}</p>
            {isClickable && <p className={`${colors.text} text-xs font-bold mt-3 text-right italic opacity-0 group-hover:opacity-100 transition-opacity`}>Nhấn để đọc thêm &rarr;</p>}
        </>
    );

    if (isClickable) {
        return (
            <div onClick={() => onCardClick(id)} className={`group cursor-pointer border-t-4 ${colors.border} bg-white ${colors.hoverBg} transition-colors duration-300 rounded-lg shadow-md p-5 flex flex-col transform hover:-translate-y-1`}>
                {cardContent}
            </div>
        );
    }

    const spanClass = span ? `${span} lg:col-span-1` : '';

    return (
        <div className={`border-t-4 ${colors.border} bg-gray-50 rounded-lg shadow-md p-5 flex flex-col ${spanClass}`}>
            {cardContent}
        </div>
    );
};

export default EpisodeCard;
