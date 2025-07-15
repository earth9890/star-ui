import { useState } from 'react';
import { Button } from '../../src/components/Button/Button';

function App() {
  const [loading, setLoading] = useState(false);

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Star UI Playground
          </h1>
          <p className="text-lg text-gray-600">
            Test and explore Star UI components in real-time
          </p>
        </header>

        <div className="space-y-12">
          {/* Button Variants */}
          <section className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Button Variants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-700">Primary</h3>
                <Button variant="primary">Primary Button</Button>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-700">Secondary</h3>
                <Button variant="secondary">Secondary Button</Button>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-700">Outline</h3>
                <Button variant="outline">Outline Button</Button>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-700">Ghost</h3>
                <Button variant="ghost">Ghost Button</Button>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-700">Destructive</h3>
                <Button variant="destructive">Destructive Button</Button>
              </div>
            </div>
          </section>

          {/* Button Sizes */}
          <section className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Button Sizes</h2>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="xs">Extra Small</Button>
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
            </div>
          </section>

          {/* Button States */}
          <section className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Button States</h2>
            <div className="flex flex-wrap items-center gap-4">
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
              <Button loading={loading} onClick={handleLoadingDemo}>
                {loading ? 'Loading...' : 'Click for Loading Demo'}
              </Button>
            </div>
          </section>

          {/* Button with Icons */}
          <section className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibent text-gray-900 mb-6">Buttons with Icons</h2>
            <div className="flex flex-wrap items-center gap-4">
              <Button leftIcon="👍" variant="primary">
                Like
              </Button>
              <Button rightIcon="→" variant="outline">
                Next Step
              </Button>
              <Button leftIcon="📁" rightIcon="📤" variant="secondary">
                Save & Export
              </Button>
              <Button leftIcon="⚙️" variant="ghost">
                Settings
              </Button>
            </div>
          </section>

          {/* Interactive Demo */}
          <section className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Interactive Demo</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                This playground allows you to test Star UI components in real-time.
                You can modify the source code in the playground and see changes immediately.
              </p>
              <div className="flex gap-4">
                <Button 
                  variant="primary" 
                  onClick={() => alert('Hello from Star UI!')}
                >
                  Show Alert
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => console.log('Button clicked!')}
                >
                  Log to Console
                </Button>
              </div>
            </div>
          </section>
        </div>

        <footer className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500">
            Built with Star UI • A modern React component library
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;