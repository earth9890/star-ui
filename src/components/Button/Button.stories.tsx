import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#0f172a' },
        { name: 'gradient', value: 'linear-gradient(to br, #e0e7ff, #f5d0fe)' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'gradient', 'cosmic', 'sunset', 'ocean', 'destructive'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the button',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Show loading spinner',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the button',
    },
    glow: {
      control: { type: 'boolean' },
      description: 'Add a glowing effect',
    },
    shimmer: {
      control: { type: 'boolean' },
      description: 'Add a shimmer animation',
    },
    float: {
      control: { type: 'boolean' },
      description: 'Add a floating animation',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Variants
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};


// Gradient Variants
export const GradientAnimated: Story = {
  args: {
    variant: 'gradient',
    children: 'Animated Gradient',
  },
};

export const Cosmic: Story = {
  args: {
    variant: 'cosmic',
    children: 'Cosmic Power',
  },
};

export const Sunset: Story = {
  args: {
    variant: 'sunset',
    children: 'Sunset Vibes',
  },
};

export const Ocean: Story = {
  args: {
    variant: 'ocean',
    children: 'Ocean Depths',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete Forever',
  },
};

// Special Effects
export const WithGlow: Story = {
  args: {
    variant: 'primary',
    glow: true,
    children: 'Glowing Button',
  },
};

export const WithShimmer: Story = {
  args: {
    variant: 'gradient',
    shimmer: true,
    children: 'Shimmer Effect',
  },
};

export const WithFloat: Story = {
  args: {
    variant: 'cosmic',
    float: true,
    children: 'Floating Magic',
  },
};


// Sizes
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="xs" variant="primary">Extra Small</Button>
      <Button size="sm" variant="primary">Small</Button>
      <Button size="md" variant="primary">Medium</Button>
      <Button size="lg" variant="primary">Large</Button>
      <Button size="xl" variant="primary">Extra Large</Button>
    </div>
  ),
};

// Loading States
export const Loading: Story = {
  args: {
    loading: true,
    variant: 'cosmic',
    children: 'Processing...',
  },
};


// With Icons
export const WithLeftIcon: Story = {
  args: {
    leftIcon: '🚀',
    variant: 'gradient',
    children: 'Launch App',
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: '→',
    variant: 'outline',
    children: 'Continue',
  },
};

export const WithBothIcons: Story = {
  args: {
    leftIcon: '⚡',
    rightIcon: '✨',
    variant: 'cosmic',
    children: 'Magic Button',
    glow: true,
  },
};

// Interactive Examples
export const InteractiveDemo: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Hover Effects</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" glow>Hover for Glow</Button>
          <Button variant="cosmic" float>Hover to Float</Button>
          <Button variant="gradient" shimmer>Hover for Shimmer</Button>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Click Effects</h3>
        <div className="flex flex-wrap gap-4">
          <Button 
            variant="cosmic" 
            onClick={() => alert('🌟 Cosmic energy released!')}
          >
            Click Me
          </Button>
          <Button 
            variant="sunset" 
            glow 
            onClick={() => console.log('🌅 Sunset logged')}
          >
            Console Log
          </Button>
        </div>
      </div>
    </div>
  ),
};

// Showcase All Variants
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="gradient">Gradient</Button>
      <Button variant="cosmic">Cosmic</Button>
      <Button variant="sunset">Sunset</Button>
      <Button variant="ocean">Ocean</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};

// Dark Mode Examples
export const DarkModeShowcase: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-4">
        <Button variant="primary">Primary Dark</Button>
        <Button variant="outline">Outline Dark</Button>
        <Button variant="ghost">Ghost Dark</Button>
      </div>
      <div className="flex gap-4">
        <Button variant="gradient" glow>Gradient Glow</Button>
        <Button variant="cosmic" float>Cosmic Float</Button>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};