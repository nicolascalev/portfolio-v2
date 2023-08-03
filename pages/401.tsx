import React from 'react';
import AppError from '../components/ui/AppError';

function UnauthorizedPage() {
  return (
    <AppError
      status={401}
      label="Unauthorized"
      message="You are not authorized to see this resource"
      redirectUrl="/"
      redirectButtonLabel="Home"
    />
  );
}

export default UnauthorizedPage;
