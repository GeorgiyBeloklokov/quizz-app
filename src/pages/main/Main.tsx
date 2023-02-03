import { Box, Button, Link, Typography } from '@mui/material';
import { QuizCard } from '../../components/QuizCard/QuizCard';
import { SERVICE_MESSAGES } from '../../components/utils/constants';
import { Link as RouterLink } from 'react-router-dom';

export const Main = () => {
  return (
    <Box>
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: '72px' }}
      >
        <Typography sx={{ fontSize: '1.8rem', lineHeight: '4rem' }}>
          {SERVICE_MESSAGES.myQuizzes}
        </Typography>
        <Link component={RouterLink} to="/create-quiz" underline="none">
          <Button variant="contained" sx={{ color: '#fff', letterSpacing: '.1em' }}>
            {SERVICE_MESSAGES.createNew}
          </Button>
        </Link>
      </Box>
      <QuizCard />
    </Box>
  );
};
