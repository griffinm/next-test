'use client';

import Link from "next/link"
import { usePathname } from 'next/navigation';

type link = {
  pageName: string,
  path: string,
}

const links: link[] = [
  { pageName: 'First Page', path: '/level' },
  { pageName: 'Second Page', path: '/level/another' },
]

export default function Navigation() {
  const pathName = usePathname();

  return (
    <div>
      {links.map((link) => {
        const isActive = pathName === link.path
        return (
          <Link
            key={link.pageName}
            href={link.path}
            className={isActive ? 'active' : ''}>
              {link.pageName}
            </Link>
        )
      })}
    </div>
  )
}
