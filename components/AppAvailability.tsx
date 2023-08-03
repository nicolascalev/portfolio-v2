import { Group, Text, GroupProps } from '@mantine/core';
import React from 'react';

function AppAvailability(props: GroupProps) {
  return (
    <Group noWrap spacing={5} {...props}>
      <div className="pulse">
        <div className="pulse_out" />
        <div className="pulse_in" />
      </div>
      <Text>Available for new opportunities</Text>
    </Group>
  );
}

export default AppAvailability;
