import React, { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import cx from "clsx";
import { Avatar, Group, Menu, Text, UnstyledButton } from "@mantine/core";

import "./_UserMenu.scss";
import {
  fullName,
  MenuItem,
  MenuObject,
  user,
  userMenuConfig,
} from "@/config/user-menu.config";
import { UserDTO } from "@/types/user.dto";
import { createKey } from "@/utils/object.utils";

export default function UserMenu() {
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  return (
    <Menu
      width={260}
      position="bottom-end"
      transitionProps={{ transition: "pop-top-right" }}
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton
          className={cx("user", { ["userActive"]: userMenuOpened })}
        >
          <Group gap={7}>
            <Avatar
              src={user.image}
              alt={fullName(user)}
              radius="xl"
              size={20}
            />
            <Text fw={500} size="sm" lh={1} mr={3}>
              {fullName(user)}
            </Text>
            <IconChevronDown size={12} stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <UserMenuItems />
      </Menu.Dropdown>
    </Menu>
  );
}

export const UserMenuItems = () => {
  return userMenuConfig(user as unknown as UserDTO).menuItems.map(
    (itemConfig: MenuItem | MenuObject, idx: number) => {
      if (!(itemConfig as MenuObject).type) {
        const { icon, route, label } = itemConfig as MenuItem;
        const Icon = icon;
        return (
          <Menu.Item
            key={createKey("userMenu", idx)}
            onClick={() => console.log(route)}
            leftSection={<Icon size={16} stroke={1.5} />}
          >
            {label}
          </Menu.Item>
        );
      }
      return <Menu.Divider key={createKey("userMenu", idx)} />;
    },
  );
};
