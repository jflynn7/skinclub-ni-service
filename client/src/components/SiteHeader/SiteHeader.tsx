import {
  Avatar,
  Burger,
  Container,
  Drawer,
  Grid,
  Group,
  Menu,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import "./_SiteHeader.scss";

import Logo from "@/components/Logo/Logo";
import UserMenu from "@/components/UserMenu/UserMenu";
import { MetaConfig } from "@/config/meta.config";
import {
  IconHeart,
  IconLogout,
  IconMessage,
  IconPlayerPause,
  IconSettings,
  IconStar,
  IconSwitchHorizontal,
  IconTrash,
} from "@tabler/icons-react";
import React from "react";
import { theme } from "@/theme/theme";

const user = {
  name: "Jane Spoonfighter",
  email: "janspoon@fighter.dev",
  image:
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
};

interface SiteHeaderProps {
  metaConfig: MetaConfig;
}
export default function SiteHeader({ metaConfig }: SiteHeaderProps) {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <div className="header">
      <Container className="mainSection" size="full">
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
                <div
                  style={{
                    marginTop: "1em",
                    position: "relative",
                    textAlign: "right",
                  }}
                >
                  <Drawer.CloseButton size="xl" />
                </div>
                <Group style={{ margin: "-2em 1em 1em 1em" }}>
                  <Group gap={7}>
                    <Avatar
                      src={user.image}
                      alt={user.name}
                      radius="xl"
                      size={50}
                    />
                    <Text fw={500} size="md" lh={1} mr={3}>
                      {user.name}
                    </Text>
                  </Group>
                  <Group gap={7}>
                    <Menu>
                      <Menu.Item
                        leftSection={
                          <IconHeart
                            size={16}
                            color={theme.colors?.red?.[6]}
                            stroke={1.5}
                          />
                        }
                      >
                        Liked posts
                      </Menu.Item>
                      <Menu.Item
                        leftSection={
                          <IconStar
                            size={16}
                            color={theme.colors?.yellow?.[6]}
                            stroke={1.5}
                          />
                        }
                      >
                        Saved posts
                      </Menu.Item>
                      <Menu.Item
                        leftSection={
                          <IconMessage
                            size={16}
                            color={theme.colors?.blue?.[6]}
                            stroke={1.5}
                          />
                        }
                      >
                        Your comments
                      </Menu.Item>

                      <Menu.Label>Settings</Menu.Label>
                      <Menu.Item
                        leftSection={<IconSettings size={16} stroke={1.5} />}
                      >
                        Account settings
                      </Menu.Item>
                      <Menu.Item
                        leftSection={
                          <IconSwitchHorizontal size={16} stroke={1.5} />
                        }
                      >
                        Change account
                      </Menu.Item>
                      <Menu.Item
                        leftSection={<IconLogout size={16} stroke={1.5} />}
                      >
                        Logout
                      </Menu.Item>

                      <Menu.Divider />

                      <Menu.Label>Danger zone</Menu.Label>
                      <Menu.Item
                        leftSection={<IconPlayerPause size={16} stroke={1.5} />}
                      >
                        Pause subscription
                      </Menu.Item>
                      <Menu.Item
                        color="red"
                        leftSection={<IconTrash size={16} stroke={1.5} />}
                      >
                        Delete account
                      </Menu.Item>
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
