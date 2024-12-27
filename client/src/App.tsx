import './App.scss'
import LoginForm from './components/Authentication/LoginForm.tsx';
import { SignupForm } from './components/Authentication/SignupForm.tsx';
import { UserTable } from './components/User/UserTable.tsx';
import Content from './components/Content/Content.tsx';

function App() {
  return (
    <>
      <Content contentKey={'site-intro'} />
      <LoginForm />
      <SignupForm />
      <UserTable />
    </>
  )
}

export default App
