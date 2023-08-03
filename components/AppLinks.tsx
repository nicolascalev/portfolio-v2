import { Button } from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandUpwork,
} from '@tabler/icons-react';
import React from 'react';
import AppBookCallButton from './AppBookCallButton';

const ICON_SIZE = 16;
type LinkType = {
  label: string;
  url: string;
  icon: React.ReactNode;
};
const links: LinkType[] = [
  {
    label: 'Inkker - Personal project',
    url: 'https://www.inkker.com',
    icon: undefined,
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nicolascalev',
    icon: <IconBrandLinkedin size={ICON_SIZE} />,
  },
  {
    label: 'Instagram',
    url: 'https://instagram.com/nicolascalev',
    icon: <IconBrandInstagram size={ICON_SIZE} />,
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/nicolascalevg',
    icon: <IconBrandTwitter size={ICON_SIZE} />,
  },
  {
    label: 'GitHub',
    url: 'https://github.com/nicolascalev',
    icon: <IconBrandGithub size={ICON_SIZE} />,
  },
  {
    label: 'Upwork',
    url: 'https://www.upwork.com/freelancers/~01c4309c898faa7ea0',
    icon: <IconBrandUpwork size={ICON_SIZE} />,
  },
];

function LinkButton({ link }: { link: LinkType }) {
  return (
    <Button
      component="a"
      href={link.url}
      target="_blank"
      variant="default"
      leftIcon={link.icon || undefined}
      fullWidth
      mb="sm"
    >
      {link.label}
    </Button>
  );
}

function AppLinks() {
  return (
    <>
      <AppBookCallButton mb="sm" fullWidth />
      {links.map((link, i) => (
        <LinkButton link={link} key={i} />
      ))}
    </>
  );
}

export default AppLinks;
