import { Anchor } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const links = [
  { label: 'Work', url: '/work' },
  { label: 'About', url: '/about' },
  { label: 'Links', url: '/links' },
  { label: 'Contact', url: '/contact' },
];

function AppHeaderLinks({ showHomeLink }: { showHomeLink?: boolean }) {
  const router = useRouter();

  return (
    <>
      {showHomeLink && (
        <Link href="/" passHref legacyBehavior>
          <Anchor c="inherit" fw={router.pathname === '/' ? 600 : undefined}>
            Home
          </Anchor>
        </Link>
      )}
      {links.map((link, i) => (
        <Link key={i} href={link.url} passHref legacyBehavior>
          <Anchor c="inherit" fw={router.pathname === link.url ? 600 : undefined}>
            {link.label}
          </Anchor>
        </Link>
      ))}
    </>
  );
}

export default AppHeaderLinks;
