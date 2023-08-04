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
  return (
    <div>
      <Group noWrap>
        <Avatar
          radius="xl"
          mb="xs"
          src={props.logo || undefined}
          style={{ border: '1px solid var(--mantine-color-dark-3)' }}
        />
        <Text fw={500} mb="xs">{props.label}</Text>
      </Group>
      <Box pl="19px" pb="md">
        <Box
          pl="calc(19px + 0.625rem)"
          style={{ borderLeft: '2px solid var(--mantine-color-dark-3)' }}
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
