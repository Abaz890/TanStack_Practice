import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Code, Globe, Zap } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Type-Safe Routing",
      description: "Fully type-safe routes with auto-completion and error checking at compile time."
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Developer Experience",
      description: "Built-in devtools, hot reloading, and excellent debugging capabilities."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Modern Features",
      description: "Search params, route loaders, and advanced navigation patterns out of the box."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
              TanStack Router
              <br />
              Demo Website
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Explore the power of modern React routing with TanStack Router.
              Type-safe, performant, and feature-rich routing for your applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                <Link to="/about" className="flex items-center gap-2">
                  Explore Features
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                {/* This link will also go to the 404 page */}
                <Link to="/non-existent-blog-page" className="flex items-center gap-2">
                  Read Blog (Test 404)
                </Link>
              </Button>
              {/* New button to test 404 redirection */}
              <Button variant="outline" size="lg">
                <Link to="/useless-link" className="flex items-center gap-2">
                  Test Random 404
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why TanStack Router?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the next generation of React routing with unmatched type safety and developer experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elegant">
                <CardHeader>
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Modern Routing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Navigate through our demo pages to see TanStack Router in action with dynamic routes,
              nested layouts, and seamless navigation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                <Link to="/services" className="flex items-center gap-2">
                  View Services
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
