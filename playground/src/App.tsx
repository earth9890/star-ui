import { useState } from 'react';
import { 
  Button, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
  Badge,
  ThemeToggle,
  ThemeProvider 
} from '../../src/index';

function PlaygroundContent() {
  const [loading, setLoading] = useState(false);

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-background to-secondary-50 dark:from-dark-background dark:via-dark-background-secondary dark:to-dark-background-tertiary transition-colors duration-500">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.primary.DEFAULT/0.15)_1px,transparent_0)] [background-size:50px_50px]" />
      
      <div className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <h1 className="text-5xl font-bold gradient-text">
                Star UI Lib 2.0
              </h1>
              <ThemeToggle className="float" />
            </div>
            <p className="text-xl text-foreground-secondary mb-6">
              🌟 The Future of React Components - Modern, Animated, Revolutionary
            </p>
            <div className="flex justify-center gap-3">
              <Badge variant="cosmic" pulse>✨ Glassmorphism</Badge>
              <Badge variant="gradient">🎨 Gradients</Badge>
              <Badge variant="gradient">🔮 Animations</Badge>
            </div>
          </header>

          <div className="grid gap-8">
            {/* Revolutionary Buttons */}
            <Card variant="gradient" hover glow className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">🚀 Revolutionary Buttons</CardTitle>
                <CardDescription>Next-generation button components with modern effects</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Gradient Variants */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Gradient Magic</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="primary" glow>Primary Glow</Button>
                    <Button variant="cosmic" float>Cosmic Float</Button>
                    <Button variant="gradient" shimmer>Animated Gradient</Button>
                    <Button variant="sunset">Sunset Vibes</Button>
                    <Button variant="ocean">Ocean Depths</Button>
                  </div>
                </div>

                {/* Glass & Effects */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Glass & Effects</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="gradient">Gradient Magic</Button>
                    <Button variant="outline" glow>Outline Glow</Button>
                    <Button variant="ghost" shimmer>Ghost Shimmer</Button>
                    <Button variant="destructive" float>Floating Danger</Button>
                  </div>
                </div>

                {/* Interactive States */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Interactive Magic</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      variant="cosmic" 
                      loading={loading} 
                      onClick={handleLoadingDemo}
                      leftIcon="🚀"
                    >
                      {loading ? 'Launching...' : 'Launch Rocket'}
                    </Button>
                    <Button variant="gradient" rightIcon="✨" shimmer>
                      Create Magic
                    </Button>
                    <Button variant="cosmic" leftIcon="🔮" glow>
                      Crystal Ball
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Modern Cards Showcase */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card variant="elevated" hover float>
                <CardHeader>
                  <CardTitle>✨ Elevated Card</CardTitle>
                  <CardDescription>Beautiful elevation and shadow effects</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground-secondary">
                    This card uses modern elevation and shadow effects for a clean, floating appearance.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="primary" size="sm">Explore</Button>
                  <Badge variant="primary">New</Badge>
                </CardFooter>
              </Card>

              <Card variant="cosmic" hover glow>
                <CardHeader>
                  <CardTitle>🌌 Cosmic Card</CardTitle>
                  <CardDescription>Deep space vibes</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">
                    Experience the cosmos with animated gradients and ethereal glow effects.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="gradient" size="sm">Launch</Button>
                  <Badge variant="cosmic" pulse>Cosmic</Badge>
                </CardFooter>
              </Card>

              <Card variant="gradient" hover>
                <CardHeader>
                  <CardTitle>🎨 Gradient Card</CardTitle>
                  <CardDescription>Smooth color transitions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground-secondary">
                    Subtle gradients that adapt beautifully to both light and dark themes.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="primary" size="sm">Design</Button>
                  <Badge variant="gradient">Gradient</Badge>
                </CardFooter>
              </Card>
            </div>

            {/* Badge Gallery */}
            <Card variant="elevated" hover>
              <CardHeader>
                <CardTitle className="gradient-text">🏷️ Modern Badges</CardTitle>
                <CardDescription>Eye-catching status indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Gradient Collection</h3>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="primary">Primary</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="danger">Danger</Badge>
                    <Badge variant="gradient">Animated</Badge>
                    <Badge variant="cosmic" pulse>Cosmic</Badge>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Special Effects</h3>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="gradient">Gradient Effect</Badge>
                    <Badge variant="primary" glow>Glowing</Badge>
                    <Badge variant="cosmic" dot>With Dot</Badge>
                    <Badge variant="gradient" pulse>Pulsing</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interactive Demo */}
            <Card variant="gradient" hover className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl gradient-text">🎮 Interactive Playground</CardTitle>
                <CardDescription className="text-lg">
                  Experience the magic - hover, click, and explore!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">🎯 Click Effects</h3>
                    <div className="space-y-3">
                      <Button 
                        variant="cosmic" 
                        onClick={() => alert('🌟 Cosmic power activated!')}
                        className="w-full"
                        glow
                      >
                        Cosmic Alert
                      </Button>
                      <Button 
                        variant="gradient" 
                        onClick={() => console.log('🚀 Gradient logged!')}
                        className="w-full"
                        shimmer
                      >
                        Console Magic
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold">✨ Hover Magic</h3>
                    <div className="space-y-3">
                      <Button variant="ocean" className="w-full" float>
                        Floating Ocean
                      </Button>
                      <Button variant="sunset" className="w-full" glow>
                        Sunset Glow
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <footer className="text-center mt-16 pt-8">
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-dark-background-secondary dark:to-dark-background-tertiary rounded-2xl p-6 inline-block shadow-xl">
              <p className="text-foreground-secondary text-lg">
                ✨ Built with <span className="gradient-text font-semibold">Star UI Lib 2.0</span> • The Future is Here
              </p>
              <div className="flex justify-center gap-2 mt-4">
                <Badge variant="cosmic">Modern</Badge>
                <Badge variant="gradient">Innovative</Badge>
                <Badge variant="gradient">Beautiful</Badge>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <PlaygroundContent />
    </ThemeProvider>
  );
}

export default App;