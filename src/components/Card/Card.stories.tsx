import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';
import { Button } from '../Button/Button';
import { Badge } from '../Badge/Badge';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
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
      options: ['default', 'gradient', 'cosmic', 'elevated'],
      description: 'The visual style variant of the card',
    },
    hover: {
      control: { type: 'boolean' },
      description: 'Enable hover effects',
      defaultValue: true,
    },
    glow: {
      control: { type: 'boolean' },
      description: 'Add a glowing effect',
    },
    float: {
      control: { type: 'boolean' },
      description: 'Add a floating animation',
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: 'Card padding size',
      defaultValue: 'md',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Card
export const Default: Story = {
  args: {
    variant: 'default',
    children: (
      <>
        <CardHeader>
          <CardTitle>Default Card</CardTitle>
          <CardDescription>A simple card with default styling</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is a basic card component with clean, minimal styling.</p>
        </CardContent>
      </>
    ),
  },
};


// Gradient Card
export const Gradient: Story = {
  args: {
    variant: 'gradient',
    children: (
      <>
        <CardHeader>
          <CardTitle>🎨 Gradient Card</CardTitle>
          <CardDescription>Subtle color transitions</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Features smooth gradient backgrounds that adapt to light and dark themes.</p>
        </CardContent>
        <CardFooter>
          <Button variant="primary" size="sm">Explore</Button>
          <Badge variant="gradient">New</Badge>
        </CardFooter>
      </>
    ),
  },
};

// Cosmic Card
export const Cosmic: Story = {
  args: {
    variant: 'cosmic',
    glow: true,
    children: (
      <>
        <CardHeader>
          <CardTitle>🌌 Cosmic Experience</CardTitle>
          <CardDescription>Journey through the stars</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Deep space-inspired design with rich gradients and ethereal glow.</p>
        </CardContent>
        <CardFooter>
          <Button variant="gradient" size="sm">Launch</Button>
          <Badge variant="cosmic" pulse>Cosmic</Badge>
        </CardFooter>
      </>
    ),
  },
};

// Elevated Card
export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <>
        <CardHeader>
          <CardTitle>📈 Elevated Design</CardTitle>
          <CardDescription>Clean with prominent shadows</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Strong elevation creates visual hierarchy and depth.</p>
        </CardContent>
      </>
    ),
  },
};

// Interactive Card with Effects
export const InteractiveEffects: Story = {
  render: () => (
    <div className="grid gap-6 w-[600px]">
      <Card variant="elevated" hover float>
        <CardHeader>
          <CardTitle>🎯 Hover & Float</CardTitle>
          <CardDescription>Interactive elevated card</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card floats and transforms on hover!</p>
        </CardContent>
        <CardFooter>
          <Button variant="primary" size="sm">Try Me</Button>
        </CardFooter>
      </Card>

      <Card variant="gradient" hover glow>
        <CardHeader>
          <CardTitle>✨ Hover & Glow</CardTitle>
          <CardDescription>Glowing gradient card</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Watch the glow effect when you hover!</p>
        </CardContent>
        <CardFooter>
          <Button variant="primary" size="sm" glow>Glowing Button</Button>
        </CardFooter>
      </Card>
    </div>
  ),
};

// Card Grid Example
export const CardGrid: Story = {
  render: () => (
    <div className="grid md:grid-cols-3 gap-6 w-[900px]">
      <Card variant="elevated" hover>
        <CardHeader>
          <CardTitle>Feature One</CardTitle>
          <CardDescription>Elevated design</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Modern elevated card design</p>
        </CardContent>
      </Card>

      <Card variant="gradient" hover>
        <CardHeader>
          <CardTitle>Feature Two</CardTitle>
          <CardDescription>Gradient beauty</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Smooth color transitions</p>
        </CardContent>
      </Card>

      <Card variant="elevated" hover>
        <CardHeader>
          <CardTitle>Feature Three</CardTitle>
          <CardDescription>Clean elevation</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Strong shadow depth</p>
        </CardContent>
      </Card>
    </div>
  ),
};

// Dark Mode Showcase
export const DarkMode: Story = {
  render: () => (
    <div className="grid gap-6 w-[400px]">
      <Card variant="default">
        <CardHeader>
          <CardTitle>Dark Default</CardTitle>
          <CardDescription>Clean dark theme</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Automatically adapts to dark mode.</p>
        </CardContent>
      </Card>

      <Card variant="gradient" hover glow>
        <CardHeader>
          <CardTitle>Dark Gradient</CardTitle>
          <CardDescription>Gradient in the dark</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Beautiful gradient effects.</p>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// Complex Card Example
export const ComplexCard: Story = {
  args: {
    variant: 'gradient',
    hover: true,
    children: (
      <>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle>🚀 Premium Feature</CardTitle>
              <CardDescription>Advanced functionality for power users</CardDescription>
            </div>
            <Badge variant="gradient">PRO</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Get access to exclusive features:</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Badge variant="success" size="sm">✓</Badge>
              <span>Unlimited projects</span>
            </li>
            <li className="flex items-center gap-2">
              <Badge variant="success" size="sm">✓</Badge>
              <span>Priority support</span>
            </li>
            <li className="flex items-center gap-2">
              <Badge variant="success" size="sm">✓</Badge>
              <span>Advanced analytics</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="gradient" className="w-full" shimmer>
            Upgrade Now
          </Button>
        </CardFooter>
      </>
    ),
  },
  parameters: {
    backgrounds: { default: 'gradient' },
  },
};