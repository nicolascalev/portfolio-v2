import { Box } from '@mantine/core';
import AppAvailability from 'components/AppAvailability';
import AppBackButton from 'components/AppBackButton';
import AppHeader from 'components/AppHeader';
import AppLinks from 'components/AppLinks';
import React from 'react';

function LinksPage() {
  return (
    <>
      <AppBackButton mb="md" />
      <AppHeader />
      <AppAvailability />
      <Box mt="xl">
        <AppLinks />
      </Box>
    </>
  );
}

export default LinksPage;
