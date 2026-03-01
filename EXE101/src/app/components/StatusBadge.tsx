import { Badge } from './ui/badge';

type Status = 'pending' | 'confirmed' | 'renting' | 'returning' | 'completed' | 'cancelled' | 'delivered' | 'on-the-way';

interface StatusBadgeProps {
  status: Status;
}

const statusConfig: Record<Status, { label: string; className: string }> = {
  pending: {
    label: 'Pending',
    className: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100',
  },
  confirmed: {
    label: 'Confirmed',
    className: 'bg-blue-100 text-blue-800 hover:bg-blue-100',
  },
  renting: {
    label: 'Currently Renting',
    className: 'bg-purple-100 text-purple-800 hover:bg-purple-100',
  },
  returning: {
    label: 'Returning',
    className: 'bg-orange-100 text-orange-800 hover:bg-orange-100',
  },
  completed: {
    label: 'Completed',
    className: 'bg-green-100 text-green-800 hover:bg-green-100',
  },
  cancelled: {
    label: 'Cancelled',
    className: 'bg-red-100 text-red-800 hover:bg-red-100',
  },
  delivered: {
    label: 'Delivered',
    className: 'bg-green-100 text-green-800 hover:bg-green-100',
  },
  'on-the-way': {
    label: 'On The Way',
    className: 'bg-blue-100 text-blue-800 hover:bg-blue-100',
  },
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <Badge className={config.className}>
      {config.label}
    </Badge>
  );
}
