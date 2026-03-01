import DashboardLayout from '../../components/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import StatusBadge from '../../components/StatusBadge';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Link } from 'react-router';
import { Search, Calendar } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';

const orders = [
  { id: 'ORD-001', item: 'Elegant Evening Gown', vendor: 'Premium Rentals', date: 'Feb 15, 2026', total: '$135', status: 'renting' as const },
  { id: 'ORD-002', item: 'Business Suit', vendor: 'Elite Fashion', date: 'Feb 20, 2026', total: '$150', status: 'confirmed' as const },
  { id: 'ORD-003', item: 'Party Dress', vendor: 'Style Hub', date: 'Feb 10, 2026', total: '$105', status: 'completed' as const },
  { id: 'ORD-004', item: 'Wedding Tuxedo', vendor: 'Formal Wear Co', date: 'Jan 28, 2026', total: '$195', status: 'completed' as const },
];

export default function CustomerOrders() {
  return (
    <DashboardLayout role="customer">
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Orders</h1>
            <p className="text-muted-foreground">Track and manage your rental orders</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input placeholder="Search orders..." className="pl-10 bg-white" />
          </div>
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Filter by Date
          </Button>
        </div>

        <Tabs defaultValue="all">
          <TabsList className="bg-white shadow-sm">
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6 space-y-4">
            {orders.map((order) => (
              <Card key={order.id} className="shadow-md hover:shadow-lg transition-shadow border-0">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{order.item}</h3>
                          <p className="text-sm text-muted-foreground">by {order.vendor}</p>
                        </div>
                        <StatusBadge status={order.status} />
                      </div>
                      <div className="flex gap-6 text-sm text-muted-foreground">
                        <div>
                          <span className="font-medium text-foreground">Order ID:</span> {order.id}
                        </div>
                        <div>
                          <span className="font-medium text-foreground">Date:</span> {order.date}
                        </div>
                        <div>
                          <span className="font-medium text-foreground">Total:</span> {order.total}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link to={`/customer/orders/${order.id}`}>
                        <Button variant="outline">View Details</Button>
                      </Link>
                      {order.status === 'renting' && (
                        <Button>Extend Rental</Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
