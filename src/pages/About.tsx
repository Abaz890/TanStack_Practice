import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Users, Target, Lightbulb } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Performance First",
      description: "Every routing decision is optimized for speed and efficiency."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Developer Focused",
      description: "Built by developers, for developers with amazing DX in mind."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: "Innovation",
      description: "Pushing the boundaries of what's possible with React routing."
    }
  ]

  const features = [
    "Type-safe route definitions",
    "Automatic code splitting",
    "Built-in loading states",
    "Search param management",
    "Route loaders and actions",
    "Nested route layouts",
    "File-based routing (optional)",
    "Server-side rendering support"
  ]

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About TanStack Router
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            TanStack Router is a fully type-safe router for React applications. 
            It provides everything you need to build modern, performant web applications 
            with confidence and ease.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                TanStack Router was born from the need for a truly type-safe routing solution 
                that doesn't compromise on performance or developer experience. Traditional 
                routers often leave developers guessing about route parameters and search params.
              </p>
              <p>
                With TanStack Router, every aspect of your routing is type-checked at compile 
                time, ensuring your applications are robust and maintainable. From simple 
                navigation to complex nested layouts with loaders and actions, TanStack Router 
                handles it all with elegance.
              </p>
              <p>
                This demo website showcases the core capabilities including dynamic routing, 
                nested layouts, and seamless navigation between pages - all with full type safety.
              </p>
            </div>
          </div>

          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Key Features</CardTitle>
              <CardDescription>
                Everything you need for modern React routing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide our development philosophy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <Card className="bg-gradient-card border-border/50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Built With Modern Tech</CardTitle>
            <CardDescription>
              This demo uses the latest and greatest technologies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              {['React 18', 'TypeScript', 'TanStack Router', 'Tailwind CSS', 'Vite', 'Radix UI'].map((tech) => (
                <Badge key={tech} variant="secondary" className="px-4 py-2 text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default About