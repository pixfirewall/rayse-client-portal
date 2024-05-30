import React from 'react';
import { Box, CircularProgress } from '@mui/material';

export const Loading: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="80vh"
      bgcolor="white"
    >
      <CircularProgress sx={{ color: '#3F947D' }} />
    </Box>
  );
};
