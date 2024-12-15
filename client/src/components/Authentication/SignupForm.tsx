import { BaseFormContainer } from '../Base/BaseFormContainer.tsx';
import { Typography } from '@mui/material';
import { InputField } from '../Form/FormInput.tsx';
import { FormInputEvent } from './AuthenticationModel.ts';
import { useState } from 'react';

export const SignupForm = () => {
  const [input, setInput] = useState({});

  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleInput = (e: FormInputEvent) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(input);
  };

  return <BaseFormContainer onSubmit={onSubmit}  submit={{ label: 'Join The Club' }} >
    <Typography component="h1" variant="h5" sx={{ marginBottom: '1em'}}>
      Join the Club!
    </Typography>
    <InputField handleInput={handleInput} label={'First Name'} required={true} />
    <InputField handleInput={handleInput} label={'Last Name'} required={true} />
    <InputField handleInput={handleInput} label={'Email Address'} required={true} />
    <InputField handleInput={handleInput} label={'Password'} type={'password'} required={true} />
  </BaseFormContainer>
}
