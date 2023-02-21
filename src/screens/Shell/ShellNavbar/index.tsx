import { Stack } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { Logo, Section } from 'src/components/UI';
import { useSettings } from 'src/store/settings/hooks';

import { ShellRoutes } from './ShellRoutes';
import { ShellOptions } from './ShellOptions';

import { useStyles } from './styles';

export function ShellNavbar() {
  const settings = useSettings();
  const { theme, classes } = useStyles();

  const md = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  return (
    <Section>
      {!sm && (
        <Section.Header className={classes.header}>
          <Logo
            short={md}
            align="center"
            {...(!settings.loading && {
              indicator: settings.values.locale.country.toUpperCase(),
            })}
          />
        </Section.Header>
      )}

      <Section.Content>
        <Stack spacing="lg" className={classes.stack}>
          <Stack spacing="xs" className={classes.stack}>
            <ShellRoutes />
          </Stack>

          <Stack spacing="xs" className={classes.stack}>
            <ShellOptions />
          </Stack>
        </Stack>
      </Section.Content>
    </Section>
  );
}
