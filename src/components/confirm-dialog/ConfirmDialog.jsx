import React from 'react';
import { Dialog, DialogContent, Stack } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import './ConfirmDialog.css';

function ConfirmDialog({ open, onClose, onConfirm, title, cancelText, confirmText}) {
  return (
    <Dialog open={open} onClose={onClose} PaperProps={{ sx: { borderRadius: '15px' } }}>
      <DialogContent className="dialog-content">
        <WarningIcon fontSize="large"className="icon"/>
        <span className="title">
          {title}
        </span>
        <Stack className="button-container"direction={"row"}>
        <button onClick={onClose}className="deny-button">
          {cancelText}
        </button>
        <button onClick={onConfirm} className="confirm-button">
          {confirmText}
        </button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

export default ConfirmDialog;