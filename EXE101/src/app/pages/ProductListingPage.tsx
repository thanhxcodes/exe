import { Link } from 'react-router';
import { useState } from 'react';
import PublicNav from '../components/PublicNav';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Checkbox } from '../components/ui/checkbox';
import { Slider } from '../components/ui/slider';
import { Star, SlidersHorizontal } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const products = [
  { id: 1, name: 'Elegant Evening Gown', category: 'Formal Dress', price: 45, rating: 4.9, image: 'https://images.unsplash.com/photo-1761164920960-2d776a18998c?w=400' },
  { id: 2, name: 'Classic Wedding Tuxedo', category: 'Wedding Suit', price: 65, rating: 5.0, image: 'https://images.unsplash.com/photo-1748914451679-4c996574a75f?w=400' },
  { id: 3, name: 'Party Cocktail Dress', category: 'Party Dress', price: 35, rating: 4.8, image: 'https://images.unsplash.com/photo-1768508950159-e84efeb236a8?w=400' },
  { id: 4, name: 'Business Professional Suit', category: 'Business Attire', price: 50, rating: 4.7, image: 'https://images.unsplash.com/photo-1770364019396-36ae51854520?w=400' },
  { id: 5, name: 'Casual Summer Outfit', category: 'Casual', price: 25, rating: 4.6, image: 'https://images.unsplash.com/photo-1736555142217-916540c7f1b7?w=400' },
  { id: 6, name: 'Designer Party Dress', category: 'Party Dress', price: 55, rating: 4.9, image: 'https://images.unsplash.com/photo-1768508950159-e84efeb236a8?w=400' },
];

const categories = ['Formal Dress', 'Wedding Suit', 'Party Dress', 'Business Attire', 'Casual', 'Accessories'];
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export default function ProductListingPage() {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <PublicNav />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Browse Rentals</h1>
          <p className="text-muted-foreground">Discover thousands of premium fashion items</p>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 space-y-6">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <SlidersHorizontal className="w-5 h-5 mr-2" />
                  Filters
                </h3>
                
                {/* Categories */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center">
                        <Checkbox id={category} />
                        <label htmlFor={category} className="ml-2 text-sm cursor-pointer">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Price Range</h4>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={100}
                    step={5}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Sizes */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Size</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {sizes.map((size) => (
                      <Button key={size} variant="outline" size="sm" className="h-10">
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Rating</h4>
                  <div className="space-y-2">
                    {[5, 4, 3].map((rating) => (
                      <div key={rating} className="flex items-center">
                        <Checkbox id={`rating-${rating}`} />
                        <label htmlFor={`rating-${rating}`} className="ml-2 text-sm cursor-pointer flex items-center">
                          {rating}
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 ml-1" />
                          & up
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </CardContent>
            </Card>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-4">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="w-full"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Sort & Results Count */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">Showing {products.length} results</p>
              <select className="px-4 py-2 border border-border rounded-lg bg-white">
                <option>Most Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Highest Rated</option>
              </select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link key={product.id} to={`/products/${product.id}`}>
                  <Card className="group hover:shadow-xl transition-all hover:-translate-y-1 border-0 shadow-md overflow-hidden h-full">
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-3 right-3 bg-white text-foreground">
                        Available
                      </Badge>
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
                      <Button className="w-full mt-3" size="sm">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12 gap-2">
              <Button variant="outline">Previous</Button>
              <Button variant="outline">1</Button>
              <Button>2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
