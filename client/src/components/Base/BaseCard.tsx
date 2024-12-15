import { PropsWithChildren } from 'react';
import { Card, CardProps } from '@mui/material';
import { theme } from '../../utils/theme.config.ts';

interface BaseCardProps extends PropsWithChildren, CardProps {
  title?: string;
}
export const BaseCard = (props: BaseCardProps) => {
  const { title, children } = props;
  return <Card title={title} elevation={2} sx={{
    borderRadius: theme.borderRadius,
    margin: '1em 0',
    padding: '1em'
  }} {...props}>
    {children}
  </Card>;
}
