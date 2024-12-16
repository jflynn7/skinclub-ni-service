import './App.scss'
import LoginForm from './components/Authentication/LoginForm.tsx';
import { SignupForm } from './components/Authentication/SignupForm.tsx';
import { UserTable } from './components/User/UserTable.tsx';

function App() {
  return (
    <>
      <LoginForm />
      <SignupForm />
      <UserTable />
    </>
  )
}

export default App
