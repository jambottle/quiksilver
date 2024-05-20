import { prefetchQuery } from '@supabase-cache-helpers/postgrest-react-query';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { cookies } from 'next/headers';

import { getHeaderMenus } from '@/queries/get-header-menus';
import { getLatestHeadOffice } from '@/queries/get-latest-head-office';
import useSupabaseServer from '@/utils/supabase-server';

export default async function GlobalHydrationBoundary({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  const cookieStore = cookies();
  const supabase = useSupabaseServer(cookieStore);

  await prefetchQuery(queryClient, getHeaderMenus(supabase));
  await prefetchQuery(queryClient, getLatestHeadOffice(supabase));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}
