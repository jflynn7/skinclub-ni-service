import {
  Avatar,
  Burger,
  Container,
  Drawer,
  Group,
  Menu,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import "./_SiteHeader.scss";

import Logo from "@/components/Logo/Logo";
import UserMenu, { UserMenuItems } from "@/components/UserMenu/UserMenu";
import { MetaConfig } from "@/config/meta.config";
import React from "react";
import { fullName, user } from "@/config/user-menu.config";

interface SiteHeaderProps {
  metaConfig: MetaConfig;
}
export default function SiteHeader({ metaConfig }: SiteHeaderProps) {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <div className="header">
      <Container className="mainSection" size="xl">
        <Group justify="space-between">
          <Logo
            size="lg"
            darkSrc={metaConfig.logo.darkSrc}
            lightSrc={metaConfig.logo.lightSrc}
          />

          <UserMenu />
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
          <Drawer.Root opened={opened} onClose={toggle} position="right">
            <Drawer.Overlay backgroundOpacity={0.5} blur={4} />
            <Drawer.Content>
              <Group justify="space-between">
                <Drawer.CloseButton size="xl" />
                <Group style={{ margin: "-2em 1em 1em 1em" }}>
                  <Group gap={7}>
                    <Avatar
                      src={user.image}
                      alt={fullName(user)}
                      radius="xl"
                      size={50}
                      mr={8}
                    />
                    <Text fw={500} size="md" lh={1} mr={3}>
                      {fullName(user)}
                    </Text>
                  </Group>
                  <Group gap={7}>
                    <Menu>
                      <UserMenuItems />
                    </Menu>
                  </Group>
                </Group>
              </Group>
            </Drawer.Content>
          </Drawer.Root>
        </Group>
      </Container>
    </div>
  );
}
