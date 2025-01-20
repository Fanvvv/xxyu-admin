import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { useTranslations } from 'next-intl';

function useAuth() {
  const router = useRouter();
  const { toast } = useToast();
  const t = useTranslations('Auth');

  const login = async (data: any) => {
    const response = await fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  };

  const logout = () => {
    router.push('/login');
    toast({
      title: t('LogoutSuccess')
    });
  };

  return {
    login,
    logout
  };
}

export default useAuth;
