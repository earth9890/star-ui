# Star UI Theme Guide

## Overview
Star UI uses a semantic color system that allows for easy theming and customization. Instead of hardcoding colors, use semantic color tokens that can be overridden by users.

## Usage Examples

### Basic Component Styling

#### Instead of this ❌
```jsx
<button className="bg-blue-500 text-white border-gray-300">
  Click me
</button>
```

#### Do this ✅
```jsx
<button className="bg-primary text-primary-foreground border-border">
  Click me
</button>
```

### Common Patterns

#### Backgrounds
- `bg-background` - Default background
- `bg-background-secondary` - Secondary/alternate background
- `bg-background-tertiary` - Tertiary background (e.g., hover states)

#### Text Colors
- `text-foreground` - Default text color
- `text-foreground-secondary` - Secondary text (less emphasis)
- `text-foreground-muted` - Muted text (least emphasis)

#### Borders
- `border-border` - Default border
- `border-border-secondary` - Secondary border
- `border-border-focus` - Focus state border

#### Interactive States
- `bg-primary` + `text-primary-foreground` - Primary actions
- `bg-secondary` + `text-secondary-foreground` - Secondary actions
- `bg-destructive` + `text-destructive-foreground` - Destructive actions
- `bg-success` + `text-success-foreground` - Success states
- `bg-warning` + `text-warning-foreground` - Warning states

### Dark Mode Support

All components automatically support dark mode when using semantic colors:

```jsx
// Light mode
<div className="bg-background text-foreground">
  Content automatically adapts to theme
</div>

// For dark-specific overrides (rare cases)
<div className="bg-background dark:bg-dark-background">
  Custom dark mode override
</div>
```

### Component-Specific Colors

```jsx
// Card
<div className="bg-card text-card-foreground border-card-border">

// Modal
<div className="bg-modal text-modal-foreground">

// Input
<input className="bg-input text-input-foreground border-input-border focus:border-input-borderFocus" />
```

## Customization for Users

Users can override the default theme by extending their own `tailwind.config.js`:

```js
// User's tailwind.config.js
export default {
  presets: [require('@star-ui/tailwind-config')],
  theme: {
    extend: {
      colors: {
        // Override primary color
        primary: {
          DEFAULT: '#your-color',
          foreground: '#your-foreground-color',
        },
        // Override semantic colors
        background: {
          DEFAULT: '#your-bg-color',
          secondary: '#your-secondary-bg',
        },
        // Add custom semantic colors
        accent: {
          DEFAULT: '#your-accent',
          foreground: '#your-accent-foreground',
        },
      },
    },
  },
}
```

## Best Practices

1. **Always use semantic tokens** - Never hardcode colors like `bg-blue-500`
2. **Think semantically** - Use `bg-destructive` not `bg-red-500` for delete buttons
3. **Maintain contrast** - Always pair background colors with their corresponding foreground
4. **Test both themes** - Ensure your component looks good in both light and dark modes
5. **Document variants** - If your component has color variants, document which semantic colors to use

## Color Token Reference

### Semantic Tokens
- `primary` - Brand/primary color
- `secondary` - Secondary brand color
- `background` - Page/component backgrounds
- `foreground` - Text colors
- `border` - Border colors
- `destructive` - Error/delete actions
- `success` - Success states
- `warning` - Warning states
- `info` - Informational states
- `neutral` - Neutral grays

### Each token includes:
- Shades: 50-900 for fine control
- DEFAULT: The main color
- foreground: Text color to use on that background