import { Link, useParams } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react'

const BlogPost = () => {
  const { postId } = useParams({ from: '/blog/$postId' })

  // Mock blog posts data
  const posts = {
    'getting-started-tanstack-router': {
      title: 'Getting Started with TanStack Router',
      category: 'Tutorial',
      date: '2024-01-15',
      readTime: '8 min read',
      content: `
# Getting Started with TanStack Router

TanStack Router is a fully type-safe router for React applications that provides an excellent developer experience while maintaining top-notch performance.

## Why TanStack Router?

Traditional routing solutions often lack proper type safety, leading to runtime errors and difficult debugging experiences. TanStack Router addresses these issues by providing:

- **Complete Type Safety**: Every route, parameter, and search param is fully typed
- **Excellent Performance**: Built-in code splitting and lazy loading
- **Developer Experience**: Amazing devtools and debugging capabilities
- **Modern Features**: Search params, loaders, and much more

## Installation

First, install TanStack Router in your React project:

\`\`\`bash
npm install @tanstack/react-router
npm install @tanstack/router-devtools
\`\`\`

## Basic Setup

Create a simple router configuration:

\`\`\`typescript
import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router'

const rootRoute = createRootRoute({
  component: () => <Outlet />
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <div>Home Page</div>
})

const routeTree = rootRoute.addChildren([indexRoute])
const router = createRouter({ routeTree })
\`\`\`

This is exactly what we've implemented in this demo! Navigate around to see the routing in action.

## Next Steps

- Explore our [Services](/services) page to see more complex routing
- Check out the [Contact](/contact) form with form handling
- Browse more [Blog](/blog) posts to see dynamic routing

The beauty of TanStack Router is that every navigation is type-safe and performant.
      `
    },
    'type-safe-routing-explained': {
      title: 'Type-Safe Routing Explained',
      category: 'Deep Dive',
      date: '2024-01-10',
      readTime: '12 min read',
      content: `
# Type-Safe Routing Explained

One of the most powerful features of TanStack Router is its complete type safety. Let's explore what this means and why it matters.

## The Problem with Traditional Routers

Traditional routing solutions suffer from several type safety issues:

- Route parameters are often strings without validation
- Search params lack type definitions
- Navigation links can break without compile-time warnings
- Route guards and loaders aren't type-safe

## TanStack Router's Solution

TanStack Router provides compile-time type checking for:

### Route Parameters
\`\`\`typescript
const userRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/users/$userId',
  component: UserProfile,
})

// TypeScript knows userId is a string!
function UserProfile() {
  const { userId } = useParams({ from: '/users/$userId' })
  // userId is properly typed
}
\`\`\`

### Search Parameters
\`\`\`typescript
const searchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/search',
  validateSearch: (search) => ({
    query: search.query as string,
    page: Number(search.page) || 1,
  }),
  component: SearchResults,
})
\`\`\`

### Navigation
\`\`\`typescript
// This navigation is fully type-checked!
              <Link to="/about">
  View User
</Link>
\`\`\`

## Benefits in Practice

This demo website showcases these benefits:
- Every navigation link is type-safe
- Route parameters like this blog post ID are validated
- Search params are properly typed
- No runtime routing errors

## Real-World Impact

Type-safe routing means:
- Fewer bugs in production
- Better developer experience
- Easier refactoring
- Confident navigation throughout your app

Try navigating around this demo to experience type-safe routing in action!
      `
    },
    'advanced-routing-patterns': {
      title: 'Advanced Routing Patterns',
      category: 'Advanced',
      date: '2024-01-05',
      readTime: '15 min read',
      content: `
# Advanced Routing Patterns

TanStack Router supports sophisticated routing patterns that enable complex application architectures while maintaining simplicity and type safety.

## Nested Routes and Layouts

One of the most powerful features is nested routing with shared layouts:

\`\`\`typescript
const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: DashboardLayout,
})

const dashboardIndexRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: '/',
  component: DashboardHome,
})

const dashboardSettingsRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: '/settings',
  component: DashboardSettings,
})
\`\`\`

## Route Loaders

Preload data before rendering components:

\`\`\`typescript
const userRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/users/$userId',
  loader: async ({ params }) => {
    const user = await fetchUser(params.userId)
    return { user }
  },
  component: UserProfile,
})
\`\`\`

## Search Param Management

Handle complex search parameters with validation:

\`\`\`typescript
const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/products',
  validateSearch: (search) => ({
    category: search.category as string,
    minPrice: Number(search.minPrice) || 0,
    maxPrice: Number(search.maxPrice) || 1000,
    sortBy: (search.sortBy as 'name' | 'price') || 'name',
  }),
  component: ProductList,
})
\`\`\`

## Route Guards

Implement authentication and authorization:

\`\`\`typescript
const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin',
  beforeLoad: ({ context }) => {
    if (!context.user?.isAdmin) {
      throw redirect({ to: '/login' })
    }
  },
  component: AdminDashboard,
})
\`\`\`

## This Demo's Implementation

This website demonstrates several advanced patterns:

1. **Nested Layouts**: The navigation and footer are shared across all pages
2. **Dynamic Routes**: This blog post uses the \`$postId\` parameter
3. **Type-Safe Navigation**: All links are fully typed
4. **Responsive Routing**: The mobile menu adapts to the current route

## Error Boundaries

Handle routing errors gracefully:

\`\`\`typescript
const rootRoute = createRootRoute({
  component: RootComponent,
  errorComponent: ({ error }) => (
    <div>Something went wrong: {error.message}</div>
  ),
})
\`\`\`

## Code Splitting

Automatically split your routes for better performance:

\`\`\`typescript
const lazyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/lazy',
  component: lazy(() => import('./LazyComponent')),
})
\`\`\`

These patterns enable building sophisticated applications while maintaining excellent developer experience and runtime performance.
      `
    },
    'performance-optimization': {
      title: 'Performance Optimization Tips',
      category: 'Performance',
      date: '2024-01-01',
      readTime: '10 min read',
      content: `
# Performance Optimization Tips

TanStack Router is built with performance in mind, but there are several strategies you can employ to maximize your application's speed and efficiency.

## Automatic Code Splitting

TanStack Router automatically splits your routes, but you can optimize further:

\`\`\`typescript
// Lazy load heavy components
const HeavyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/heavy',
  component: lazy(() => import('./HeavyComponent')),
})
\`\`\`

## Route Preloading

Preload routes that users are likely to visit:

\`\`\`typescript
// Preload on hover
<Link 
  to="/dashboard" 
  preload="intent" // Preload when user hovers
>
  Dashboard
</Link>

// Always preload
<Link 
  to="/critical-page" 
  preload={true}
>
  Critical Page
</Link>
\`\`\`

## Loader Optimization

Optimize your route loaders for better performance:

\`\`\`typescript
const optimizedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/optimized',
  loader: async ({ params, signal }) => {
    // Use AbortSignal for cleanup
    const data = await fetch(\`/api/data/\${params.id}\`, { signal })
    return data.json()
  },
  // Cache the loader result
  staleTime: 5 * 60 * 1000, // 5 minutes
})
\`\`\`

## Search Param Optimization

Efficiently handle search parameters:

\`\`\`typescript
const searchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/search',
  validateSearch: (search) => {
    // Only parse what you need
    return {
      q: search.q as string,
      page: Math.max(1, Number(search.page) || 1),
    }
  },
})
\`\`\`

## Memory Management

Prevent memory leaks in your routes:

\`\`\`typescript
function MyComponent() {
  const { signal } = useLoader()
  
  useEffect(() => {
    const controller = new AbortController()
    
    // Use the controller signal
    fetchData(controller.signal)
    
    return () => controller.abort()
  }, [])
}
\`\`\`

## Bundle Analysis

This demo is optimized using these techniques:

1. **Lazy Loading**: Non-critical routes are loaded on demand
2. **Smart Preloading**: Routes are preloaded based on user intent
3. **Efficient Rendering**: Components re-render only when necessary
4. **Minimal JavaScript**: Only essential code is loaded initially

## Measuring Performance

Use the built-in devtools to monitor:
- Route loading times
- Bundle sizes
- Re-render frequency
- Memory usage

## Best Practices

1. **Keep loaders fast**: Minimize data fetching time
2. **Use proper caching**: Cache expensive operations
3. **Optimize components**: Use React.memo and useMemo wisely
4. **Monitor bundle size**: Keep route chunks small
5. **Leverage browser caching**: Use proper cache headers

## Real-World Results

Applications using these optimization techniques typically see:
- 40-60% faster initial load times
- 30-50% smaller bundle sizes
- Improved user experience scores
- Better SEO performance

Try navigating around this demo to experience the performance benefits firsthand!
      `
    },
    'migration-guide': {
      title: 'Migrating from React Router',
      category: 'Migration',
      date: '2023-12-28',
      readTime: '20 min read',
      content: `
# Migrating from React Router

Migrating from React Router to TanStack Router brings significant benefits in type safety and developer experience. This guide covers the migration process step by step.

## Key Differences

### Route Definition
**React Router:**
\`\`\`jsx
<Routes>
  <Route path="/users/:id" element={<UserProfile />} />
</Routes>
\`\`\`

**TanStack Router:**
\`\`\`typescript
const userRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/users/$id',
  component: UserProfile,
})
\`\`\`

### Navigation
**React Router:**
\`\`\`jsx
<Link to="/users/123">User Profile</Link>
const navigate = useNavigate()
navigate('/users/123')
\`\`\`

**TanStack Router:**
\`\`\`typescript
<Link to="/users/$id" params={{ id: "123" }}>User Profile</Link>
const navigate = useNavigate()
navigate({ to: '/users/$id', params: { id: '123' } })
\`\`\`

## Migration Steps

### Step 1: Install TanStack Router
\`\`\`bash
npm uninstall react-router-dom
npm install @tanstack/react-router @tanstack/router-devtools
\`\`\`

### Step 2: Create Route Definitions
Convert your existing routes:

\`\`\`typescript
// Before (React Router)
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

// After (TanStack Router)
const rootRoute = createRootRoute({
  component: () => <Outlet />
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

const userRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/users/$id',
  component: UserProfile,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  userRoute,
])

const router = createRouter({ routeTree })
\`\`\`

### Step 3: Update Parameter Access
\`\`\`typescript
// Before (React Router)
function UserProfile() {
  const { id } = useParams()
  // id could be undefined
}

// After (TanStack Router)
function UserProfile() {
  const { id } = useParams({ from: '/users/$id' })
  // id is guaranteed to be a string
}
\`\`\`

### Step 4: Update Navigation
\`\`\`typescript
// Before (React Router)
<Link to={\`/users/${userId}\`}>User</Link>

// After (TanStack Router)
<Link to="/users/$id" params={{ id: userId }}>User</Link>
\`\`\`

### Step 5: Handle Search Parameters
\`\`\`typescript
// Before (React Router)
const [searchParams] = useSearchParams()
const query = searchParams.get('q') // string | null

// After (TanStack Router)
const route = createRoute({
  path: '/search',
  validateSearch: (search) => ({
    q: search.q as string,
    page: Number(search.page) || 1,
  }),
})

function SearchComponent() {
  const { q, page } = useSearch({ from: '/search' })
  // q and page are properly typed
}
\`\`\`

## Common Patterns Migration

### Protected Routes
\`\`\`typescript
// Before (React Router)
function ProtectedRoute({ children }) {
  const user = useAuth()
  return user ? children : <Navigate to="/login" />
}

// After (TanStack Router)
const protectedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/protected',
  beforeLoad: ({ context }) => {
    if (!context.user) {
      throw redirect({ to: '/login' })
    }
  },
  component: ProtectedComponent,
})
\`\`\`

### Nested Routes
\`\`\`typescript
// Before (React Router)
<Routes>
  <Route path="/dashboard" element={<DashboardLayout />}>
    <Route index element={<DashboardHome />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes>

// After (TanStack Router)
const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: DashboardLayout,
})

const dashboardIndexRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: '/',
  component: DashboardHome,
})

const settingsRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: '/settings',
  component: Settings,
})
\`\`\`

## Migration Benefits

After migration, you'll gain:

1. **Full Type Safety**: All routes, params, and search params are typed
2. **Better DX**: Excellent autocomplete and error checking
3. **Performance**: Built-in code splitting and optimization
4. **Modern Features**: Loaders, search param validation, and more

## This Demo's Migration

This demo website was designed from scratch with TanStack Router, showcasing:
- Type-safe navigation between all pages
- Dynamic route parameters (like this blog post)
- Responsive routing with mobile considerations
- Modern performance optimizations

The migration process typically takes 1-2 days for a medium-sized application and provides immediate benefits in terms of type safety and developer experience.
      `
    },
    'best-practices': {
      title: 'TanStack Router Best Practices',
      category: 'Best Practices',
      date: '2023-12-25',
      readTime: '14 min read',
      content: `
# TanStack Router Best Practices

After building numerous applications with TanStack Router, here are the best practices that lead to maintainable, performant, and scalable routing architectures.

## Project Structure

### Recommended File Organization
\`\`\`
src/
├── routes/
│   ├── index.tsx           # Home route
│   ├── about.tsx          # About route
│   ├── users/
│   │   ├── index.tsx      # Users list
│   │   └── $id.tsx        # User profile
│   └── blog/
│       ├── index.tsx      # Blog list
│       └── $postId.tsx    # Blog post
├── router.tsx             # Router configuration
└── main.tsx              # App entry point
\`\`\`

### Route Organization
\`\`\`typescript
// Group related routes
const userRoutes = [
  usersIndexRoute,
  userProfileRoute,
  userSettingsRoute,
]

const blogRoutes = [
  blogIndexRoute,
  blogPostRoute,
  blogCategoryRoute,
]

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  ...userRoutes,
  ...blogRoutes,
])
\`\`\`

## Type Safety Best Practices

### Always Use Proper Types
\`\`\`typescript
// Good: Specific parameter types
const userRoute = createRoute({
  path: '/users/$userId',
  validateSearch: (search) => ({
    tab: (search.tab as 'profile' | 'settings') || 'profile',
    sort: (search.sort as 'name' | 'date') || 'name',
  }),
})

// Bad: Any or unknown types
const badRoute = createRoute({
  path: '/users/$userId',
  validateSearch: (search) => search as any,
})
\`\`\`

### Use Context for Shared Data
\`\`\`typescript
interface AppContext {
  user: User | null
  theme: 'light' | 'dark'
}

const router = createRouter({
  routeTree,
  context: {
    user: null,
    theme: 'dark',
  } as AppContext,
})
\`\`\`

## Performance Best Practices

### Smart Code Splitting
\`\`\`typescript
// Split heavy components
const heavyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/heavy',
  component: lazy(() => import('./HeavyComponent')),
})

// Keep critical routes in main bundle
const criticalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/critical',
  component: CriticalComponent, // Not lazy
})
\`\`\`

### Efficient Loaders
\`\`\`typescript
// Good: Efficient data fetching
const userRoute = createRoute({
  path: '/users/$userId',
  loader: async ({ params, signal }) => {
    // Parallel requests
    const [user, posts] = await Promise.all([
      fetchUser(params.userId, { signal }),
      fetchUserPosts(params.userId, { signal }),
    ])
    return { user, posts }
  },
})

// Bad: Sequential requests
const badUserRoute = createRoute({
  path: '/users/$userId',
  loader: async ({ params }) => {
    const user = await fetchUser(params.userId)
    const posts = await fetchUserPosts(params.userId) // Waits for user
    return { user, posts }
  },
})
\`\`\`

### Preloading Strategy
\`\`\`typescript
// Preload critical routes
<Link to="/dashboard" preload={true}>
  Dashboard
</Link>

// Preload on intent for secondary routes
<Link to="/profile" preload="intent">
  Profile
</Link>

// No preload for rare routes
<Link to="/admin" preload={false}>
  Admin
</Link>
\`\`\`

## Error Handling

### Route-Level Error Boundaries
\`\`\`typescript
const userRoute = createRoute({
  path: '/users/$userId',
  loader: async ({ params }) => {
    const user = await fetchUser(params.userId)
    if (!user) {
      throw notFound()
    }
    return { user }
  },
  errorComponent: ({ error }) => (
    <div>
      <h1>User Not Found</h1>
      <p>{error.message}</p>
      <Link to="/users">Back to Users</Link>
    </div>
  ),
})
\`\`\`

### Global Error Handling
\`\`\`typescript
const rootRoute = createRootRoute({
  component: RootComponent,
  errorComponent: ({ error, reset }) => (
    <div>
      <h1>Something went wrong</h1>
      <pre>{error.message}</pre>
      <button onClick={reset}>Try Again</button>
    </div>
  ),
})
\`\`\`

## Search Parameter Management

### Validate and Type Search Params
\`\`\`typescript
const searchRoute = createRoute({
  path: '/search',
  validateSearch: (search) => {
    return {
      query: search.query as string,
      category: search.category as string | undefined,
      page: Math.max(1, Number(search.page) || 1),
      limit: Math.min(100, Math.max(10, Number(search.limit) || 20)),
    }
  },
})
\`\`\`

### URL State Management
\`\`\`typescript
// Good: Keep URL as single source of truth
function SearchFilters() {
  const navigate = useNavigate()
  const { category, page } = useSearch({ from: '/search' })
  
  const updateCategory = (newCategory: string) => {
    navigate({
      search: (prev) => ({ ...prev, category: newCategory, page: 1 })
    })
  }
}

// Bad: Duplicate state in components
function BadSearchFilters() {
  const [category, setCategory] = useState('')
  const [page, setPage] = useState(1)
  // State can get out of sync with URL
}
\`\`\`

## Route Guards and Authentication

### Flexible Authentication
\`\`\`typescript
const authenticatedRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'authenticated',
  beforeLoad: ({ context }) => {
    if (!context.user) {
      throw redirect({
        to: '/login',
        search: { redirect: window.location.pathname },
      })
    }
  },
})

// Child routes inherit authentication
const profileRoute = createRoute({
  getParentRoute: () => authenticatedRoute,
  path: '/profile',
  component: Profile,
})
\`\`\`

## Testing Best Practices

### Test Route Behavior
\`\`\`typescript
// Test route rendering
test('user profile route renders correctly', async () => {
  const router = createMemoryRouter({
    routes: [userRoute],
    initialEntries: ['/users/123'],
  })
  
  render(<RouterProvider router={router} />)
  
  await waitFor(() => {
    expect(screen.getByText('User Profile')).toBeInTheDocument()
  })
})

// Test route parameters
test('blog post route receives correct parameters', async () => {
  const router = createMemoryRouter({
    routes: [blogPostRoute],
    initialEntries: ['/blog/my-post'],
  })
  
  render(<RouterProvider router={router} />)
  
  await waitFor(() => {
    expect(screen.getByText('my-post')).toBeInTheDocument()
  })
})
\`\`\`

## This Demo's Implementation

This website follows these best practices:

1. **Clean Structure**: Routes are organized logically
2. **Type Safety**: All navigation is fully typed
3. **Performance**: Efficient loading and minimal re-renders
4. **Error Handling**: Graceful error boundaries
5. **Mobile First**: Responsive routing patterns

## Common Pitfalls to Avoid

1. **Over-preloading**: Don't preload every route
2. **Heavy loaders**: Keep route loaders fast and focused
3. **State duplication**: Use URL as single source of truth
4. **Missing error boundaries**: Always handle potential errors
5. **Poor type definitions**: Invest in proper typing upfront

Following these practices leads to applications that are maintainable, performant, and provide excellent user experiences.
      `
    }
  }

  const post = posts[postId as keyof typeof posts]

  if (!post) {
    return (
      <div className="min-h-screen py-20 px-6 flex items-center justify-center">
        <Card className="bg-gradient-card border-border/50 text-center max-w-md">
          <CardContent className="pt-6">
            <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The blog post you're looking for doesn't exist or has been moved.
            </p>
            <Button>
              <Link to="/blog" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Back to Blog
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

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

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" className="p-0 hover:bg-transparent">
            <Link to="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft size={20} />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <article className="mb-12">
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
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
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-between pt-6 border-t border-border">
              <div className="text-muted-foreground">
                This post demonstrates TanStack Router's dynamic routing with the parameter: <code className="bg-muted px-2 py-1 rounded text-primary font-mono">{postId}</code>
              </div>
              <Button variant="outline" size="sm">
                <Share2 size={16} className="mr-2" />
                Share
              </Button>
            </div>
          </header>

          {/* Article Content */}
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="pt-8">
              <div className="prose prose-invert max-w-none">
                <div 
                  className="text-foreground leading-relaxed whitespace-pre-wrap"
                  style={{ 
                    lineHeight: '1.7',
                    fontSize: '1.1rem'
                  }}
                >
                  {post.content}
                </div>
              </div>
            </CardContent>
          </Card>
        </article>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between pt-8 border-t border-border">
          <Button variant="outline">
            <Link to="/blog" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              All Posts
            </Link>
          </Button>
          <div className="flex gap-2">
            <Button variant="outline">
              <Link to="/about">
                About TanStack Router
              </Link>
            </Button>
            <Button className="bg-gradient-primary hover:opacity-90">
              <Link to="/contact" className="flex items-center gap-2">
                Get in Touch
                <Share2 size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
