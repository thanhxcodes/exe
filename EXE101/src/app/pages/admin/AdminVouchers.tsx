import DashboardLayout from '../../components/DashboardLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Badge } from '../../components/ui/badge';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';

const vouchers = [
  { id: 1, code: 'SUMMER2026', discount: '20%', used: 156, limit: 500, status: 'active', expiry: 'Jun 30, 2026' },
  { id: 2, code: 'WELCOME10', discount: '10%', used: 342, limit: 1000, status: 'active', expiry: 'Dec 31, 2026' },
  { id: 3, code: 'FLASH50', discount: '50%', used: 98, limit: 100, status: 'active', expiry: 'Mar 15, 2026' },
  { id: 4, code: 'WINTER2025', discount: '15%', used: 450, limit: 500, status: 'expired', expiry: 'Feb 28, 2026' },
];

export default function AdminVouchers() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">Voucher Management</h1>
            <p className="text-muted-foreground">Create and manage discount vouchers</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create Voucher
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Voucher</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="code">Voucher Code</Label>
                  <Input id="code" placeholder="e.g., SPRING2026" className="bg-input-background" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="discount">Discount (%)</Label>
                  <Input id="discount" type="number" placeholder="10" className="bg-input-background" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="limit">Usage Limit</Label>
                  <Input id="limit" type="number" placeholder="100" className="bg-input-background" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" type="date" className="bg-input-background" />
                </div>
                <Button className="w-full">Create Voucher</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <Card className="shadow-md border-0">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Code</TableHead>
                  <TableHead>Discount</TableHead>
                  <TableHead>Usage</TableHead>
                  <TableHead>Expiry</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vouchers.map((voucher) => (
                  <TableRow key={voucher.id}>
                    <TableCell className="font-mono font-semibold">{voucher.code}</TableCell>
                    <TableCell>{voucher.discount}</TableCell>
                    <TableCell>
                      <span className={voucher.used >= voucher.limit * 0.9 ? 'text-orange-600 font-semibold' : ''}>
                        {voucher.used} / {voucher.limit}
                      </span>
                    </TableCell>
                    <TableCell>{voucher.expiry}</TableCell>
                    <TableCell>
                      <Badge className={voucher.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                        {voucher.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
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
