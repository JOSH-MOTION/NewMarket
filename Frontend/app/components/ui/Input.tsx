import { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/helpers';

export default function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn('border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500', className)}
      {...props}
    />
  );
}