import { Title, Group, Button, Box, Popover, Text } from '@mantine/core';
import { IconHandClick } from '@tabler/icons-react';
import AppHeader from 'components/AppHeader';
import AppHeaderLinks from 'components/AppHeaderLinks';
import AppBookCallButton from 'components/AppBookCallButton';
import AppWorkItem from 'components/AppWorkItem';
import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';
import { featuredPosts } from 'posts';
import AppAvailability from 'components/AppAvailability';
import AppMobileMenu from 'components/AppMobileMenu';

export default function HomePage() {
  const [opened, { close, open }] = useDisclosure(false);

  return (
    <>
      <Group spacing="sm" mb="md">
        <AppMobileMenu className="d_md_none" />
        <Group spacing="sm" className="d_xs_none">
          <AppHeaderLinks />
        </Group>
      </Group>
      <AppHeader />
      <Box my="3rem">
        <Title my="xl" fw={500}>
          Bringing ideas to life, working on projects that will take me where I want to be, while
          learning about new tools and tech
        </Title>
        <AppAvailability mb="xl" />
        <Group mb="xl">
          <Popover width={180} position="bottom-start" shadow="md" opened={opened}>
            <Popover.Target>
              <Button
                component={Link}
                href="/contact"
                variant="default"
                leftIcon={<IconHandClick size={16} />}
                onMouseEnter={open}
                onMouseLeave={close}
              >
                Get in touch
              </Button>
            </Popover.Target>
            <Popover.Dropdown sx={{ pointerEvents: 'none' }}>
              <Text size="sm" ta="center">
                Please do, I will get back to you as soon as possible
              </Text>
            </Popover.Dropdown>
          </Popover>
          <AppBookCallButton withPopover />
        </Group>
      </Box>
      {featuredPosts.map((post, i) => (
        <Box key={i} mb="2rem">
          <AppWorkItem {...post} />
        </Box>
      ))}
    </>
  );
}
