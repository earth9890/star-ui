import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
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
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'gradient', 'cosmic'],
      description: 'The visual style variant of the badge',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the badge',
    },
    pulse: {
      control: { type: 'boolean' },
      description: 'Add a pulse animation',
    },
    glow: {
      control: { type: 'boolean' },
      description: 'Add a glowing effect',
    },
    dot: {
      control: { type: 'boolean' },
      description: 'Show a notification dot',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Variants
export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Default',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger',
  },
};

// Modern Variants
export const Gradient: Story = {
  args: {
    variant: 'gradient',
    children: 'Gradient',
  },
};

export const Cosmic: Story = {
  args: {
    variant: 'cosmic',
    children: 'Cosmic',
    pulse: true,
  },
};

// With Effects
export const WithPulse: Story = {
  args: {
    variant: 'primary',
    pulse: true,
    children: 'Pulsing',
  },
};

export const WithGlow: Story = {
  args: {
    variant: 'gradient',
    glow: true,
    children: 'Glowing',
  },
};

export const WithDot: Story = {
  args: {
    variant: 'cosmic',
    dot: true,
    children: 'Messages',
  },
};

// Sizes
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge size="sm" variant="primary">Small</Badge>
      <Badge size="md" variant="primary">Medium</Badge>
      <Badge size="lg" variant="primary">Large</Badge>
    </div>
  ),
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="gradient">Gradient</Badge>
      <Badge variant="cosmic" pulse>Cosmic</Badge>
    </div>
  ),
};

// Practical Examples
export const StatusBadges: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Server Status:</span>
        <Badge variant="success" pulse dot>Online</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Build Status:</span>
        <Badge variant="warning">Building...</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Deploy Status:</span>
        <Badge variant="danger">Failed</Badge>
      </div>
    </div>
  ),
};

// Feature Badges
export const FeatureBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="gradient">✨ New</Badge>
      <Badge variant="cosmic" pulse>🚀 Beta</Badge>
      <Badge variant="primary" glow>⭐ Popular</Badge>
      <Badge variant="gradient">🔮 Preview</Badge>
      <Badge variant="success">✓ Verified</Badge>
      <Badge variant="secondary">🔒 Private</Badge>
    </div>
  ),
};

// With Icons
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="primary">
        <span className="flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Featured
        </span>
      </Badge>
      <Badge variant="gradient">
        <span className="flex items-center gap-1">
          🔥 Hot
        </span>
      </Badge>
      <Badge variant="cosmic" pulse>
        <span className="flex items-center gap-1">
          ⚡ Lightning Fast
        </span>
      </Badge>
    </div>
  ),
};

// Dark Mode
export const DarkMode: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Badge variant="default">Default Dark</Badge>
        <Badge variant="primary">Primary Dark</Badge>
        <Badge variant="gradient">Gradient Dark</Badge>
      </div>
      <div className="flex gap-2">
        <Badge variant="gradient" glow>Gradient Glow</Badge>
        <Badge variant="cosmic" pulse>Cosmic Pulse</Badge>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// Interactive Demo
export const InteractiveDemo: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold mb-3">Notification Badges</h3>
        <div className="flex items-center gap-4">
          <div className="relative">
            <button className="px-4 py-2 rounded-lg bg-gray-100">
              Inbox
            </button>
            <div className="absolute -top-2 -right-2">
              <Badge variant="danger" size="sm" dot>5</Badge>
            </div>
          </div>
          <div className="relative">
            <button className="px-4 py-2 rounded-lg bg-gray-100">
              Messages
            </button>
            <div className="absolute -top-2 -right-2">
              <Badge variant="cosmic" size="sm" pulse>99+</Badge>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-semibold mb-3">Tag Cloud</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">React</Badge>
          <Badge variant="default">TypeScript</Badge>
          <Badge variant="default">Tailwind</Badge>
          <Badge variant="gradient">Modern</Badge>
          <Badge variant="cosmic">Innovative</Badge>
        </div>
      </div>
    </div>
  ),
};