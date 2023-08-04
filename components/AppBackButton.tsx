import { Button, ButtonProps } from '@mantine/core';
import { IconChevronLeft } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import React from 'react';

function AppBackButton(props: ButtonProps) {
  const router = useRouter();

  return (
    <Button
      variant="default"
      color="gray"
      leftIcon={<IconChevronLeft size={16} />}
      onClick={() => router.back()}
      size="sm"
      {...props}
    >
      Back
    </Button>
  );
}

export default AppBackButton;
