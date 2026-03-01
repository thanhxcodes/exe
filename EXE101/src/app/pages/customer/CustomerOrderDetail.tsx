import DashboardLayout from '../../components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import StatusBadge from '../../components/StatusBadge';
import OrderTimeline from '../../components/OrderTimeline';
import { ArrowLeft, Download, MessageCircle, Package } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

const timelineSteps = [
  { label: 'Order Placed', date: 'Feb 15, 2026 10:30 AM', status: 'completed' as const },
  { label: 'Confirmed by Vendor', date: 'Feb 15, 2026 2:15 PM', status: 'completed' as const },
  { label: 'Out for Delivery', date: 'Feb 17, 2026 9:00 AM', status: 'completed' as const },
  { label: 'Delivered', date: 'Feb 17, 2026 3:45 PM', status: 'current' as const },
  { label: 'Return Scheduled', date: 'Mar 5, 2026', status: 'pending' as const },
];

export default function CustomerOrderDetail() {
  return (
    <DashboardLayout role="customer">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link to="/customer/orders">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-1">Order Details</h1>
            <p className="text-muted-foreground">Order #ORD-001</p>
          </div>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Invoice
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Order Status */}
            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle>Order Status</CardTitle>
              </CardHeader>
              <CardContent>
                <OrderTimeline steps={timelineSteps} />
              </CardContent>
            </Card>

            {/* Product Details */}
            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle>Product Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1761164920960-2d776a18998c?w=200"
                    alt="Product"
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Elegant Evening Gown</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Size: M</p>
                      <p>Color: Navy Blue</p>
                      <p>Vendor: Premium Rentals</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Information */}
            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle>Delivery Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">Shipping Address</h4>
                  <p className="text-sm text-muted-foreground">
                    123 Main Street, Apt 4B<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Contact</h4>
                  <p className="text-sm text-muted-foreground">
                    John Doe<br />
                    +1 (555) 123-4567<br />
                    john.doe@example.com
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Order Summary */}
            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Rental (3 days)</span>
                  <span className="font-semibold">$135</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Delivery</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Deposit (refundable)</span>
                  <span className="font-semibold">$150</span>
                </div>
                <div className="border-t pt-4 flex justify-between">
                  <span className="font-semibold">Total Paid</span>
                  <span className="font-bold text-lg text-primary">$285</span>
                </div>
              </CardContent>
            </Card>

            {/* Rental Period */}
            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle>Rental Period</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Start Date</p>
                  <p className="font-semibold">Feb 17, 2026</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Return Due</p>
                  <p className="font-semibold">Mar 5, 2026</p>
                </div>
                <div className="pt-3 border-t">
                  <p className="text-sm text-muted-foreground mb-1">Days Remaining</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">3</span>
                    <span className="text-sm text-muted-foreground">days</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="space-y-3">
              <Button className="w-full">
                Extend Rental Period
              </Button>
              <Button variant="outline" className="w-full">
                <Package className="w-4 h-4 mr-2" />
                Request Early Return
              </Button>
              <Button variant="outline" className="w-full">
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
