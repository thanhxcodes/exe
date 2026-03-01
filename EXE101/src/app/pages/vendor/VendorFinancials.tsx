import DashboardLayout from '../../components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { DollarSign, TrendingUp, Calendar, Download } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const earningsData = [
  { date: 'Feb 1', earnings: 420 },
  { date: 'Feb 8', earnings: 580 },
  { date: 'Feb 15', earnings: 650 },
  { date: 'Feb 22', earnings: 720 },
  { date: 'Mar 1', earnings: 810 },
];

const transactions = [
  { id: 'TXN-001', date: 'Mar 1, 2026', order: 'ORD-105', amount: '$120', status: 'completed' },
  { id: 'TXN-002', date: 'Feb 28, 2026', order: 'ORD-104', amount: '$165', status: 'completed' },
  { id: 'TXN-003', date: 'Feb 26, 2026', order: 'ORD-103', amount: '$90', status: 'completed' },
  { id: 'TXN-004', date: 'Feb 25, 2026', order: 'ORD-102', amount: '$135', status: 'pending' },
  { id: 'TXN-005', date: 'Feb 20, 2026', order: 'ORD-101', amount: '$175', status: 'completed' },
];

export default function VendorFinancials() {
  return (
    <DashboardLayout role="vendor">
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">Financial Overview</h1>
            <p className="text-muted-foreground">Track your earnings and transactions</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              This Month
            </Button>
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="shadow-md border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Earnings</p>
                  <h3 className="text-3xl font-bold">$12,450</h3>
                  <div className="flex items-center text-sm text-green-600 mt-1">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>+12.5% from last month</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md border-0">
            <CardContent className="p-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Pending Payout</p>
                <h3 className="text-3xl font-bold">$685</h3>
                <p className="text-sm text-muted-foreground mt-1">5 transactions</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md border-0">
            <CardContent className="p-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">This Month</p>
                <h3 className="text-3xl font-bold">$2,340</h3>
                <p className="text-sm text-muted-foreground mt-1">18 completed orders</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-md border-0">
          <CardHeader>
            <CardTitle>Earnings Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={earningsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="earnings" stroke="#2563EB" fill="#2563EB20" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-md border-0">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Order</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((txn) => (
                  <TableRow key={txn.id}>
                    <TableCell className="font-medium">{txn.id}</TableCell>
                    <TableCell>{txn.date}</TableCell>
                    <TableCell>{txn.order}</TableCell>
                    <TableCell className="font-semibold">{txn.amount}</TableCell>
                    <TableCell>
                      <Badge className={txn.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                        {txn.status}
                      </Badge>
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
