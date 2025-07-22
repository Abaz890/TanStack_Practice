import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Code2, Database, Globe, Smartphone, Shield, Zap } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Web Development",
      description: "Full-stack web applications built with modern React and TanStack Router for seamless navigation.",
      features: ["React 18", "TypeScript", "TanStack Router", "Responsive Design"],
      price: "From $2,500",
      popular: false
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Mobile-First Design",
      description: "Responsive applications that work perfectly across all devices with optimized routing.",
      features: ["Mobile Optimization", "Progressive Web App", "Offline Support", "Touch Gestures"],
      price: "From $3,500",
      popular: true
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Backend Integration",
      description: "Seamless API integration with modern backend services and real-time data synchronization.",
      features: ["REST APIs", "GraphQL", "Real-time Updates", "Database Design"],
      price: "From $4,000",
      popular: false
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Security & Performance",
      description: "Enterprise-grade security measures and performance optimization for your applications.",
      features: ["Authentication", "Authorization", "Performance Audit", "Security Testing"],
      price: "From $1,500",
      popular: false
    },
    {
      icon: <Code2 className="h-8 w-8 text-primary" />,
      title: "Code Consulting",
      description: "Expert guidance on implementing TanStack Router and modern React patterns in your projects.",
      features: ["Code Review", "Architecture Planning", "Best Practices", "Team Training"],
      price: "From $200/hr",
      popular: false
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Performance Optimization",
      description: "Speed up your existing applications with advanced optimization techniques and routing strategies.",
      features: ["Bundle Analysis", "Route Splitting", "Lazy Loading", "Caching Strategies"],
      price: "From $2,000",
      popular: false
    }
  ]

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide comprehensive development services 
            using TanStack Router and modern React technologies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elegant relative ${
                service.popular ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Starting at</div>
                    <div className="text-lg font-bold text-primary">{service.price}</div>
                  </div>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Includes:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className={`w-full ${
                      service.popular 
                        ? 'bg-gradient-primary hover:opacity-90' 
                        : 'bg-secondary hover:bg-secondary/80'
                    }`}
                  >
                    <Link to="/contact" className="flex items-center gap-2 w-full justify-center">
                      Get Started
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-card border-border/50 text-center">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">Need Something Custom?</CardTitle>
            <CardDescription className="text-lg">
              Every project is unique. Let's discuss your specific requirements and create a tailored solution.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                <Link to="/contact" className="flex items-center gap-2">
                  Schedule Consultation
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/blog">
                  View Case Studies
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Services