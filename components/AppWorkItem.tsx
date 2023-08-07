import { Avatar, Group, Box, Text, Button, Image } from '@mantine/core';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';
import AppBadge from './ui/AppBadge';

type AppWorkItemProps = {
  label: string;
  summary: string;
  tags: string[];
  logo?: string;
  thumbnail?: string;
  articlePath: string;
};

function AppWorkItem(props: AppWorkItemProps) {
  // this line helps disable the twitter like look to it, in case you want to remove it
  const showBorder = true;

  return (
    <div>
      <Group noWrap mb="xs">
        <Avatar
          radius="xl"
          src={props.logo || undefined}
          style={{ border: '1px solid var(--mantine-color-dark-5)' }}
        />
        <Text fw={500}>{props.label}</Text>
      </Group>
      <Box pl={showBorder ? '19px' : undefined} pb="md">
        <Box
          pl={showBorder ? 'calc(19px + 0.625rem)' : undefined}
          style={{ borderLeft: showBorder ? '2px solid var(--mantine-color-dark-5)' : undefined }}
        >
          <Text>{props.summary}</Text>
          {props.thumbnail && <Image src={props.thumbnail} mt="md" radius="md" />}
          <Group spacing="xs" mt="md">
            {props.tags.map((tag) => (
              <AppBadge key={tag}>{tag}</AppBadge>
            ))}
          </Group>
        </Box>
      </Box>
      <Link href={props.articlePath} passHref legacyBehavior>
        <Button
          component="a"
          variant="default"
          fullWidth
          rightIcon={<IconArrowNarrowRight size={16} />}
        >
          View Project
        </Button>
      </Link>
    </div>
  );
}

export default AppWorkItem;
