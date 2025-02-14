import { ActionIcon, Container, Group, Text, TextInput } from "@mantine/core";
import Logo from "@/components/Logo/Logo";
import React from "react";
import { MetaConfig } from "@/config/meta.config";
import "./_SiteFooter.scss";
import {
  IconArrowRight,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";

const data = [
  {
    title: "About",
    links: [
      { label: "Features", link: "#" },
      { label: "Pricing", link: "#" },
      { label: "Support", link: "#" },
      { label: "Forums", link: "#" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "Contribute", link: "#" },
      { label: "Media assets", link: "#" },
      { label: "Changelog", link: "#" },
      { label: "Releases", link: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Join Discord", link: "#" },
      { label: "Follow on Twitter", link: "#" },
      { label: "Email newsletter", link: "#" },
      { label: "GitHub discussions", link: "#" },
    ],
  },
];

interface SiteFooterProps {
  metaConfig: MetaConfig;
}
export default function SiteFooter({ metaConfig }: SiteFooterProps) {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className="link"
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className="wrapper" key={group.title}>
        <Text className="title">{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className="footer">
      <Container className="inner" size="xl">
        <Group justify="flex-start">STUFF</Group>
        <Group justify="flex-end">
          <TextInput
            radius="xl"
            size="md"
            placeholder="Email Address..."
            rightSectionWidth={42}
            rightSection={
              <ActionIcon
                size={32}
                radius="xl"
                variant="filled"
                color={"black"}
              >
                <IconArrowRight size={18} stroke={1.5} />
              </ActionIcon>
            }
          ></TextInput>
        </Group>
      </Container>
      <Container className="afterFooter" size="xl">
        <Group justify="flex-start">
          <div className="logo">
            <Logo
              size="xl"
              darkSrc={metaConfig.logo.darkSrc}
              lightSrc={metaConfig.logo.lightSrc}
            />
          </div>
        </Group>
        <Group gap={0} className="social" justify="flex-end" wrap="nowrap">
          <div className="groups">{groups}</div>
        </Group>
      </Container>
      <Container className="afterFooter" size="xl">
        <Text c="dimmed" size="sm">
          © 2025 The Skin Club NI (Company Number:{" "}
          <strong>{metaConfig.companyNumber}</strong>) | All rights reserved.
        </Text>

        <Group gap={0} className="social" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
