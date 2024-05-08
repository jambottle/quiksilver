import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="p-2 bg-white">
      <Link href="/">
        <Image
          src="https://static.sto-net.com/logos/sto/logo-en.svg"
          width={141.5}
          height={40}
          alt="Sto Logo"
          priority
        />
      </Link>
    </header>
  );
}
