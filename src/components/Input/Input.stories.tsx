import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import React, { useState } from 'react';
import { 
  Search, 
  Mail, 
  DollarSign, 
  Lock, 
  Eye, 
  User,
  Globe,
  Phone,
  Calendar,
  Clock,
  Link
} from 'lucide-react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'filled', 'ghost', 'flushed'],
      description: 'The visual style variant of the input',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the input',
    },
    label: {
      control: 'text',
      description: 'Label text for the input field',
    },
    labelPosition: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Position of the label relative to the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    error: {
      control: 'boolean',
      description: 'Whether the input has an error state',
    },
    success: {
      control: 'boolean',
      description: 'Whether the input has a success state',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the input is in a loading state',
    },
    clearable: {
      control: 'boolean',
      description: 'Whether the input can be cleared',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the input should take full width',
    },
    required: {
      control: 'boolean',
      description: 'Whether the input field is required (adds * to label)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

// Variants
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 w-80">
      <Input variant="default" placeholder="Default variant" />
      <Input variant="outline" placeholder="Outline variant" />
      <Input variant="filled" placeholder="Filled variant" />
      <Input variant="ghost" placeholder="Ghost variant" />
      <Input variant="flushed" placeholder="Flushed variant" />
    </div>
  ),
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 w-80">
      <Input size="xs" placeholder="Extra small input" />
      <Input size="sm" placeholder="Small input" />
      <Input size="md" placeholder="Medium input (default)" />
      <Input size="lg" placeholder="Large input" />
      <Input size="xl" placeholder="Extra large input" />
    </div>
  ),
};

// With Labels
export const WithLabels: Story = {
  render: () => (
    <div className="flex flex-col space-y-6 w-80">
      <Input 
        label="Top Label" 
        labelPosition="top" 
        placeholder="Label positioned at top" 
      />
      <Input 
        label="Bottom Label" 
        labelPosition="bottom" 
        placeholder="Label positioned at bottom" 
      />
      <Input 
        label="Left Label" 
        labelPosition="left" 
        placeholder="Label positioned at left" 
      />
      <Input 
        label="Right Label" 
        labelPosition="right" 
        placeholder="Label positioned at right" 
      />
      <Input 
        label="Required Field" 
        required 
        labelPosition="top"
        placeholder="This field is required" 
      />
    </div>
  ),
};

// States
export const States: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 w-80">
      <Input placeholder="Normal state" />
      <Input disabled placeholder="Disabled state" />
      <Input error placeholder="Error state" />
      <Input success placeholder="Success state" />
      <Input loading placeholder="Loading state" />
    </div>
  ),
};

// With Helper Text
export const WithHelperText: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 w-80">
      <Input 
        placeholder="Enter your email" 
        helperText="We'll never share your email with anyone else."
      />
      <Input 
        placeholder="Enter password" 
        type="password"
        error
        errorMessage="Password must be at least 8 characters long."
      />
      <Input 
        placeholder="Enter username" 
        success
        successMessage="Username is available!"
      />
    </div>
  ),
};

// With Icons
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 w-80">
      <Input 
        placeholder="Search..." 
        leftIcon={<Search />}
      />
      <Input 
        placeholder="Enter email" 
        type="email"
        leftIcon={<Mail />}
      />
      <Input 
        placeholder="Enter amount" 
				rightIcon={<DollarSign />}
				leftIcon={<DollarSign />}
      />
      <Input 
        placeholder="Password" 
        type="password"
        leftIcon={<Lock />}
        rightIcon={<Eye />}
      />
      <Input 
        placeholder="Username"
        leftIcon={<User />}
      />
      <Input 
        placeholder="Website URL"
        leftIcon={<Globe />}
      />
      <Input 
        placeholder="Phone number"
        type="tel"
        leftIcon={<Phone />}
      />
    </div>
  ),
};

// With Addons
export const WithAddons: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 w-96">
      <Input 
        placeholder="Username" 
        leftAddon={<span className="text-text-tertiary">@</span>}
      />
      <Input 
        placeholder="Website" 
        leftAddon={<span className="text-text-tertiary">https://</span>}
        rightAddon={<span className="text-text-tertiary">.com</span>}
      />
      <Input 
        placeholder="Price" 
        leftAddon={<span className="text-text-tertiary">$</span>}
        rightAddon={<span className="text-text-tertiary">USD</span>}
      />
      <Input 
        placeholder="Email" 
        rightAddon={
          <button className="px-2 py-1 text-sm bg-button-primary text-button-text rounded hover:bg-button-primary-hover transition-colors">
            Subscribe
          </button>
        }
      />
    </div>
  ),
};

// Addons with Different Variants
export const AddonsWithVariants: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 w-96">
      <Input 
        variant="default"
        placeholder="Default with addons" 
        leftAddon={<User size={16} />}
        rightAddon={<span className="text-text-tertiary">.com</span>}
      />
      <Input 
        variant="outline"
        placeholder="Outline with addons" 
        leftAddon={<Mail size={16} />}
        rightAddon={<span className="text-text-tertiary">@gmail</span>}
      />
      <Input 
        variant="filled"
        placeholder="Filled with addons" 
        leftAddon={<span className="text-text-tertiary">$</span>}
        rightAddon={<span className="text-text-tertiary">USD</span>}
      />
      <Input 
        variant="ghost"
        placeholder="Ghost with addons" 
        leftAddon={<Phone size={16} />}
        rightAddon={<span className="text-text-tertiary">ext. 123</span>}
      />
      <Input 
        variant="flushed"
        placeholder="Flushed with addons" 
        leftAddon={<Globe size={16} />}
        rightAddon={<span className="text-text-tertiary">.org</span>}
      />
    </div>
  ),
};

// Icons and Addons Combined
export const IconsAndAddons: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 w-96">
      <Input 
        placeholder="Search users..." 
        leftIcon={<Search />}
        rightAddon={
          <button className="text-sm text-button-primary hover:text-button-primary-hover transition-colors">
            Advanced
          </button>
        }
      />
      <Input 
        placeholder="Enter amount" 
        leftAddon={<span className="text-text-tertiary">$</span>}
        rightIcon={<DollarSign />}
        type="number"
      />
      <Input 
        // placeholder="johndoe" 
        leftAddon={<span className="text-text-tertiary">github.com/</span>}
        leftIcon={<User />}
        clearable
      />
      <Input 
        placeholder="Enter password"
        type="password"
        leftIcon={<Lock />}
        rightAddon={
          <button className="text-sm text-text-tertiary hover:text-text-primary transition-colors">
            <Eye size={16} />
          </button>
        }
      />
    </div>
  ),
};

// Clearable Input
const ClearableExample = () => {
  const [value, setValue] = useState('Clear me!');
  
  return (
    <div className="w-80">
      <Input 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..." 
        clearable
        onClear={() => setValue('')}
      />
    </div>
  );
};

export const Clearable: Story = {
  render: () => <ClearableExample />,
};

// Input Types
export const InputTypes: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 w-80">
      <Input type="text" placeholder="Text input" label="Text" />
      <Input type="email" placeholder="email@example.com" label="Email" leftIcon={<Mail />} />
      <Input type="password" placeholder="Enter password" label="Password" leftIcon={<Lock />} />
      <Input type="number" placeholder="123" label="Number" />
      <Input type="tel" placeholder="+1 (555) 000-0000" label="Phone" leftIcon={<Phone />} />
      <Input type="url" placeholder="https://example.com" label="URL" leftIcon={<Link />} />
      <Input type="date" label="Date" leftIcon={<Calendar />} />
      <Input type="time" label="Time" leftIcon={<Clock />} />
    </div>
  ),
};

// With Effects
export const WithEffects: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 w-80">
      <Input placeholder="Glowing input" glow />
      <Input placeholder="Shimmer effect" shimmer />
      <Input placeholder="Floating animation" float />
      <Input 
        placeholder="All effects combined" 
        glow 
        shimmer 
        float 
        variant="outline"
      />
    </div>
  ),
};

// Form Example
const FormExampleComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: e.target.value });
    
    // Simple validation
    if (field === 'email') {
      setErrors({ ...errors, email: !e.target.value.includes('@') });
    }
    if (field === 'password') {
      setErrors({ ...errors, password: e.target.value.length < 8 });
    }
    if (field === 'confirmPassword') {
      setErrors({ ...errors, confirmPassword: e.target.value !== formData.password });
    }
  };

  return (
    <form className="flex flex-col space-y-4 w-96 p-6 bg-card dark:bg-dark-card rounded-lg border border-border dark:border-dark-border">
      <h2 className="text-xl font-semibold mb-2">Create Account</h2>
      
      <Input
        label="Full Name"
        placeholder="John Doe"
        value={formData.name}
        onChange={handleChange('name')}
        leftIcon={<User />}
        required
      />
      
      <Input
        label="Email"
        type="email"
        placeholder="john@example.com"
        value={formData.email}
        onChange={handleChange('email')}
        leftIcon={<Mail />}
        error={errors.email && formData.email.length > 0}
        errorMessage={errors.email && formData.email.length > 0 ? "Please enter a valid email" : undefined}
        required
      />
      
      <Input
        label="Password"
        type="password"
        placeholder="••••••••"
        value={formData.password}
        onChange={handleChange('password')}
        leftIcon={<Lock />}
        error={errors.password && formData.password.length > 0}
        errorMessage={errors.password && formData.password.length > 0 ? "Password must be at least 8 characters" : undefined}
        helperText="Use at least 8 characters"
        required
      />
      
      <Input
        label="Confirm Password"
        type="password"
        placeholder="••••••••"
        value={formData.confirmPassword}
        onChange={handleChange('confirmPassword')}
        leftIcon={<Lock />}
        error={errors.confirmPassword && formData.confirmPassword.length > 0}
        errorMessage={errors.confirmPassword && formData.confirmPassword.length > 0 ? "Passwords don't match" : undefined}
        success={!errors.confirmPassword && formData.confirmPassword.length > 0}
        successMessage={!errors.confirmPassword && formData.confirmPassword.length > 0 ? "Passwords match!" : undefined}
        required
      />
      
      <button 
        type="submit"
        className="mt-4 px-4 py-2 bg-button-primary text-button-text rounded-md hover:bg-button-primary-hover transition-colors"
        onClick={(e) => e.preventDefault()}
      >
        Create Account
      </button>
    </form>
  );
};

export const FormExample: Story = {
  render: () => <FormExampleComponent />,
};

// Dark Mode Example
export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="flex flex-col space-y-4 w-80">
      <Input variant="default" placeholder="Default in dark mode" />
      <Input variant="outline" placeholder="Outline in dark mode" />
      <Input variant="filled" placeholder="Filled in dark mode" />
      <Input variant="ghost" placeholder="Ghost in dark mode" />
      <Input variant="flushed" placeholder="Flushed in dark mode" />
    </div>
  ),
};