import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { BaseButton } from '../Base/BaseButton.tsx';
import { InputField } from '../Form/FormInput.tsx';

interface ForgotPasswordProps {
  open: boolean;
  handleClose: () => void;
}

export default function ForgotPassword({ open, handleClose }: ForgotPasswordProps) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          handleClose();
        },
      }}
    >
      <DialogTitle>Reset password</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ marginBottom: '1.5em' }}>
          Enter your account&apos;s email address, and we&apos;ll send you a link to
          reset your password.
        </DialogContentText>
        <InputField
          autoFocus
          required
          margin="dense"
          id="email"
          name="email"
          label="Email address"
          placeholder="Email address"
          type="email"
          fullWidth
        />
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', padding: '0 1.5em 2em' }}>
        <BaseButton fullWidth={true} color={'secondary'} onClick={handleClose} label={'Cancel'}/>
        <BaseButton fullWidth={true} color={'primary'} type="submit" label={'Continue'}/>
      </DialogActions>
    </Dialog>
  );
}
