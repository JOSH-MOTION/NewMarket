import api from './api';

export const initializePaystackPayment = (data: any) =>
  api.post('/payments/paystack/initialize', data);