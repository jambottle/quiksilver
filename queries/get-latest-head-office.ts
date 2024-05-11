import { TypedSupabaseClient } from '@/utils/types';

export function getLatestHeadOffice(client: TypedSupabaseClient) {
  return client
    .from('offices')
    .select(
      `
      id,
      name,
      created_at,
      is_head,
      email,
      telephone,
      address_locality,
      street_address,
      detail_address,
      postal_code
    `
    )
    .eq('is_head', true)
    .order('created_at', { ascending: false })
    .limit(1)
    .throwOnError()
    .single();
}
