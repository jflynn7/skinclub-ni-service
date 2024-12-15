import { FormControl, InputBaseComponentProps, TextField } from '@mui/material';
import { theme } from '../../utils/theme.config.ts';
import { ChangeEvent } from 'react';
interface InputFieldProps extends InputBaseComponentProps {
  handleInput?: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  type?: string;
  required: boolean;
  id?: string
  placeholder?: string;
}
export const InputField = (props: InputFieldProps) => {
  const { handleInput, label, type = 'text', required, id, placeholder, autoFocus } = props;
  return <FormControl fullWidth={true}>
            <TextField
                id={id || labelToName(label)}
                autoFocus={autoFocus}
                fullWidth={true}
                margin="normal"
                required={required}
                name={labelToName(label)}
                label={label}
                placeholder={placeholder}
                type={type || 'input'}
                variant="outlined"
                onChange={handleInput}
                slotProps={{
                  input: {
                    style: {
                      borderRadius: theme.borderRadius
                    },
                  }
                }}
            />
  </FormControl>
}

function labelToName(label: string): string {
  return label.split(/[\s-_]+/)
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('')
}
