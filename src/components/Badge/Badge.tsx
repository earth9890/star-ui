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
  default: 'bg-badge-default text-badge-default-text border border-border-primary dark:bg-dark-background-tertiary dark:text-dark-text-primary dark:border-dark-border-primary',
  primary: 'bg-gradient-to-r from-badge-primary to-primary-600 text-badge-primary-text shadow-lg',
  secondary: 'bg-gradient-to-r from-badge-secondary to-secondary-600 text-badge-secondary-text shadow-lg',
  success: 'bg-gradient-to-r from-badge-success to-success-600 text-badge-success-text shadow-lg',
  warning: 'bg-gradient-to-r from-badge-warning to-warning-600 text-badge-warning-text shadow-lg',
  danger: 'bg-gradient-to-r from-badge-danger to-destructive-600 text-badge-danger-text shadow-lg',
  gradient: 'gradient-animated text-badge-primary-text shadow-lg',
  cosmic: 'bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 bg-[length:200%_200%] text-badge-primary-text shadow-lg animate-pulse',
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
        <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-support-error opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-support-error-dark" />
        </span>
      )}
      {children}
    </span>
  );
};