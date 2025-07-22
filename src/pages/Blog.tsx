import { Link } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const Blog = () => {
  const posts = [
    {
      id: 'getting-started-tanstack-router',
      title: 'Getting Started with TanStack Router',
      excerpt: 'Learn the basics of setting up TanStack Router in your React application and understand its core concepts.',
      category: 'Tutorial',
      date: '2024-01-15',
      readTime: '8 min read',
      featured: true
    },
    {
      id: 'type-safe-routing-explained',
      title: 'Type-Safe Routing Explained',
      excerpt: 'Discover how TanStack Router provides complete type safety for your application routes and parameters.',
      category: 'Deep Dive',
      date: '2024-01-10',
      readTime: '12 min read',
      featured: false
    },
    {
      id: 'advanced-routing-patterns',
      title: 'Advanced Routing Patterns',
      excerpt: 'Explore advanced routing patterns including nested routes, route guards, and dynamic route loading.',
      category: 'Advanced',
      date: '2024-01-05',
      readTime: '15 min read',
      featured: true
    },
    {
      id: 'performance-optimization',
      title: 'Performance Optimization Tips',
      excerpt: 'Optimize your TanStack Router application for maximum performance with code splitting and lazy loading.',
      category: 'Performance',
      date: '2024-01-01',
      readTime: '10 min read',
      featured: false
    },
    {
      id: 'migration-guide',
      title: 'Migrating from React Router',
      excerpt: 'Step-by-step guide to migrate your existing React Router application to TanStack Router.',
      category: 'Migration',
      date: '2023-12-28',
      readTime: '20 min read',
      featured: false
    },
    {
      id: 'best-practices',
      title: 'TanStack Router Best Practices',
      excerpt: 'Learn the best practices for structuring your routes and organizing your TanStack Router application.',
      category: 'Best Practices',
      date: '2023-12-25',
      readTime: '14 min read',
      featured: true
    }
  ]

  const categories = ['All', 'Tutorial', 'Deep Dive', 'Advanced', 'Performance', 'Migration', 'Best Practices']

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      'Tutorial': 'bg-green-500/10 text-green-500 border-green-500/20',
      'Deep Dive': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      'Advanced': 'bg-purple-500/10 text-purple-500 border-purple-500/20',
      'Performance': 'bg-orange-500/10 text-orange-500 border-orange-500/20',
      'Migration': 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
      'Best Practices': 'bg-pink-500/10 text-pink-500 border-pink-500/20'
    }
    return colors[category as keyof typeof colors] || 'bg-secondary text-secondary-foreground'
  }

  const featuredPosts = posts.filter(post => post.featured)
  const regularPosts = posts.filter(post => !post.featured)

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Blog & Tutorials
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Learn TanStack Router through comprehensive tutorials, guides, and real-world examples. 
            Click on any post to see our dynamic routing in action!
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Badge 
              key={category}
              variant="outline"
              className="px-4 py-2 cursor-pointer hover:bg-primary/10 transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Featured Posts</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Card 
                  key={post.id}
                  className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elegant group cursor-pointer"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={getCategoryColor(post.category)}>
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="p-0 h-auto hover:bg-transparent group">
                      <Link 
                        to={`/blog/${post.id}`}
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        Read More
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-center">All Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card 
                key={post.id}
                className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elegant group cursor-pointer"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getCategoryColor(post.category)}>
                      {post.category}
                    </Badge>
                    <div className="text-sm text-muted-foreground">
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      {formatDate(post.date)}
                    </div>
                    <Button variant="ghost" className="p-0 h-auto hover:bg-transparent group">
                      <Link 
                        to={`/blog/${post.id}`}
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        Read
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <Card className="bg-gradient-card border-border/50 text-center mt-16">
          <CardHeader>
            <CardTitle className="text-2xl">Stay Updated</CardTitle>
            <CardDescription className="text-lg">
              Get the latest TanStack Router tutorials and best practices delivered to your inbox.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              <Link to="/contact" className="flex items-center gap-2">
                Subscribe to Newsletter
                <ArrowRight size={20} />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Blog