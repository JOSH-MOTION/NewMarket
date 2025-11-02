export const cn = (...inputs: (string | undefined | null | false)[]) =>
  inputs.filter(Boolean).join(' ');

export const formatPrice = (amount: number) => `₦${amount.toLocaleString()}`;