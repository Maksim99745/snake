import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Typography } from '@mui/material';
import { ElementType, useEffect } from 'react';
import LoaderSpinner from '../../../../components/LoaderSpinner';
import { useGetGameData } from './hooks/useGetGameData';
import { useModalState } from './hooks/useModakState';

export interface RecordsModalProps {
  openControl: ElementType;
}

export function RecordsModal({ openControl: OpenControl }: RecordsModalProps) {
  const { visible, show, close } = useModalState();
  const { data, isLoading, error, revalidate } = useGetGameData();
  useEffect(() => {
    if (visible) {
      revalidate();
    }
  }, [visible]);

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
          {isLoading && <LoaderSpinner />}
          {error && <Typography>Error: {error.message}</Typography>}
          {isEmptyData && <Typography>There will be placed your game records</Typography>}
          {data?.map((record) => (
            <Box key={crypto.randomUUID()}>
              <Typography>{record?.time}</Typography>
              <Typography>{record?.score}</Typography>
              <Divider />
            </Box>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
