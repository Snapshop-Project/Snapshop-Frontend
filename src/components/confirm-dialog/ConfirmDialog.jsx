import React from 'react';
import { Dialog, DialogContent, Stack } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import './ConfirmDialog.css';

function ConfirmDialog({ open, onClose, onConfirm }) {
  return (
    <Dialog open={open} onClose={onClose} PaperProps={{ sx: { borderRadius: '15px' } }}>
      <DialogContent className="dialog-content">
        <WarningIcon fontSize="large"className="icon"/>
        <span className="title">
            Are you sure you want to remove this photograph from your cart?
        </span>
        <Stack className="button-container"direction={"row"}>
        <button onClick={onClose}className="deny-button">
          Cancel
        </button>
        <button onClick={onConfirm} className="confirm-button">
          Remove
        </button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

export default ConfirmDialog;