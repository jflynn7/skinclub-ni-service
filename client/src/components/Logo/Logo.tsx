import React from 'react';
import cx from 'clsx';
import { Image, MantineSize, useMantineColorScheme } from '@mantine/core';

import './_Logo.scss';

export type LogoProps = {
  size: MantineSize;
  lightSrc: string;
  darkSrc: string;
};

export default function Logo({ size, lightSrc, darkSrc }: LogoProps) {
  const theme = useMantineColorScheme();
  const logo = theme.colorScheme === 'dark' ? darkSrc : lightSrc;
  const clazz = {
    logo: true,
    [size]: true,
  };
  return <Image src={logo} alt="skinclub" className={cx(clazz)} />;
}
