
import React from 'react';

export type PillarColor = 'brand-deep-blue' | 'brand-purple' | 'brand-magenta' | 'brand-coral' | 'brand-gold' | 'brand-green';

export interface Episode {
  id: string;
  pillar: string;
  pillarColor: PillarColor;
  title: string;
  description: string;
  modalContent?: React.ReactNode;
  isClickable: boolean;
  span?: 'md:col-span-2' | 'lg:col-span-1';
}
