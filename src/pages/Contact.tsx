import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      value: "hello@tanstackdemo.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Office",
      value: "123 Tech Street, San Francisco, CA",
      description: "Come say hello at our HQ"
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Response Time",
      value: "Within 24 hours",
      description: "We'll get back to you quickly"
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you for your message! This is a demo form.')
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about TanStack Router? Want to discuss a project? 
            We'd love to hear from you. This contact form demonstrates form handling with TanStack Router.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground mb-6">
                  Reach out through any of these channels. We're here to help!
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="text-primary font-medium mb-1">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    Quick Response
                  </CardTitle>
                  <CardDescription>
                    Need immediate help? Check out our resources
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Badge variant="outline" className="w-full justify-start p-3 hover:bg-primary/10 transition-colors cursor-pointer">
                      📚 Documentation
                    </Badge>
                    <Badge variant="outline" className="w-full justify-start p-3 hover:bg-primary/10 transition-colors cursor-pointer">
                      💬 Community Discord
                    </Badge>
                    <Badge variant="outline" className="w-full justify-start p-3 hover:bg-primary/10 transition-colors cursor-pointer">
                      🐛 GitHub Issues
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription className="text-lg">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        required 
                        className="bg-background/50 border-border focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        required 
                        className="bg-background/50 border-border focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john.doe@example.com" 
                      required 
                      className="bg-background/50 border-border focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company / Organization</Label>
                    <Input 
                      id="company" 
                      placeholder="Acme Corporation" 
                      className="bg-background/50 border-border focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input 
                      id="subject" 
                      placeholder="TanStack Router Implementation Question" 
                      required 
                      className="bg-background/50 border-border focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project, questions, or how we can help..."
                      required
                      className="min-h-[120px] bg-background/50 border-border focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-4 pt-4">
                    <Button type="submit" size="lg" className="bg-gradient-primary hover:opacity-90 flex-1 sm:flex-none">
                      <Send size={20} className="mr-2" />
                      Send Message
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Demo Note */}
            <Card className="bg-secondary/20 border-secondary/50 mt-6">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Demo Notice</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      This is a demonstration contact form showcasing TanStack Router's form handling capabilities. 
                      In a real application, this would integrate with your backend API or email service.
                      The form validation and submission logic can be enhanced with libraries like React Hook Form and Zod.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact