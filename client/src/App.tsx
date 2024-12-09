import skinclubLogo from './assets/skinclub-logo.png';
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/user/list').then(res => {
      res.json().then(res => setUsers(res))
      console.log(users);
    })
  }, []);
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={skinclubLogo} className="logo Skinclub" alt="Skinclub logo" />
        </a>
      </div>
      <h1>Skinclub NI Users</h1>
      <table>
        <thead>
        <tr>
          <th>Email</th>
          <th>First Name</th>
          <th>Surname</th>
        </tr>
        </thead>
        <tbody>
        {users.map((user: {  id: string, email: string, userProfile: {  firstName: string, lastName: string} }) => (<tr key={user.id}>
          <td>{user.email}</td>
          <td>{user.userProfile?.firstName}</td>
          <td>{user.userProfile?.lastName}</td>
        </tr>))}
        </tbody>
      </table>
    </>
  )
}

export default App
