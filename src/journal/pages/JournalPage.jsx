import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NotingSelectedView } from '../views';

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, officiis? Temporibus minus blanditiis ea alias, soluta quisquam error eum! Aspernatur expedita, quibusdam nesciunt fugit est nobis? Quaerat placeat ipsam eveniet! </Typography> */}

      <NotingSelectedView />

      {/* <NoteView /> */}

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.mian', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
          <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>
  )
}
