'use client';

import { useQuery } from '@supabase-cache-helpers/postgrest-react-query';
import Link from 'next/link';

import { getLatestHeadOffice } from '@/queries/get-latest-head-office';
import useSupabaseBrowser from '@/utils/supabase-browser';

export default function Footer() {
  const supabase = useSupabaseBrowser();
  const { data: office } = useQuery(getLatestHeadOffice(supabase));

  return (
    <footer className="p-2 bg-transparent">
      <ul className="grid grid-cols-5 justify-stretch items-end gap-5 text-lg">
        {/* 주소 (한글) */}
        <li className="col-start-2">
          {office?.address_locality} {office?.street_address},
          <br />
          {office?.detail_address}
        </li>

        {/* 연락처 (전화번호, 이메일) */}
        <li className="col-start-4 underline">
          <Link href="tel:821052356662">{office?.telephone}</Link>
          <br />
          <Link href="mailto:storynsto@naver.com">{office?.email}</Link>
        </li>

        {/* Copyright */}
        <li className="col-start-5 text-end">© {office?.name} — 2024</li>
      </ul>
    </footer>
  );
}
