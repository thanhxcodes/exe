import DashboardLayout from '../../components/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { Search, Eye, CheckCircle, XCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';

const vendors = [
  { id: 1, name: 'Premium Rentals', email: 'contact@premium.com', products: 45, status: 'active', rating: 4.8 },
  { id: 2, name: 'Elite Fashion', email: 'info@elite.com', products: 32, status: 'active', rating: 4.9 },
  { id: 3, name: 'Style Hub', email: 'hello@stylehub.com', products: 28, status: 'active', rating: 4.7 },
];

const pendingVendors = [
  { id: 4, name: 'Luxury Wear Co', email: 'contact@luxury.com', appliedDate: 'Feb 28, 2026' },
  { id: 5, name: 'Fashion Trends', email: 'info@trends.com', appliedDate: 'Mar 1, 2026' },
];

export default function AdminVendors() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Vendor Management</h1>
          <p className="text-muted-foreground">Manage vendors and applications</p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input placeholder="Search vendors..." className="pl-10 bg-white" />
        </div>

        <Tabs defaultValue="active">
          <TabsList className="bg-white shadow-sm">
            <TabsTrigger value="active">Active Vendors</TabsTrigger>
            <TabsTrigger value="pending">Pending Approvals ({pendingVendors.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="mt-6">
            <Card className="shadow-md border-0">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Vendor Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Products</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {vendors.map((vendor) => (
                      <TableRow key={vendor.id}>
                        <TableCell className="font-semibold">{vendor.name}</TableCell>
                        <TableCell>{vendor.email}</TableCell>
                        <TableCell>{vendor.products}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <span className="font-semibold">{vendor.rating}</span>
                            <span className="text-yellow-500">★</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800">Active</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pending" className="mt-6 space-y-4">
            {pendingVendors.map((vendor) => (
              <Card key={vendor.id} className="shadow-md border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{vendor.name}</h3>
                      <p className="text-sm text-muted-foreground">{vendor.email}</p>
                      <p className="text-sm text-muted-foreground mt-1">Applied: {vendor.appliedDate}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button className="bg-green-600 hover:bg-green-700">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Approve
                      </Button>
                      <Button variant="outline" className="text-destructive">
                        <XCircle className="w-4 h-4 mr-2" />
                        Reject
                      </Button>
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
