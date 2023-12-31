import React from 'react';
import { Card, Text } from '@mantine/core';

function AppBadge({ children }: { children: React.ReactNode }) {
  return (
    <Card withBorder py="2px" px="1rem">
      <Text size="xs">{children}</Text>
    </Card>
  );
}

export default AppBadge;
