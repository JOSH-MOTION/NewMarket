import { useRouter } from 'next/navigation';
import useUserStore from '@/store/useUserStore';

export default function useAuth() {
  const { user, setUser } = useUserStore();
  const router = useRouter();

  const login = async (email: string, password: string) => {
    // API call
    const res = await fetch('/api/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) });
    const data = await res.json();
    setUser(data.user);
    localStorage.setItem('token', data.token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    router.push('/');
  };

  return { user, login, logout };
}