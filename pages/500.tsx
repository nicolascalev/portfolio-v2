import React from 'react';
import AppError from '../components/ui/AppError';

function InternalServerError() {
  return (
    <AppError
      status={500}
      label="Internal error"
      message="There was an error processing your request, if the error persists please contact support"
      redirectUrl="mailto:nicolascalevg@gmail.com?subject=[INTERNAL ERROR] There was an error in tattoo automations"
      redirectButtonLabel="Contact support"
    />
  );
}

export default InternalServerError;
