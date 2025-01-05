import { useEffect, useState } from "react";
import BaseTable, { TableHeader } from "@/components/base/BaseTable/BaseTable";
import { fetchData } from "@/services/http.service";
import { UserDTO } from "@/types/user.dto";
import PageLayout from "@/pages/PageLayout/PageLayout";

export function UserListPage() {
  const headers: TableHeader[] = [
    { label: "Email", dataPath: "email" },
    { label: "First Name", dataPath: "userProfile.firstName" },
    { label: "Last Name", dataPath: "userProfile.lastName" },
  ];
  const [users, setUsers] = useState<UserDTO[]>([]);
  useEffect(() => {
    // @ts-ignore
    fetchData(
      "http://localhost:3000/api/user/list",
      (userRes: UserDTO[]) => {
        setUsers(userRes);
      },
      () => console.log("Sad"),
    );
  }, []);
  return (
    <PageLayout>
      <BaseTable headers={headers} dataItems={users} />
    </PageLayout>
  );
}
