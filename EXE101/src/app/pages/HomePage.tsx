import { Link } from 'react-router';
import PublicNav from '../components/PublicNav';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ArrowRight, Star, Sparkles, Clock, Shield } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const featuredProducts = [
  {
    id: 1,
    name: 'Elegant Evening Gown',
    category: 'Formal Dress',
    price: 45,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1761164920960-2d776a18998c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtYWwlMjBkcmVzcyUyMGVsZWdhbnR8ZW58MXx8fHwxNzcyMzkxNzI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true,
  },
  {
    id: 2,
    name: 'Classic Wedding Tuxedo',
    category: 'Wedding Suit',
    price: 65,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1748914451679-4c996574a75f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwc3VpdCUyMHR1eGVkb3xlbnwxfHx8fDE3NzIzOTE3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false,
  },
  {
    id: 3,
    name: 'Party Cocktail Dress',
    category: 'Party Dress',
    price: 35,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1768508950159-e84efeb236a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGRyZXNzJTIwZXZlbmluZ3xlbnwxfHx8fDE3NzIzNDUzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true,
  },
  {
    id: 4,
    name: 'Business Professional Suit',
    category: 'Business Attire',
    price: 50,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1770364019396-36ae51854520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGF0dGlyZXxlbnwxfHx8fDE3NzIzMzc4NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false,
  },
];

const categories = [
  { name: 'Formal Wear', count: 245, color: 'bg-blue-500' },
  { name: 'Casual Outfits', count: 189, color: 'bg-green-500' },
  { name: 'Wedding', count: 156, color: 'bg-purple-500' },
  { name: 'Party Dresses', count: 203, color: 'bg-pink-500' },
  { name: 'Business', count: 178, color: 'bg-orange-500' },
  { name: 'Accessories', count: 312, color: 'bg-yellow-500' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <PublicNav />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-accent text-white">
                <Sparkles className="w-4 h-4 mr-1" />
                New Arrivals Weekly
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Rent Premium Fashion
                <span className="block text-primary">Without Limits</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Access thousands of designer pieces for any occasion. Premium quality, affordable prices, delivered to your door.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Browse Collection
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="lg" variant="outline">
                    Get Started Free
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">5,000+</div>
                  <div className="text-sm text-muted-foreground">Items Available</div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div>
                  <div className="text-3xl font-bold text-primary">4.9</div>
                  <div className="text-sm text-muted-foreground flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                    Average Rating
                  </div>
                </div>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="relative z-10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1749413067325-2730d624c343?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjByZW50YWx8ZW58MXx8fHwxNzcyMzkxNzI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Fashion rental"
                  className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute top-8 right-8 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-8 left-8 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Flexible Duration</h3>
                <p className="text-muted-foreground">
                  Rent for days, weeks, or months. Extend anytime with just a click.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Insured Quality</h3>
                <p className="text-muted-foreground">
                  All items professionally cleaned and insured for your peace of mind.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Free Delivery</h3>
                <p className="text-muted-foreground">
                  Fast and free delivery on orders over $50. Returns included.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
            <p className="text-muted-foreground text-lg">
              Find the perfect outfit for any occasion
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link key={category.name} to="/products">
                <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 ${category.color} rounded-xl mx-auto mb-3`}></div>
                    <h4 className="font-semibold mb-1">{category.name}</h4>
                    <p className="text-sm text-muted-foreground">{category.count} items</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Rentals</h2>
              <p className="text-muted-foreground">Most popular items this week</p>
            </div>
            <Link to="/products">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={`/products/${product.id}`}>
                <Card className="group hover:shadow-xl transition-all hover:-translate-y-1 border-0 shadow-md overflow-hidden">
                  <div className="relative overflow-hidden">
                    {product.featured && (
                      <Badge className="absolute top-3 left-3 z-10 bg-accent text-white">
                        Featured
                      </Badge>
                    )}
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h4>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-primary">
                        ${product.price}
                        <span className="text-sm font-normal text-muted-foreground">/day</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        {product.rating}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Elevate Your Style?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of fashion lovers who trust Rental Hub for their special moments.
          </p>
          <Link to="/register">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Create Free Account
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">About Rental Hub</h4>
              <p className="text-gray-400 text-sm">
                Premium fashion rental platform making designer clothes accessible to everyone.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/products" className="hover:text-white">Browse</Link></li>
                <li><Link to="/login" className="hover:text-white">Sign In</Link></li>
                <li><Link to="/register" className="hover:text-white">Register</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2026 Rental Hub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
