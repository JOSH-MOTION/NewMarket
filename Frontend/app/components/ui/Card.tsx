import { HTMLAttributes } from 'react';
import { cn } from '@/lib/helpers';

export default function Card({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('bg-white rounded-lg shadow-md p-4', className)} {...props}>
      {children}
    </div>
  );
}