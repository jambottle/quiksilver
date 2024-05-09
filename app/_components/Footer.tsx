import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="p-2 bg-transparent">
      <ul className="grid grid-cols-5 justify-stretch items-end gap-5 text-lg">
        {/* 주소 (한글) */}
        <li className="col-start-2">
          대구광역시 동구 동부로22길 48,
          <br />
          유성푸르나임 2106호
        </li>

        {/* 연락처 (전화번호, 이메일) */}
        <li className="col-start-4 underline">
          <Link href="tel:821052356662">010-5235-6662</Link>
          <br />
          <Link href="mailto:storynsto@naver.com">storynsto@naver.com</Link>
        </li>

        {/* Copyright */}
        <li className="col-start-5 text-end">© Storynsto Corp. — 2024</li>
      </ul>
    </footer>
  );
}
