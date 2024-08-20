import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Typography,
} from '@mui/material';
import { ElementType } from 'react';
import LoaderSpinner from '../../../../components/LoaderSpinner';
import { useGetGameData } from './hooks/useGetGameData';
import { useModalState } from './hooks/useModakState';

export interface RecordsModalProps {
  openControl: ElementType;
}

export function RecordsModal({ openControl: OpenControl }: RecordsModalProps) {
  const { visible, show, close } = useModalState();
  const { data, isLoading, error } = useGetGameData();

  if (!data && !isLoading) {
    return null;
  }

  const isEmptyData = data?.length === 0;

  return (
    <>
      <OpenControl onClick={show} />

      <Dialog
        open={visible}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Game records</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {isLoading && <LoaderSpinner />}
            {error && <Typography>Error: {error}</Typography>}
            {isEmptyData && <Typography>There will be placed your game records</Typography>}
            {data?.map((record) => (
              <Stack key={crypto.randomUUID()}>
                <Typography>{record?.score}</Typography>
                <Typography>{record?.time}</Typography>
              </Stack>
            ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
