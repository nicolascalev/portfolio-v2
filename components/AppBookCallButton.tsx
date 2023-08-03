import { Button, ButtonProps, Popover, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconCalendar } from '@tabler/icons-react';
import React from 'react';

type AppBookCallButton = ButtonProps & {
  withPopover?: boolean;
};

function AppBookCallButton(props: AppBookCallButton) {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Popover width={170} position="bottom-start" shadow="md" opened={opened}>
      <Popover.Target>
        <Button
          component="a"
          href="https://cal.com/nicolascalev"
          target="_blank"
          variant="default"
          leftIcon={<IconCalendar size={16} />}
          onMouseEnter={props.withPopover ? open : undefined}
          onMouseLeave={props.withPopover ? close : undefined}
          {...props}
        >
          Book a call
        </Button>
      </Popover.Target>
      <Popover.Dropdown sx={{ pointerEvents: 'none' }}>
        <Text size="sm" ta="center">
          I want to get to know you
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}

export default AppBookCallButton;
