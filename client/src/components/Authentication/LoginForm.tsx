import { useState } from 'react';
import {
  Box,
  Checkbox,
  FormControlLabel,
  Link,
  Typography,
} from '@mui/material';
import ForgotPassword from './ForgotPassword.tsx';
import { FormInputEvent, LoginDTO } from './AuthenticationModel.ts';
import { InputField } from '../Form/FormInput.tsx';
import { BaseFormContainer } from '../Base/BaseFormContainer.tsx';

const loginInitialState: LoginDTO = { username: '', password: '' };

const LoginForm = () => {
  const [input, setInput] = useState(loginInitialState);
  const [forgottenPasswordOpen, setForgottenPasswordOpen] = useState(false);

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (input.username !== '' && input.password !== '') {
      //dispatch action from hooks
    } else {
      alert('please provide a valid input');
    }
  };

  const handleInput = (e: FormInputEvent) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(input);
  };

  return (
    <BaseFormContainer onSubmit={onSubmit} submit={{ label: 'Login' }} >
      <Typography component="h1" variant="h5" sx={{ marginBottom: '1em'}}>
        Login to The Skin Club!
      </Typography>
      <InputField handleInput={handleInput} label={'Email'} type={'password'} required={true}
                  placeholder={'example@yahoo.com'} />
      <InputField handleInput={handleInput} label={'Password'} type={'password'} required={true} />
      <Box sx={{ textAlign: 'left' }}>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
      </Box>
      <ForgotPassword open={forgottenPasswordOpen} handleClose={() => setForgottenPasswordOpen(false)} />
      <Link
        component="button"
        type="button"
        onClick={() => setForgottenPasswordOpen(true)}
        variant="body2"
        sx={{ alignSelf: 'center' }}>
        Forgot your password?
      </Link>
    </BaseFormContainer>
  );
};

export default LoginForm;
