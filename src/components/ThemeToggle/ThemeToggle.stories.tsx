import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from './ThemeToggle';
import { ThemeProvider } from '../../theme/ThemeProvider';
import { Card, CardHeader, CardTitle, CardContent } from '../Card/Card';
import { Button } from '../Button/Button';
import { Badge } from '../Badge/Badge';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="light">
        <div className="min-h-[400px] w-[600px] flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the theme toggle button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Theme Toggle
export const Default: Story = {
  args: {
    size: 'md',
  },
};

// Different Sizes
export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

// All Sizes
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <ThemeToggle size="sm" />
      <ThemeToggle size="md" />
      <ThemeToggle size="lg" />
    </div>
  ),
};

// In Context
export const InHeader: Story = {
  render: () => (
    <div className="w-full">
      <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">My App</h1>
        <div className="flex items-center gap-4">
          <Badge variant="gradient">v2.0</Badge>
          <ThemeToggle />
        </div>
      </header>
    </div>
  ),
};

// With Components Demo
export const ComponentShowcase: Story = {
  render: () => (
    <div className="space-y-6 w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Theme Demo</h2>
        <ThemeToggle />
      </div>
      
      <Card variant="gradient">
        <CardHeader>
          <CardTitle>Gradient Card in Action</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Toggle the theme to see how components adapt to dark mode!
          </p>
          <div className="flex gap-2">
            <Button variant="primary" size="sm">Primary</Button>
            <Button variant="gradient" size="sm">Gradient</Button>
            <Button variant="outline" size="sm">Outline</Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-2">
        <Badge variant="primary">Primary</Badge>
        <Badge variant="gradient">Gradient</Badge>
        <Badge variant="cosmic">Cosmic</Badge>
        <Badge variant="cosmic" pulse>Cosmic</Badge>
      </div>
    </div>
  ),
};

// Floating Theme Toggle
export const FloatingToggle: Story = {
  render: () => (
    <div className="relative w-full h-[300px]">
      <div className="absolute top-4 right-4">
        <ThemeToggle className="shadow-xl" />
      </div>
      <div className="p-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Floating Toggle Example
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          The theme toggle can be positioned anywhere in your layout.
        </p>
      </div>
    </div>
  ),
};

// Interactive Demo
export const InteractiveDemo: Story = {
  render: () => {
    return (
      <div className="text-center space-y-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            🌓 Theme Switcher
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Click to toggle between light and dark themes
          </p>
          <ThemeToggle size="lg" />
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
            <h4 className="font-semibold text-gray-900 dark:text-white">Light Mode</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Clean and bright</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
            <h4 className="font-semibold text-gray-900 dark:text-white">Dark Mode</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Easy on the eyes</p>
          </div>
        </div>
      </div>
    );
  },
};

// Custom Styled
export const CustomStyled: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Default:</span>
        <ThemeToggle />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">With Shadow:</span>
        <ThemeToggle className="shadow-xl" />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Colored Ring:</span>
        <ThemeToggle className="ring-2 ring-purple-500 ring-offset-2" />
      </div>
    </div>
  ),
};