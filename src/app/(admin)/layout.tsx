'use client';

import { useAppSelector } from '@/store/hooks';
import { selectToken } from '@/features/auth/authSlice';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const token = useAppSelector(selectToken);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.replace('/login');
    }
  }, [token, router]);

  if (!token) return null;

  return <DashboardLayout>{children}</DashboardLayout>;
}
