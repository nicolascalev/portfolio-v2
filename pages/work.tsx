import { Box, SegmentedControl, Title } from '@mantine/core';
import AppBackButton from 'components/AppBackButton';
import AppWorkItem from 'components/AppWorkItem';
import { posts } from 'posts';
import React, { useState } from 'react';

const experiencePosts = posts.filter((post) => post.type === 'experience');
const servicePosts = posts.filter((post) => post.type === 'service');

function WorkPage() {
  const [workType, setWorkType] = useState('all');
  return (
    <>
      <AppBackButton />
      <Title my="3rem" fw={500}>
        One day it looked like risk, now it looks like opportunity
      </Title>
      <SegmentedControl
        mb="md"
        fullWidth
        value={workType}
        onChange={setWorkType}
        data={[
          { label: 'All', value: 'all' },
          { label: 'Experience', value: 'experience' },
          { label: 'Services', value: 'service' },
        ]}
      />
      {workType === 'all' &&
        posts.map((post, i) => (
          <Box key={i} mb="lg" className="animate__animated animate__fadeIn">
            <AppWorkItem {...post} />
          </Box>
        ))}
      {workType === 'experience' &&
        experiencePosts.map((post, i) => (
          <Box key={i} mb="lg" className="animate__animated animate__fadeIn">
            <AppWorkItem {...post} />
          </Box>
        ))}
      {workType === 'service' &&
        servicePosts.map((post, i) => (
          <Box key={i} mb="lg" className="animate__animated animate__fadeIn">
            <AppWorkItem {...post} />
          </Box>
        ))}
    </>
  );
}

export default WorkPage;
