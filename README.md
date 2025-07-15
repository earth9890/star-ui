# Star UI Lib

A modern React UI component library built with TypeScript and Tailwind CSS.

## Features

- 🎨 **Modern Design** - Clean and accessible components
- 📦 **TypeScript** - Full TypeScript support with type definitions
- 🎭 **Tailwind CSS** - Utility-first CSS framework for styling
- 📚 **Storybook** - Interactive component documentation
- 🚀 **Tree-shakable** - Only import what you need
- ♿ **Accessible** - Built with accessibility in mind

## Installation

```bash
npm install star-ui-lib
# or
yarn add star-ui-lib
```

## Usage

```jsx
import { Button } from 'star-ui-lib';

function App() {
  return (
    <Button variant="primary" size="md">
      Hello World
    </Button>
  );
}
```

## Components

### Button

```jsx
import { Button } from 'star-ui';

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>

// With sizes
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>

// With loading state
<Button loading>Loading...</Button>

// With icons
<Button leftIcon="👍">Like</Button>
<Button rightIcon="→">Next</Button>
```

## Development

```bash
# Install dependencies
npm install

# Start component playground
npm run playground

# Start Storybook
npm run storybook

# Build the library
npm run build

# Run tests
npm test

# Lint code
npm run lint
```

## Playground

The library includes a live playground where you can test components in real-time:

```bash
# Start the playground (builds library + starts dev server)
npm run playground

# Build playground for production
npm run playground:build
```

The playground runs at `http://localhost:3000` and automatically uses your latest library build.

## Scripts

- `npm run build` - Build the library for production
- `npm run dev` - Build in watch mode
- `npm run playground` - Start the component playground
- `npm run playground:build` - Build playground for production
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production
- `npm run lint` - Lint the codebase
- `npm run typecheck` - Run TypeScript type checking
- `npm run test` - Run tests

## Publishing

1. Update version in `package.json`
2. Run `npm run build` to build the library
3. Run `npm publish` to publish to npm registry

## License

MIT © [Your Name]