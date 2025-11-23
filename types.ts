
import React from 'react';

export interface Episode {
  id: string;
  pillar: string;
  pillarColor: string;
  title: string;
  description: string;
  modalContent?: React.ReactNode;
  isClickable: boolean;
  span?: 'md:col-span-2' | 'lg:col-span-1';
}
