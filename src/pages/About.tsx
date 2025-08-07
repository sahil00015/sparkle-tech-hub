import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Award, 
  Users, 
  Globe, 
  Heart,
  CheckCircle,
  Zap,
  Shield,
  Star
} from "lucide-react";

const About = () => {
  const stats = [
    { label: "Happy Customers", value: "50,000+", icon: Users },
    { label: "Products Sold", value: "200,000+", icon: Award },
    { label: "Countries Served", value: "25+", icon: Globe },
    { label: "Customer Satisfaction", value: "99%", icon: Heart },
  ];

  const values = [
    {
      icon: CheckCircle,
      title: "Quality First",
      description: "We source only the highest quality electronics from trusted manufacturers worldwide."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Staying ahead of the curve with the latest technology trends and cutting-edge products."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Your security is our priority. All transactions are encrypted and your data is protected."
    },
    {
      icon: Star,
      title: "Customer Excellence",
      description: "24/7 support and 2-year warranty on all products because your satisfaction matters."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            About TechHub
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up">
            Since 2015, we've been your trusted partner in bringing the latest technology 
            to your doorstep. From premium laptops to cutting-edge smartphones, we curate 
            the best electronics for tech enthusiasts and professionals alike.
          </p>
          <Button size="lg" className="animate-scale-in">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label} 
                className="text-center p-6 border-0 shadow-[--card-shadow] hover:shadow-[--card-shadow-hover] transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Our Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <h3 className="text-2xl font-semibold mb-4">Founded on Innovation</h3>
                <p className="text-muted-foreground mb-6">
                  TechHub was born from a simple idea: make premium technology accessible 
                  to everyone. Our founders, both technology enthusiasts, noticed the gap 
                  between complex tech specifications and what customers actually needed.
                </p>
                <p className="text-muted-foreground">
                  Today, we've grown into a trusted retailer serving customers in over 25 
                  countries, but our mission remains the same: to simplify your tech 
                  purchasing experience while offering the best products at competitive prices.
                </p>
              </div>
              <div className="animate-scale-in">
                <Card className="p-8 text-center border-0 shadow-[--card-shadow-hover]">
                  <CardContent className="p-0">
                    <div className="text-6xl mb-4">🚀</div>
                    <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
                    <p className="text-muted-foreground">
                      To democratize access to premium technology and empower everyone 
                      to achieve more through innovative electronics.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="p-6 text-center border-0 shadow-[--card-shadow] hover:shadow-[--card-shadow-hover] transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of satisfied customers who trust TechHub for their technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/">Shop Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;