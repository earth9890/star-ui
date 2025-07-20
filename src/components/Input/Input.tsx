import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { type BaseProps, type Size } from '../../types';
import { X } from 'lucide-react';

export type InputVariant = 
  | 'default' 
  | 'outline' 
  | 'filled' 
  | 'ghost' 
  | 'flushed';

export interface InputProps 
  extends BaseProps, 
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: InputVariant;
  size?: Size;
  error?: boolean;
  success?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  helperText?: string;
  errorMessage?: string;
  successMessage?: string;
  label?: string;
  labelPosition?: 'top' | 'floating' | 'inline';
  required?: boolean;
  clearable?: boolean;
  onClear?: () => void;
  glow?: boolean;
  shimmer?: boolean;
  float?: boolean;
}

const inputVariants: Record<InputVariant, string> = {
  default: `
    border border-input-border bg-input shadow-sm
    hover:border-primary-300 hover:shadow-md
    focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 focus:shadow-lg
    dark:border-dark-input-border dark:bg-dark-input-DEFAULT dark:shadow-none
    dark:hover:border-primary-400 dark:hover:shadow-md dark:hover:shadow-primary-500/5
    dark:focus:border-primary-400 dark:focus:ring-primary-400/20 dark:focus:shadow-lg dark:focus:shadow-primary-500/10
  `,
  outline: `
    border-2 border-primary-200 bg-transparent shadow-sm
    hover:border-primary-400 hover:shadow-md hover:shadow-primary-500/10
    focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 focus:shadow-lg
    dark:border-primary-800 dark:shadow-none
    dark:hover:border-primary-600 dark:hover:shadow-md dark:hover:shadow-primary-500/10
    dark:focus:border-primary-500 dark:focus:ring-primary-400/20 dark:focus:shadow-lg dark:focus:shadow-primary-500/20
  `,
  filled: `
    border border-transparent bg-gradient-to-b from-background-secondary to-background-tertiary shadow-inner
    hover:from-background-tertiary hover:to-neutral-100 hover:shadow-sm
    focus:from-background-tertiary focus:to-neutral-100 focus:ring-4 focus:ring-primary-500/10 focus:shadow-md
    dark:from-dark-background-secondary dark:to-dark-background-tertiary
    dark:hover:from-dark-background-tertiary dark:hover:to-neutral-800
    dark:focus:from-dark-background-tertiary dark:focus:to-neutral-800 dark:focus:ring-primary-400/20
  `,
  ghost: `
    border border-transparent bg-transparent
    hover:bg-background-secondary/50 hover:shadow-sm
    focus:bg-background-secondary focus:ring-4 focus:ring-primary-500/10 focus:shadow-md
    dark:hover:bg-dark-background-secondary/50
    dark:focus:bg-dark-background-secondary dark:focus:ring-primary-400/20
  `,
  flushed: `
    border-b-2 border-t-0 border-l-0 border-r-0 border-input-border
    bg-transparent rounded-none px-0
    hover:border-primary-300
    focus:border-primary-500 focus:shadow-[0_2px_0_0_rgba(59,130,246,0.5)]
    dark:border-dark-input-border
    dark:hover:border-primary-400
    dark:focus:border-primary-400 dark:focus:shadow-[0_2px_0_0_rgba(96,165,250,0.5)]
  `,
};

const inputSizes: Record<Size, string> = {
  xs: 'h-8 text-xs px-2.5',
  sm: 'h-9 text-sm px-3',
  md: 'h-10 text-base px-4',
  lg: 'h-12 text-lg px-5',
  xl: 'h-14 text-xl px-6',
};

const iconSizes: Record<Size, number> = {
  xs: 14,
  sm: 16,
  md: 18,
  lg: 20,
  xl: 24,
};

const inputPaddingWithIcon: Record<Size, string> = {
  xs: 'pl-8 pr-8',
  sm: 'pl-9 pr-9',
  md: 'pl-10 pr-10',
  lg: 'pl-12 pr-12',
  xl: 'pl-14 pr-14',
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'default',
      size = 'md',
      error,
      success,
      loading,
      disabled,
      fullWidth,
      leftIcon,
      rightIcon,
      leftAddon,
      rightAddon,
      helperText,
      errorMessage,
      successMessage,
      label,
      labelPosition = 'top',
      required,
      clearable,
      onClear,
      className,
      glow,
      shimmer,
      float,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substring(2, 11)}`;
    const helperId = `${inputId}-helper`;
    
    const baseClasses = `
      relative w-full font-medium
      text-input-foreground placeholder:text-input-placeholder
      dark:text-dark-input-foreground dark:placeholder:text-dark-input-placeholder
      transition-all duration-300 ease-out outline-none
      disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none
    `;

    const stateClasses = cn({
      'border-destructive-500 focus:border-destructive-600 focus:ring-destructive-500/20 shadow-destructive-100 dark:border-destructive-400 dark:focus:border-destructive-500 dark:shadow-destructive-500/10': error,
      'border-success-500 focus:border-success-600 focus:ring-success-500/20 shadow-success-100 dark:border-success-400 dark:focus:border-success-500 dark:shadow-success-500/10': success && !error,
    });

    const effectClasses = cn({
      'pulse-glow': glow,
      'shimmer': shimmer,
      'float': float,
    });

    const hasLeftIcon = !!leftIcon;
    const hasRightIcon = !!rightIcon || clearable || loading;
    
    const paddingClasses = cn({
      [inputPaddingWithIcon[size].split(' ')[0]]: hasLeftIcon && !leftAddon,
      [inputPaddingWithIcon[size].split(' ')[1]]: hasRightIcon && !rightAddon,
    });

    const inputClasses = cn(
      baseClasses,
      inputVariants[variant],
      inputSizes[size],
      stateClasses,
      effectClasses,
      paddingClasses,
      {
        'rounded-l-none': leftAddon,
        'rounded-r-none': rightAddon,
        'w-full': fullWidth,
        'rounded-xl': variant !== 'flushed',
      },
      className
    );

    const renderLabel = () => {
      if (!label) return null;

      const labelClasses = cn(
        'text-sm font-semibold text-foreground-secondary dark:text-dark-foreground-secondary',
        {
          'mb-2 block': labelPosition === 'top',
          'ml-2 inline-flex items-center': labelPosition === 'inline',
          'absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-200': labelPosition === 'floating',
        }
      );

      return (
        <label htmlFor={inputId} className={labelClasses}>
          {label}
          {required && <span className="text-destructive-500 ml-1">*</span>}
        </label>
      );
    };

    const renderHelperText = () => {
      const message = errorMessage || successMessage || helperText;
      if (!message) return null;

      const helperClasses = cn(
        'mt-1.5 text-sm',
        {
          'text-destructive-600 dark:text-destructive-400': errorMessage,
          'text-success-600 dark:text-success-400': successMessage && !errorMessage,
          'text-foreground-tertiary dark:text-dark-foreground-tertiary': !errorMessage && !successMessage,
        }
      );

      return (
        <div id={helperId} className={helperClasses}>
          {message}
        </div>
      );
    };

    const handleClear = () => {
      if (onClear) {
        onClear();
      }
    };

    return (
      <div className={cn('relative', { 'w-full': fullWidth })}>
        {labelPosition === 'top' && renderLabel()}
        
        <div className={cn('relative flex', { 'mt-1': label && labelPosition === 'top' })}>
          {labelPosition === 'inline' && renderLabel()}
          
          {leftAddon && (
            <div className="flex items-center px-3 bg-gradient-to-b from-background-secondary to-background-tertiary dark:from-dark-background-secondary dark:to-dark-background-tertiary border border-r-0 border-input-border dark:border-dark-input-border rounded-l-xl shadow-sm font-medium text-foreground-secondary dark:text-dark-foreground-secondary">
              {leftAddon}
            </div>
          )}
          
          <div className="relative flex-1">
            {labelPosition === 'floating' && renderLabel()}
            
            {leftIcon && (
              <div 
                className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-foreground-muted dark:text-dark-foreground-muted pointer-events-none"
                style={{ width: iconSizes[size], height: iconSizes[size] }}
              >
                {React.isValidElement(leftIcon) && React.cloneElement(leftIcon as React.ReactElement<any>, {
                  size: iconSizes[size],
                  width: iconSizes[size],
                  height: iconSizes[size],
                  strokeWidth: 2,
                })}
              </div>
            )}
            
            <input
              ref={ref}
              id={inputId}
              disabled={disabled || loading}
              aria-invalid={error}
              aria-describedby={helperText || errorMessage || successMessage ? helperId : undefined}
              className={inputClasses}
              {...props}
            />
            
            {(clearable && props.value) && !rightIcon && !loading && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground-muted hover:text-foreground dark:text-dark-foreground-muted dark:hover:text-dark-foreground transition-colors rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 p-0.5"
                style={{ width: iconSizes[size] + 4, height: iconSizes[size] + 4 }}
              >
                <X size={iconSizes[size]} strokeWidth={2} />
              </button>
            )}
            
            {loading && (
              <div 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-500 dark:text-primary-400"
                style={{ width: iconSizes[size], height: iconSizes[size] }}
              >
                <svg className="animate-spin w-full h-full" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              </div>
            )}
            
            {rightIcon && !loading && !clearable && (
              <div 
                className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-foreground-muted dark:text-dark-foreground-muted pointer-events-none"
                style={{ width: iconSizes[size], height: iconSizes[size] }}
              >
                {React.isValidElement(rightIcon) && React.cloneElement(rightIcon as React.ReactElement<any>, {
                  size: iconSizes[size],
                  width: iconSizes[size],
                  height: iconSizes[size],
                  strokeWidth: 2,
                })}
              </div>
            )}
          </div>
          
          {rightAddon && (
            <div className="flex items-center px-3 bg-gradient-to-b from-background-secondary to-background-tertiary dark:from-dark-background-secondary dark:to-dark-background-tertiary border border-l-0 border-input-border dark:border-dark-input-border rounded-r-xl shadow-sm font-medium text-foreground-secondary dark:text-dark-foreground-secondary">
              {rightAddon}
            </div>
          )}
        </div>
        
        {renderHelperText()}
      </div>
    );
  }
);

Input.displayName = 'Input';
