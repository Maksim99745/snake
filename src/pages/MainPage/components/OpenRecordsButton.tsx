import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Button, ButtonProps } from '@mui/material';

export default function OpenRecordsButton(props: ButtonProps) {
  return (
    <Button
      variant="outlined"
      size="small"
      startIcon={<EmojiEventsIcon sx={{ display: { xs: 'none', sm: 'block' } }} />}
      {...props}
    >
      Open Records
    </Button>
  );
}
