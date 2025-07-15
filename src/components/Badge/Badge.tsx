import React from 'react';
import { type BaseProps } from '../../types';
import { cn } from '../../utils/cn';

export type BadgeVariant = 
  | 'default' 
  | 'primary' 
  | 'secondary' 
  | 'success' 
  | 'warning' 
  | 'danger'
  | 'gradient'
  | 'cosmic';

export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends BaseProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  pulse?: boolean;
  glow?: boolean;
  dot?: boolean;
}

const badgeVariants = {
  default: 'bg-gray-100 text-gray-800 border border-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700',
  primary: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg',
  secondary: 'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-lg',
  success: 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg',
  warning: 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg',
  danger: 'bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg',
  gradient: 'gradient-animated text-white shadow-lg',
  cosmic: 'bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-[length:200%_200%] text-white shadow-lg animate-pulse',
};

const badgeSizes = {
  sm: 'px-2 py-0.5 text-xs font-medium',
  md: 'px-2.5 py-1 text-sm font-medium',
  lg: 'px-3 py-1.5 text-base font-semibold',
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  pulse = false,
  glow = false,
  dot = false,
  children,
  className,
  ...props
}) => {
  return (
    <span
      className={cn(
        'relative inline-flex items-center justify-center rounded-full',
        'transition-all duration-300 ease-out',
        'whitespace-nowrap',
        badgeVariants[variant],
        badgeSizes[size],
        pulse && 'animate-pulse',
        glow && 'pulse-glow',
        className
      )}
      {...props}
    >
      {dot && (
        <span className="absolute -top-1.5 -right-1.5 flex h-3 w-3 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
        </span>
      )}
      {children}
    </span>
  );
};