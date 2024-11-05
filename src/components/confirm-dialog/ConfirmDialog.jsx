import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Stack } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import './ConfirmDialog.css';

function ConfirmDialog({ open, onClose, onConfirm }) {
  return (
    <Dialog open={open} onClose={onClose} classes={{ paper: 'confirm-dialog' }}>
      <DialogContent className="dialog-content">
        <WarningIcon className="icon" />
        <Typography className="title">
        Are you sure you want to remove this photograph from your cart?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Stack className="button-container"direction={"row"}>
        <Button onClick={onClose}className="deny-button">
          Cancel
        </Button>
        <Button onClick={onConfirm} className="confirm-button">
          Remove
        </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDialog;