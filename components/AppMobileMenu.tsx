import { useDisclosure } from '@mantine/hooks';
import { Drawer, ActionIcon, Stack, ActionIconProps, Text } from '@mantine/core';
import { IconMenu } from '@tabler/icons-react';
import AppHeaderLinks from './AppHeaderLinks';

export default function AppMobileMenu(props: ActionIconProps) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title={<Text fw={500}>Menu</Text>} position="bottom">
        <Stack>
          <AppHeaderLinks />
        </Stack>
      </Drawer>

      <ActionIcon onClick={open} variant="default" size="sm" {...props}>
        <IconMenu size="0.875rem" />
      </ActionIcon>
    </>
  );
}
