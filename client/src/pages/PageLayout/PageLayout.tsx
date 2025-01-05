import React, { PropsWithChildren } from "react";
import "./_PageLayout.scss";
import { Container } from "@mantine/core";
export default function PageLayout(props: PropsWithChildren) {
  const { children } = props;
  return (
    <div className="PageLayout">
      <Container size={"xl"}>{children}</Container>
    </div>
  );
}
