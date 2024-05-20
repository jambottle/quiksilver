import { TypedSupabaseClient } from '@/utils/types';

export function getHeaderMenus(client: TypedSupabaseClient) {
  return client
    .from('menus')
    .select(
      `
      id,
      title,
      path,
      order,
      is_active
    `
    )
    .eq('is_active', true)
    .order('order', { ascending: true })
    .throwOnError()
    .select();
}
