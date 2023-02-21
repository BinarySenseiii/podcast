import { useRef, useMemo, useEffect } from 'react';
import { TypographyStylesProvider } from '@mantine/core';

import type { TypographyStylesProviderProps } from '@mantine/core';

import { stripScripts } from 'src/lib/helpers';

import { useStyles } from './styles';

interface TypographyProps extends TypographyStylesProviderProps {
  children: string;
}

export function Typography({ children, className, ...props }: TypographyProps) {
  const { cx, classes } = useStyles();
  const htmlRef = useRef<HTMLDivElement>(null);

  const html = useMemo(() => stripScripts(children) as string, []);

  useEffect(() => {
    const links = htmlRef.current?.querySelectorAll('a');
    links?.forEach((link) => link.setAttribute('target', '_blank'));
  }, [html, htmlRef]);

  return (
    <TypographyStylesProvider
      {...props}
      className={cx(classes.typography, className)}
    >
      <div ref={htmlRef} dangerouslySetInnerHTML={{ __html: html }} />
    </TypographyStylesProvider>
  );
}
