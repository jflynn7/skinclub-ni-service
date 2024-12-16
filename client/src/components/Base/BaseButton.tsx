import Button, { ButtonProps } from '@mui/material/Button';
import { theme } from '../../utils/theme.config.ts';

interface BaseButtonProps extends ButtonProps {
  label: string;
  onClick?: (event: unknown) => void;

}
export const BaseButton = (props: BaseButtonProps) => {
  const { label, color} = props;
  return <Button sx={{
    borderRadius: theme.borderRadius,
    padding: '0.75em',
    minHeight: '56px',
    backgroundColor: color === 'primary' ? theme.palette.primary : '#FFFFFF',
    color: color === 'primary' ? '#FFFFFF' : theme.palette.primary,
    border: color === 'primary' ? `1px solid transparent` : `1px solid ${theme.palette.primary}`
  }} {...props}> {label}</Button>;
}
