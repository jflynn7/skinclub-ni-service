import { useEffect, useState } from 'react';
import BaseTable, { TableHeader } from '@/components/base/BaseTable/BaseTable';
import { fetchData } from '@/services/http.service';

export function UserListPage() {
  const headers: TableHeader[] = [
    { label: 'Email', dataPath: 'email' },
    { label: 'First Name', dataPath: 'userProfile.firstName' },
    { label: 'Last Name', dataPath: 'userProfile.lastName' },
  ];
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // @ts-ignore
    fetchData(
      'http://localhost:3000/api/user/list',
      (userRes) => {
        console.log({ userRes });
        setUsers(userRes);
      },
      () => console.log('Sad')
    );
  }, []);
  return <BaseTable headers={headers} dataItems={users} />;
}
