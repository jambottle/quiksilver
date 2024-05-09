'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Page = {
  path: string;
  title: string;
};

const pages: Page[] = [
  { path: '/about', title: 'About' },
  { path: '/products', title: 'Products' },
  { path: '/services', title: 'Services' },
  { path: '/works', title: 'Works' },
  { path: '/contact-us', title: 'Contact us' },
];

export default function Header() {
  const currPath = usePathname();

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
          {pages.map(({ path, title }, index) => (
            <li key={index} className={path !== currPath ? 'opacity-30' : ''}>
              <Link href={path}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
