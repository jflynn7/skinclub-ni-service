import { useEffect, useState } from 'react';
import { BaseTable, BaseTableHeader } from '../Base/BaseTable.tsx';
import { apiConfig } from '../../utils/api.config.ts';

export const UserTable = () => {
  const headers: BaseTableHeader[] = [
    { label: 'Email', dataPath: 'email'},
    { label: 'First Name', dataPath: 'userProfile.firstName'},
    { label: 'Last Name', dataPath: 'userProfile.lastName'}
  ];
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(apiConfig.GET_USERS).then(res => {
      res.json().then(res => setUsers(res))
    })
  }, []);
  return <BaseTable headers={headers} dataItems={users} />;
}
