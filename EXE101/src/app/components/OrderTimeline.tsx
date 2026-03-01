import { CheckCircle2, Circle, Clock } from 'lucide-react';

interface TimelineStep {
  label: string;
  date?: string;
  status: 'completed' | 'current' | 'pending';
}

interface OrderTimelineProps {
  steps: TimelineStep[];
}

export default function OrderTimeline({ steps }: OrderTimelineProps) {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div key={index} className="flex items-start space-x-4">
          <div className="flex flex-col items-center">
            {step.status === 'completed' && (
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
            )}
            {step.status === 'current' && (
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
            )}
            {step.status === 'pending' && (
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <Circle className="w-6 h-6 text-gray-400" />
              </div>
            )}
            {index < steps.length - 1 && (
              <div className={`w-0.5 h-12 mt-2 ${
                step.status === 'completed' ? 'bg-green-200' : 'bg-gray-200'
              }`} />
            )}
          </div>
          <div className="flex-1 pb-8">
            <h4 className={`font-medium ${
              step.status === 'pending' ? 'text-muted-foreground' : 'text-foreground'
            }`}>
              {step.label}
            </h4>
            {step.date && (
              <p className="text-sm text-muted-foreground mt-1">{step.date}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
