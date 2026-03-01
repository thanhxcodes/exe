import DashboardLayout from '../../components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import StatusBadge from '../../components/StatusBadge';
import { MapPin, Phone, Package, Clock } from 'lucide-react';
import { Link } from 'react-router';

const deliveries = [
  { id: 'DEL-001', customer: 'Sarah Johnson', address: '456 Park Ave, NY 10022', time: '2:00 PM - 4:00 PM', type: 'delivery', status: 'on-the-way' as const },
  { id: 'DEL-002', customer: 'Mike Chen', address: '789 Broadway, NY 10003', time: '4:00 PM - 6:00 PM', type: 'delivery', status: 'pending' as const },
];

const pickups = [
  { id: 'PIC-001', customer: 'Emma Wilson', address: '123 Main St, NY 10001', time: '1:00 PM - 3:00 PM', type: 'pickup', status: 'pending' as const },
];

export default function DeliveryDashboard() {
  return (
    <DashboardLayout role="delivery">
      <div className="space-y-6 max-w-2xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold mb-2">Today's Schedule</h1>
          <p className="text-muted-foreground">March 1, 2026</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="shadow-md border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Deliveries</p>
                  <h3 className="text-2xl font-bold">2</h3>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pickups</p>
                  <h3 className="text-2xl font-bold">1</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Today's Deliveries */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Deliveries</h2>
          <div className="space-y-4">
            {deliveries.map((delivery) => (
              <Card key={delivery.id} className="shadow-md border-0">
                <CardContent className="p-5">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{delivery.customer}</h3>
                        <p className="text-sm text-muted-foreground">{delivery.id}</p>
                      </div>
                      <StatusBadge status={delivery.status} />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Delivery Address</p>
                          <p className="text-sm text-muted-foreground">{delivery.address}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Time Window</p>
                          <p className="text-sm text-muted-foreground">{delivery.time}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Link to={`/delivery/${delivery.id}`} className="flex-1">
                        <Button className="w-full" size="lg">
                          View Details
                        </Button>
                      </Link>
                      <Button variant="outline" size="lg">
                        <Phone className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Today's Pickups */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Pickups</h2>
          <div className="space-y-4">
            {pickups.map((pickup) => (
              <Card key={pickup.id} className="shadow-md border-0">
                <CardContent className="p-5">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{pickup.customer}</h3>
                        <p className="text-sm text-muted-foreground">{pickup.id}</p>
                      </div>
                      <StatusBadge status={pickup.status} />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Pickup Address</p>
                          <p className="text-sm text-muted-foreground">{pickup.address}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Time Window</p>
                          <p className="text-sm text-muted-foreground">{pickup.time}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Link to={`/delivery/${pickup.id}`} className="flex-1">
                        <Button className="w-full" size="lg">
                          View Details
                        </Button>
                      </Link>
                      <Button variant="outline" size="lg">
                        <Phone className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
