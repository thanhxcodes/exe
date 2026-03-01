import DashboardLayout from '../../components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { ArrowLeft, MapPin, Phone, Navigation, CheckCircle } from 'lucide-react';
import { Link } from 'react-router';

export default function DeliveryDetail() {
  return (
    <DashboardLayout role="delivery">
      <div className="space-y-6 max-w-2xl mx-auto">
        <div className="flex items-center gap-4">
          <Link to="/delivery/dashboard">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Delivery Details</h1>
            <p className="text-muted-foreground">DEL-001</p>
          </div>
        </div>

        {/* Customer Info */}
        <Card className="shadow-md border-0">
          <CardHeader>
            <CardTitle>Customer Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Name</p>
              <p className="font-semibold">Sarah Johnson</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Phone</p>
              <div className="flex items-center gap-2">
                <p className="font-semibold">+1 (555) 234-5678</p>
                <Button size="sm" variant="outline">
                  <Phone className="w-4 h-4 mr-1" />
                  Call
                </Button>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Delivery Address</p>
              <p className="font-semibold">456 Park Avenue, Suite 12<br />New York, NY 10022</p>
              <Button size="sm" variant="outline" className="mt-2">
                <Navigation className="w-4 h-4 mr-1" />
                Open in Maps
              </Button>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Time Window</p>
              <p className="font-semibold">2:00 PM - 4:00 PM</p>
            </div>
          </CardContent>
        </Card>

        {/* Package Info */}
        <Card className="shadow-md border-0">
          <CardHeader>
            <CardTitle>Package Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Item:</span>
              <span className="font-semibold">Elegant Evening Gown</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Size:</span>
              <span className="font-semibold">M</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Order ID:</span>
              <span className="font-semibold">ORD-101</span>
            </div>
          </CardContent>
        </Card>

        {/* Map Placeholder */}
        <Card className="shadow-md border-0">
          <CardContent className="p-0">
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p>Map View</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="space-y-3">
          <Button className="w-full" size="lg">
            <Navigation className="w-5 h-5 mr-2" />
            Start Navigation
          </Button>
          <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
            <CheckCircle className="w-5 h-5 mr-2" />
            Mark as Delivered
          </Button>
        </div>

        {/* Notes */}
        <Card className="shadow-md border-0">
          <CardHeader>
            <CardTitle>Delivery Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Please call customer upon arrival. Building requires buzzer code: #1234
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
