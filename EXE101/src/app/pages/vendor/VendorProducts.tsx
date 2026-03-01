import DashboardLayout from '../../components/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { Plus, Search, Edit, Trash2, Eye } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

const products = [
  { id: 1, name: 'Elegant Evening Gown', category: 'Formal Dress', price: 45, stock: 5, status: 'active', image: 'https://images.unsplash.com/photo-1761164920960-2d776a18998c?w=100' },
  { id: 2, name: 'Classic Tuxedo', category: 'Wedding Suit', price: 65, stock: 3, status: 'active', image: 'https://images.unsplash.com/photo-1748914451679-4c996574a75f?w=100' },
  { id: 3, name: 'Party Cocktail Dress', category: 'Party Dress', price: 35, stock: 1, status: 'low-stock', image: 'https://images.unsplash.com/photo-1768508950159-e84efeb236a8?w=100' },
  { id: 4, name: 'Business Suit', category: 'Business', price: 50, stock: 4, status: 'active', image: 'https://images.unsplash.com/photo-1770364019396-36ae51854520?w=100' },
];

export default function VendorProducts() {
  return (
    <DashboardLayout role="vendor">
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">Product Management</h1>
            <p className="text-muted-foreground">Manage your rental inventory</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Add New Product
          </Button>
        </div>

        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input placeholder="Search products..." className="pl-10 bg-white" />
          </div>
          <select className="px-4 py-2 border border-border rounded-lg bg-white">
            <option>All Categories</option>
            <option>Formal Dress</option>
            <option>Wedding Suit</option>
            <option>Party Dress</option>
            <option>Business</option>
          </select>
          <select className="px-4 py-2 border border-border rounded-lg bg-white">
            <option>All Status</option>
            <option>Active</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>
        </div>

        <Card className="shadow-md border-0">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price/Day</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <ImageWithFallback
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                        <span className="font-semibold">{product.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell className="font-semibold">${product.price}</TableCell>
                    <TableCell>
                      <span className={product.stock < 2 ? 'text-red-600 font-semibold' : ''}>
                        {product.stock} units
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge className={product.status === 'low-stock' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}>
                        {product.status === 'low-stock' ? 'Low Stock' : 'Active'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
