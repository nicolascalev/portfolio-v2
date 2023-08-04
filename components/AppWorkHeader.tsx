import React from 'react';
import { Group, Text, Title, Divider, Button, Image } from '@mantine/core';
import { useRouter } from 'next/router';
import { posts, Post } from 'posts';
import Head from 'next/head';
import { IconArrowUpRight } from '@tabler/icons-react';
import AppBackButton from './AppBackButton';
import AppBadge from './ui/AppBadge';

function AppWorkHeader() {
  const router = useRouter();

  const post: Post | undefined = posts.find(
    (currentPost) => currentPost.articlePath === router.pathname
  );

  if (!post) {
    throw new Error('The path in the url does not match with any post in the list');
  }

  return (
    <>
      <Head>
        <title>
          {post.label} {post.headline}
        </title>
        <meta name="description" content={post.summary} />
      </Head>
      <AppBackButton />
      {/* name / title */}
      <Text fw={600} my="xl">
        {post.label}
      </Text>
      {/* headline */}
      <Title order={2} fw={500}>
        {post.headline}
      </Title>
      {/* image */}
      {post.thumbnail && <Image src={post.thumbnail} radius="md" mt="xl" />}

      {/* tags */}
      <Group spacing="sm" my="xl">
        {post.tags.map((tag, i) => (
          <AppBadge key={i}>{tag}</AppBadge>
        ))}
      </Group>
      {/* live site / year / time frame */}
      <Group mb="md" align="center">
        {post.year && (
          <div>
            <Text component="span" fw={600} mr="xs">
              Year
            </Text>
            <Text component="span">{post.year}</Text>
          </div>
        )}
        {post.timeframe && (
          <div>
            <Text component="span" fw={600} mr="xs">
              Timeframe
            </Text>
            <Text component="span">{post.timeframe}</Text>
          </div>
        )}
      </Group>
      {post.projectUrl && (
        <Button
          component="a"
          href={post.projectUrl}
          target="_blank"
          rightIcon={<IconArrowUpRight size={16} />}
          mb="xl"
        >
          Live
        </Button>
      )}
      <Divider />
    </>
  );
}

export default AppWorkHeader;
