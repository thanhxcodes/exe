import { useState } from 'react';
import { Link } from 'react-router';
import PublicNav from '../components/PublicNav';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Calendar } from '../components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';
import { Star, Heart, Share2, CalendarIcon, ShieldCheck, Truck, RotateCcw, Ruler } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';

export default function ProductDetailPage() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [duration, setDuration] = useState(3);
  const [selectedSize, setSelectedSize] = useState('M');

  const images = [
    'https://images.unsplash.com/photo-1761164920960-2d776a18998c?w=800',
    'https://images.unsplash.com/photo-1768508950159-e84efeb236a8?w=800',
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <div className="min-h-screen bg-background">
      <PublicNav />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <ImageWithFallback
                src={images[0]}
                alt="Product"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <Button size="icon" variant="secondary" className="rounded-full">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="secondary" className="rounded-full">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition">
                  <ImageWithFallback src={img} alt={`View ${idx + 1}`} className="w-full h-24 object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-3 bg-accent text-white">Featured</Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Elegant Evening Gown</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="font-semibold text-foreground">4.9</span>
                  <span className="ml-1">(127 reviews)</span>
                </div>
                <span>•</span>
                <span>234 rentals</span>
              </div>
            </div>

            <div className="border-t border-b border-border py-6">
              <div className="text-3xl font-bold text-primary mb-2">
                $45
                <span className="text-lg font-normal text-muted-foreground">/day</span>
              </div>
              <p className="text-sm text-muted-foreground">Deposit: $150 (Fully refundable)</p>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="font-semibold">Select Size</label>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="link" size="sm" className="text-primary">
                      <Ruler className="w-4 h-4 mr-1" />
                      Size Guide
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Size Guide</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-2">
                      <p>XS: Bust 32", Waist 24", Hips 34"</p>
                      <p>S: Bust 34", Waist 26", Hips 36"</p>
                      <p>M: Bust 36", Waist 28", Hips 38"</p>
                      <p>L: Bust 38", Waist 30", Hips 40"</p>
                      <p>XL: Bust 40", Waist 32", Hips 42"</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? 'default' : 'outline'}
                    onClick={() => setSelectedSize(size)}
                    className="w-16 h-12"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Date & Duration Selection */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-semibold mb-3 block">Start Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? selectedDate.toLocaleDateString() : 'Pick a date'}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <label className="font-semibold mb-3 block">Duration</label>
                <select
                  className="w-full px-4 py-2 border border-border rounded-lg bg-white"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                >
                  <option value={1}>1 day</option>
                  <option value={3}>3 days</option>
                  <option value={7}>7 days</option>
                  <option value={14}>14 days</option>
                  <option value={30}>30 days</option>
                </select>
              </div>
            </div>

            {/* Total Price */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total Rental Cost:</span>
                  <span className="text-2xl font-bold text-primary">${45 * duration}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  For {duration} {duration === 1 ? 'day' : 'days'}
                </p>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Link to="/checkout" className="flex-1">
                <Button size="lg" className="w-full">
                  Rent Now
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Add to Cart
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-sm">Free Delivery</h4>
                  <p className="text-xs text-muted-foreground">2-3 business days</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-sm">Insured</h4>
                  <p className="text-xs text-muted-foreground">Quality guaranteed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RotateCcw className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-sm">Easy Returns</h4>
                  <p className="text-xs text-muted-foreground">Free return pickup</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CalendarIcon className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-sm">Extend Anytime</h4>
                  <p className="text-xs text-muted-foreground">Just one click</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Description</h3>
                <p className="text-muted-foreground mb-4">
                  This stunning evening gown features elegant draping and a sophisticated silhouette. Perfect for formal events, galas, and special occasions. Made from premium fabric with exceptional attention to detail.
                </p>
                <h4 className="font-semibold mb-2">Details:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Designer: Premium Collection</li>
                  <li>Material: Silk blend</li>
                  <li>Color: Navy Blue</li>
                  <li>Care: Professional dry clean only</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Availability</h3>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
