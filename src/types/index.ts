import React from 'react';

export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
export type ColorScheme = 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'gray';