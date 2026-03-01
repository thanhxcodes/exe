import DashboardLayout from '../../components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import StatusBadge from '../../components/StatusBadge';
import OrderTimeline from '../../components/OrderTimeline';
import { ArrowLeft, CheckCircle, XCircle, Truck } from 'lucide-react';
import { Link } from 'react-router';

const timelineSteps = [
  { label: 'Order Placed', date: 'Mar 1, 2026 10:30 AM', status: 'completed' as const },
  { label: 'Awaiting Confirmation', date: '', status: 'current' as const },
  { label: 'Ready for Delivery', date: '', status: 'pending' as const },
  { label: 'Out for Delivery', date: '', status: 'pending' as const },
  { label: 'Delivered', date: '', status: 'pending' as const },
];

export default function VendorOrderDetail() {
  return (
    <DashboardLayout role="vendor">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link to="/vendor/orders">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-1">Order Details</h1>
            <p className="text-muted-foreground">Order #ORD-101</p>
          </div>
          <StatusBadge status="pending" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle>Order Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <OrderTimeline steps={timelineSteps} />
              </CardContent>
            </Card>

            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle>Product Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Product Name:</span>
                    <span className="font-semibold">Elegant Evening Gown</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Size:</span>
                    <span className="font-semibold">M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rental Duration:</span>
                    <span className="font-semibold">3 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rental Period:</span>
                    <span className="font-semibold">Mar 3 - Mar 6, 2026</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Deposit Amount:</span>
                    <span className="font-semibold">$150</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle>Customer Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-1">Contact Details</h4>
                    <p className="text-sm text-muted-foreground">
                      Sarah Johnson<br />
                      sarah.j@example.com<br />
                      +1 (555) 234-5678
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Delivery Address</h4>
                    <p className="text-sm text-muted-foreground">
                      456 Park Avenue<br />
                      Suite 12<br />
                      New York, NY 10022<br />
                      United States
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle>Order Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Confirm Order
                </Button>
                <Button variant="outline" className="w-full">
                  <Truck className="w-4 h-4 mr-2" />
                  Assign Delivery
                </Button>
                <Button variant="outline" className="w-full text-destructive">
                  <XCircle className="w-4 h-4 mr-2" />
                  Reject Order
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle>Payment Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Rental Fee:</span>
                  <span className="font-semibold">$135</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Service Fee:</span>
                  <span className="font-semibold">$15</span>
                </div>
                <div className="border-t pt-3 flex justify-between">
                  <span className="font-semibold">Your Earnings:</span>
                  <span className="font-bold text-lg text-primary">$120</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
