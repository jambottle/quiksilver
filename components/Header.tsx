'use client';

import { useQuery } from '@supabase-cache-helpers/postgrest-react-query';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { getHeaderMenus } from '@/queries/get-header-menus';
import useSupabaseBrowser from '@/utils/supabase-browser';

export default function Header() {
  const currPath = usePathname();

  const supabase = useSupabaseBrowser();
  const { data: menus } = useQuery(getHeaderMenus(supabase));

  return (
    <header className="p-2 bg-white">
      <nav className="flex flex-row justify-between items-center text-xl">
        <Link href="/">
          <Image
            src="https://static.sto-net.com/logos/sto/logo-en.svg"
            width={141.5}
            height={40}
            alt="Sto Logo"
            priority
          />
        </Link>

        <ul className="flex flex-row justify-center items-center space-x-4">
          {menus?.map(({ path, title }, index) => (
            <li key={index} className={path !== currPath ? 'opacity-30' : ''}>
              <Link href={path ?? '/not-found'}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
