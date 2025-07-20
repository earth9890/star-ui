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
  labelPosition?: 'top' | 'bottom' | 'left' | 'right';
  required?: boolean;
  clearable?: boolean;
  onClear?: () => void;
  glow?: boolean;
  shimmer?: boolean;
  float?: boolean;
}

const inputVariants: Record<InputVariant, string> = {
  default: `
    border border-field-border bg-field-background shadow-sm
    hover:border-field-border-hover hover:shadow-md
    focus:border-field-border-focus focus:ring-4 focus:ring-field-border-focus/10 focus:shadow-lg
    dark:border-dark-field-border dark:bg-dark-field-background dark:shadow-none
    dark:hover:border-dark-border-secondary dark:hover:shadow-md dark:hover:shadow-primary-500/5
    dark:focus:border-dark-field-border-focus dark:focus:ring-dark-field-border-focus/20 dark:focus:shadow-lg dark:focus:shadow-primary-500/10
  `,
  outline: `
    border-2 border-border-interactive bg-transparent shadow-sm
    hover:border-primary-400 hover:shadow-md hover:shadow-primary-500/10
    focus:border-field-border-focus focus:ring-4 focus:ring-field-border-focus/20 focus:shadow-lg
    dark:border-dark-border-interactive dark:shadow-none
    dark:hover:border-primary-600 dark:hover:shadow-md dark:hover:shadow-primary-500/10
    dark:focus:border-dark-field-border-focus dark:focus:ring-dark-field-border-focus/20 dark:focus:shadow-lg dark:focus:shadow-primary-500/20
  `,
  filled: `
    border border-transparent bg-gradient-to-b from-background-secondary to-background-tertiary shadow-inner
    hover:from-field-background-hover hover:to-neutral-100 hover:shadow-sm
    focus:from-background-tertiary focus:to-neutral-100 focus:ring-4 focus:ring-field-border-focus/10 focus:shadow-md
    dark:from-dark-background-secondary dark:to-dark-background-tertiary
    dark:hover:from-dark-field-background-hover dark:hover:to-neutral-800
    dark:focus:from-dark-background-tertiary dark:focus:to-neutral-800 dark:focus:ring-dark-field-border-focus/20
  `,
  ghost: `
    border border-transparent bg-transparent
    hover:bg-field-background-hover/50 hover:shadow-sm
    focus:bg-field-background-hover focus:ring-4 focus:ring-field-border-focus/10 focus:shadow-md
    dark:hover:bg-dark-field-background-hover/50
    dark:focus:bg-dark-field-background-hover dark:focus:ring-dark-field-border-focus/20
  `,
  flushed: `
    border-b-2 border-t-0 border-l-0 border-r-0 border-field-border
    bg-transparent rounded-none px-0
    hover:border-field-border-hover
    focus:border-field-border-focus focus:shadow-[0_2px_0_0_rgba(59,130,246,0.5)]
    dark:border-dark-field-border
    dark:hover:border-dark-border-secondary
    dark:focus:border-dark-field-border-focus dark:focus:shadow-[0_2px_0_0_rgba(96,165,250,0.5)]
  `,
};

// Separate variants for when addons are present
const inputVariantsWithLeftAddon: Record<InputVariant, string> = {
  default: 'border-l-0 rounded-l-none',
  outline: 'border-l-0 rounded-l-none',
  filled: 'border-l-0 rounded-l-none',
  ghost: 'border-l-0 rounded-l-none',
  flushed: '',
};

const inputVariantsWithRightAddon: Record<InputVariant, string> = {
  default: 'border-r-0 rounded-r-none',
  outline: 'border-r-0 rounded-r-none',
  filled: 'border-r-0 rounded-r-none',
  ghost: 'border-r-0 rounded-r-none',
  flushed: '',
};

const inputSizes: Record<Size, string> = {
  xs: 'h-8 text-xs px-2.5',
  sm: 'h-9 text-sm px-3',
  md: 'h-10 text-base px-4',
  lg: 'h-12 text-lg px-5',
  xl: 'h-14 text-xl px-6',
};

const addonSizes: Record<Size, string> = {
  xs: 'h-8 text-xs',
  sm: 'h-9 text-sm',
  md: 'h-10 text-base',
  lg: 'h-12 text-lg',
  xl: 'h-14 text-xl',
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
      text-field-text placeholder:text-field-placeholder
      dark:text-dark-text-primary dark:placeholder:text-dark-text-muted
      transition-all duration-300 ease-out outline-none
      disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none
    `;

    const stateClasses = cn({
      'border-field-border-error focus:border-support-error-dark focus:ring-support-error/20 shadow-support-error-light dark:border-support-error dark:focus:border-support-error-dark dark:shadow-support-error/10': error,
      'border-support-success focus:border-support-success-dark focus:ring-support-success/20 shadow-support-success-light dark:border-support-success dark:focus:border-support-success-dark dark:shadow-support-success/10': success && !error,
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
      leftAddon && inputVariantsWithLeftAddon[variant],
      rightAddon && inputVariantsWithRightAddon[variant],
      {
        'w-full': fullWidth,
        'rounded-xl': variant !== 'flushed' && !leftAddon && !rightAddon,
        'rounded-r-xl': variant !== 'flushed' && leftAddon && !rightAddon,
        'rounded-l-xl': variant !== 'flushed' && !leftAddon && rightAddon,
      },
      className
    );

    const renderLabel = () => {
      if (!label) return null;

      const labelClasses = cn(
        'text-sm font-semibold text-field-label dark:text-dark-text-secondary',
        {
          'ml-1 mb-2 block': labelPosition === 'top',
          'ml-1 mt-2 block': labelPosition === 'bottom',
          'mr-3 flex items-center': labelPosition === 'left',
          'ml-3 flex items-center': labelPosition === 'right',
        }
      );

      return (
        <label htmlFor={inputId} className={labelClasses}>
          {label}
          {required && <span className="text-support-error ml-1">*</span>}
        </label>
      );
    };

    const renderHelperText = () => {
      const message = errorMessage || successMessage || helperText;
      if (!message) return null;

      const helperClasses = cn(
        'mt-1.5 text-sm',
        {
          'text-text-error dark:text-support-error': errorMessage,
          'text-text-success dark:text-support-success': successMessage && !errorMessage,
          'text-field-helper dark:text-dark-text-tertiary': !errorMessage && !successMessage,
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
        
        <div className={cn(
          'relative flex items-center',
          { 'mt-1': label && labelPosition === 'top' }
        )}>
          {labelPosition === 'left' && renderLabel()}
          
          <div className={cn(
            'relative flex flex-1',
            (leftAddon || rightAddon) && variant !== 'flushed' && 'shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl overflow-hidden'
          )}>
            {leftAddon && (
              <div className={cn(
                "flex items-center gap-2 px-3 font-medium text-text-secondary dark:text-dark-text-secondary",
                "border border-r-0 border-field-border dark:border-dark-field-border",
                "bg-background-secondary dark:bg-dark-background-secondary",
                "rounded-l-xl",
                addonSizes[size],
                variant === 'outline' && 'border-2 border-border-interactive dark:border-dark-border-interactive',
                variant === 'filled' && 'bg-gradient-to-b from-background-secondary to-background-tertiary dark:from-dark-background-secondary dark:to-dark-background-tertiary border-transparent',
                variant === 'ghost' && 'border-transparent bg-transparent',
                variant === 'flushed' && 'border-0 border-b-2 border-field-border dark:border-dark-field-border rounded-none bg-transparent px-0'
              )}>
                {leftAddon}
                {leftIcon && (
                  <div 
                    className="flex items-center justify-center text-field-icon dark:text-dark-text-muted"
                    style={{ width: iconSizes[size], height: iconSizes[size] }}
                  >
                    {React.isValidElement(leftIcon) ? React.cloneElement(leftIcon as React.ReactElement<any>, {
                      size: iconSizes[size],
                      width: iconSizes[size],
                      height: iconSizes[size],
                      strokeWidth: 2,
                    }) : leftIcon}
                  </div>
                )}
              </div>
            )}
            
            <div className="relative flex-1">
            
            {leftIcon && !leftAddon && (
              <div 
                className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-field-icon dark:text-dark-text-muted pointer-events-none z-10"
                style={{ width: iconSizes[size], height: iconSizes[size] }}
              >
                {React.isValidElement(leftIcon) ? React.cloneElement(leftIcon as React.ReactElement<any>, {
                  size: iconSizes[size],
                  width: iconSizes[size],
                  height: iconSizes[size],
                  strokeWidth: 2,
                }) : leftIcon}
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
                className="absolute right-3 top-1/2 -translate-y-1/2 text-icon-secondary hover:text-icon-primary dark:text-dark-text-muted dark:hover:text-dark-text-primary transition-colors rounded-full hover:bg-background-secondary dark:hover:bg-dark-background-tertiary p-0.5"
                style={{ width: iconSizes[size] + 4, height: iconSizes[size] + 4 }}
              >
                <X size={iconSizes[size]} strokeWidth={2} />
              </button>
            )}
            
            {loading && (
              <div 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-icon-interactive dark:text-dark-border-interactive"
                style={{ width: iconSizes[size], height: iconSizes[size] }}
              >
                <svg className="animate-spin w-full h-full" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              </div>
            )}
            
            {rightIcon && !loading && !clearable && !rightAddon && (
              <div 
                className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-field-icon dark:text-dark-text-muted pointer-events-none"
                style={{ width: iconSizes[size], height: iconSizes[size] }}
              >
                {React.isValidElement(rightIcon) ? React.cloneElement(rightIcon as React.ReactElement<any>, {
                  size: iconSizes[size],
                  width: iconSizes[size],
                  height: iconSizes[size],
                  strokeWidth: 2,
                }) : rightIcon}
              </div>
            )}
            </div>
            
            {rightAddon && (
            <div className={cn(
              "flex items-center gap-2 px-3 font-medium text-text-secondary dark:text-dark-text-secondary",
              "border border-l-0 border-field-border dark:border-dark-field-border",
              "bg-background-secondary dark:bg-dark-background-secondary",
              "rounded-r-xl",
              addonSizes[size],
              variant === 'outline' && 'border-2 border-border-interactive dark:border-dark-border-interactive',
              variant === 'filled' && 'bg-gradient-to-b from-background-secondary to-background-tertiary dark:from-dark-background-secondary dark:to-dark-background-tertiary border-transparent',
              variant === 'ghost' && 'border-transparent bg-transparent',
              variant === 'flushed' && 'border-0 border-b-2 border-field-border dark:border-dark-field-border rounded-none bg-transparent px-0'
            )}>
              {rightIcon && !loading && !clearable && (
                <div 
                  className="flex items-center justify-center text-field-icon dark:text-dark-text-muted"
                  style={{ width: iconSizes[size], height: iconSizes[size] }}
                >
                  {React.isValidElement(rightIcon) ? React.cloneElement(rightIcon as React.ReactElement<any>, {
                    size: iconSizes[size],
                    width: iconSizes[size],
                    height: iconSizes[size],
                    strokeWidth: 2,
                  }) : rightIcon}
                </div>
              )}
              {rightAddon}
            </div>
          )}
          </div>
          
          {labelPosition === 'right' && renderLabel()}
        </div>
        
        {labelPosition === 'bottom' && renderLabel()}
        {renderHelperText()}
      </div>
    );
  }
);

Input.displayName = 'Input';
