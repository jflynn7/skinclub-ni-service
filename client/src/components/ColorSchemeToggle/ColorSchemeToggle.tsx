import { Button, Group, useMantineColorScheme } from "@mantine/core";
import React from "react";

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const buttonProps = {
    variant: "filled",
    color: "black",
    radius: "xl",
    size: "md",
    h: 48,
    w: "10%",
  };
  return (
    <Group justify="center" mt="xl">
      <Button {...buttonProps} onClick={() => setColorScheme("light")}>
        Light
      </Button>
      <Button {...buttonProps} onClick={() => setColorScheme("dark")}>
        Dark
      </Button>
    </Group>
  );
}
