import DashboardLayout from '../../components/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import StatusBadge from '../../components/StatusBadge';
import { Search, Eye } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Link } from 'react-router';

const orders = [
  { id: 'ORD-101', customer: 'Sarah Johnson', item: 'Evening Gown', date: 'Mar 1, 2026', amount: '$135', status: 'pending' as const },
  { id: 'ORD-102', customer: 'Mike Chen', item: 'Business Suit', date: 'Feb 28, 2026', amount: '$150', status: 'confirmed' as const },
  { id: 'ORD-103', customer: 'Emma Wilson', item: 'Party Dress', date: 'Feb 26, 2026', amount: '$105', status: 'renting' as const },
  { id: 'ORD-104', customer: 'John Smith', item: 'Tuxedo', date: 'Feb 25, 2026', amount: '$195', status: 'returning' as const },
  { id: 'ORD-105', customer: 'Lisa Brown', item: 'Casual Outfit', date: 'Feb 20, 2026', amount: '$75', status: 'completed' as const },
];

export default function VendorOrders() {
  return (
    <DashboardLayout role="vendor">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Order Management</h1>
          <p className="text-muted-foreground">Track and manage rental orders</p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input placeholder="Search orders..." className="pl-10 bg-white" />
        </div>

        <Tabs defaultValue="all">
          <TabsList className="bg-white shadow-sm">
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
            <TabsTrigger value="renting">Currently Renting</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6 space-y-4">
            {orders.map((order) => (
              <Card key={order.id} className="shadow-md hover:shadow-lg transition-shadow border-0">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{order.customer}</h3>
                          <p className="text-sm text-muted-foreground">{order.item}</p>
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
                          <span className="font-medium text-foreground">Amount:</span> {order.amount}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link to={`/vendor/orders/${order.id}`}>
                        <Button variant="outline">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </Link>
                      {order.status === 'pending' && (
                        <>
                          <Button>Confirm</Button>
                          <Button variant="outline">Reject</Button>
                        </>
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
