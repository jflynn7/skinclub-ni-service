import { Burger, Container, Group, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import './_SiteHeader.scss';

import Logo from '@/components/Logo/Logo';
import UserMenu from '@/components/UserMenu/UserMenu';
import { MetaConfig } from '@/config/meta.config';

interface SiteHeaderProps {
  metaConfig: MetaConfig;
}
export function SiteHeader({ metaConfig }: SiteHeaderProps) {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <div className="header">
      <Container className="mainSection" size="full">
        <Group justify="space-between">
          <Logo size="lg" darkSrc={metaConfig.logo.darkSrc} lightSrc={metaConfig.logo.lightSrc} />

          <UserMenu />
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Group>
      </Container>
    </div>
  );
}
