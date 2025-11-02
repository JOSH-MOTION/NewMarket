import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/helpers';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'danger' | 'ghost';
}

export default function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-lg font-medium transition',
        variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700',
        variant === 'danger' && 'bg-red-600 text-white hover:bg-red-700',
        variant === 'ghost' && 'border border-gray-300 hover:bg-gray-50',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}