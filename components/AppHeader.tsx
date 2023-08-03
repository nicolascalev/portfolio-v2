import { Group, Text, Avatar } from '@mantine/core';
import { useInterval } from '@mantine/hooks';
import React, { useEffect, useState } from 'react';

const titles = [
  'Full-stack developer',
  'Creator',
  'Automation enthusiast',
  'React developer',
  'Javascript developer',
  'Photography lover',
];

function AppHeader() {
  const [startedAnimation, setStartedAnimation] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(0);
  const interval = useInterval(() => {
    setCurrentTitle((current) => {
      if (current < titles.length - 1) {
        return current + 1;
      }
      return 0;
    });
  }, 3000);
  useEffect(() => {
    setStartedAnimation(true);
    interval.start();
    return interval.stop;
  }, []);

  return (
    <>
      <Group position="apart" align="start">
        <div>
          <Text fw={500} size="lg">
            Nicolas Guillen
          </Text>
          <Text className="ticker__container">
            {titles.map((title, i) => (
              <Text
                key={i}
                hidden={i !== currentTitle}
                className={startedAnimation ? 'ticker' : undefined}
              >
                {title}
              </Text>
            ))}
          </Text>
        </div>
        <Avatar radius="100%" size="lg" src="https://github.com/nicolascalev.png" />
      </Group>
    </>
  );
}

export default AppHeader;
