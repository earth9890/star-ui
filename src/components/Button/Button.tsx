import React from 'react';
import { type BaseProps, type Size } from '../../types';
import { cn } from '../../utils/cn';

export type ButtonVariant = 
  | 'primary' 
  | 'secondary' 
  | 'outline' 
  | 'ghost' 
  | 'gradient'
  | 'cosmic'
  | 'sunset'
  | 'ocean'
  | 'destructive';

export interface ButtonProps extends BaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: Size;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  glow?: boolean;
  shimmer?: boolean;
  float?: boolean;
}

const buttonVariants = {
  primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 focus-visible:ring-blue-500',
  secondary: 'bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg hover:shadow-xl hover:from-gray-700 hover:to-gray-800 focus-visible:ring-gray-500',
  outline: 'border-2 border-blue-500 bg-transparent text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20 focus-visible:ring-blue-500',
  ghost: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:ring-gray-500',
  gradient: 'gradient-animated text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] focus-visible:ring-purple-500',
  cosmic: 'bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-[length:200%_200%] text-white shadow-lg hover:shadow-xl animate-pulse focus-visible:ring-purple-500',
  sunset: 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-pink-600 focus-visible:ring-orange-500',
  ocean: 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-xl hover:from-cyan-600 hover:to-blue-600 focus-visible:ring-cyan-500',
  destructive: 'bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg hover:shadow-xl hover:from-red-700 hover:to-pink-700 focus-visible:ring-red-500',
};

const buttonSizes = {
  xs: 'px-3 py-1.5 text-xs font-medium',
  sm: 'px-4 py-2 text-sm font-medium',
  md: 'px-6 py-2.5 text-sm font-semibold',
  lg: 'px-8 py-3 text-base font-semibold',
  xl: 'px-10 py-4 text-lg font-semibold',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  leftIcon,
  rightIcon,
  children,
  className,
  disabled,
  glow = false,
  shimmer = false,
  float = false,
  ...props
}) => {
  const isDisabled = disabled || loading;

  return (
    <button
      className={cn(
        'relative inline-flex items-center justify-center rounded-xl font-medium',
        'transition-all duration-300 ease-out',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
        'active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:transform-none',
        'overflow-hidden',
        buttonVariants[variant],
        buttonSizes[size],
        glow && 'pulse-glow',
        shimmer && 'shimmer',
        float && 'float',
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {loading && (
        <div className="mr-2">
          <svg
            className="h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      )}
      {!loading && leftIcon && (
        <span className="mr-2 flex items-center">{leftIcon}</span>
      )}
      <span className="relative z-10">{children}</span>
      {!loading && rightIcon && (
        <span className="ml-2 flex items-center">{rightIcon}</span>
      )}
      
      {/* Hover overlay for enhanced effects */}
      <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 hover:opacity-100 rounded-xl" />
    </button>
  );
};