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
  default: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm',
  gradient: 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200/50 dark:border-blue-700/50 shadow-lg',
  cosmic: 'bg-gradient-to-br from-purple-900/90 via-blue-900/90 to-purple-900/90 border border-purple-500/30 shadow-2xl text-white',
  elevated: 'bg-white dark:bg-gray-800 border-0 shadow-2xl shadow-gray-900/10 dark:shadow-black/20',
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
  <h3 className={cn('text-xl font-semibold text-gray-900 dark:text-white', className)} {...props}>
    {children}
  </h3>
);

export const CardDescription: React.FC<BaseProps> = ({ children, className, ...props }) => (
  <p className={cn('text-gray-600 dark:text-gray-400', className)} {...props}>
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