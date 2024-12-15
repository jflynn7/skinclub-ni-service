import {
  Avatar,
  CardActions,
  CardContent,
  CardHeader,
} from '@mui/material';
import skinclubLogo from '../../assets/skinclub-logo.png';
import { PropsWithChildren } from 'react';
import { BaseButton } from './BaseButton.tsx';
import { BaseCard } from './BaseCard.tsx';

const styles = {
  avatar: {
    margin: '0 auto',
    marginBottom: '2em',
    width: 100,
    height: 100,
  },
};

interface BaseFormContainerProps extends PropsWithChildren {
  onSubmit: (event: unknown) => void;
  title?: string;
  submit: {
    label: string;
  }
}
export const BaseFormContainer = (props: BaseFormContainerProps) => {
  const { children, onSubmit, submit, title } = props;
  return <BaseCard>
    <form className="form" onSubmit={onSubmit}>
      <CardHeader title={title}></CardHeader>
      <CardContent>
        <Avatar sx={styles?.avatar} src={skinclubLogo} />
        {children}
      </CardContent>
      <CardActions>
        <BaseButton variant="contained" fullWidth={true} color={'primary'} onClick={onSubmit} label={submit.label}/>
      </CardActions>
    </form>
  </BaseCard>
}
