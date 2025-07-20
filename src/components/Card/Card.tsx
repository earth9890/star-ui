import React from 'react';
import { type BaseProps } from '../../types';
import { cn } from '../../utils/cn';

export type CardVariant = 'default' | 'gradient' | 'cosmic' | 'elevated';

export interface CardProps extends BaseProps {
  variant?: CardVariant;
  hover?: boolean;
  glow?: boolean;
  float?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

const cardVariants = {
  default: 'bg-card-background dark:bg-dark-card-background border border-card-border dark:border-dark-card-border shadow-sm',
  gradient: 'bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border border-primary-200/50 dark:border-primary-700/50 shadow-lg',
  cosmic: 'bg-gradient-to-br from-primary-900/90 via-secondary-900/90 to-primary-900/90 border border-primary-500/30 shadow-2xl text-text-on-color',
  elevated: 'bg-card-background dark:bg-dark-card-background border-0 shadow-2xl shadow-neutral-900/10 dark:shadow-black/20',
};

const cardPadding = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-10',
};

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  hover = true,
  glow = false,
  float = false,
  padding = 'md',
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'relative rounded-2xl transition-all duration-300 ease-out',
        cardVariants[variant],
        cardPadding[padding],
        hover && 'hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]',
        glow && 'pulse-glow',
        float && 'float',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<BaseProps> = ({ children, className, ...props }) => (
  <div className={cn('mb-4', className)} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<BaseProps> = ({ children, className, ...props }) => (
  <h3 className={cn('text-xl font-semibold text-card-text dark:text-dark-text-primary', className)} {...props}>
    {children}
  </h3>
);

export const CardDescription: React.FC<BaseProps> = ({ children, className, ...props }) => (
  <p className={cn('text-card-text-secondary dark:text-dark-text-secondary', className)} {...props}>
    {children}
  </p>
);

export const CardContent: React.FC<BaseProps> = ({ children, className, ...props }) => (
  <div className={cn('', className)} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<BaseProps> = ({ children, className, ...props }) => (
  <div className={cn('mt-6 flex items-center justify-between', className)} {...props}>
    {children}
  </div>
);