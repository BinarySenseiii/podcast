import { useMemo } from 'react';
import Head from 'next/head';
import { entries } from 'lodash';
import { useIntl } from 'react-intl';
import { getCodeList } from 'country-list';
import {
  Box,
  Chip,
  Text,
  Stack,
  Title,
  MultiSelect,
  SegmentedControl,
} from '@mantine/core';

import { BRAND } from 'src/constants';
import { Section } from 'src/components/UI';
import { useSettings } from 'src/store/settings/hooks';

import { useStyles } from './styles';

export function SettingsRoot() {
  const intl = useIntl();
  const settings = useSettings();
  const { classes } = useStyles();

  const title = intl.formatMessage({ id: 'ui.settings' });

  const schemes = useMemo(
    () => [
      { value: 'dark', label: intl.formatMessage({ id: 'ui.dark' }) },
      { value: 'light', label: intl.formatMessage({ id: 'ui.light' }) },
    ],
    []
  );

  const countries = useMemo(
    () => entries(getCodeList()).map(([value, label]) => ({ label, value })),
    []
  );

  return (
    <>
      <Head>
        <title>
          {title} / {BRAND.NAME}
        </title>
      </Head>

      <Section>
        <Section.Header>
          <Title order={2}>{title}</Title>
        </Section.Header>

        <Section.Content>
          <Stack>
            <Stack>
              <Box>
                <Title order={5}>
                  {intl.formatMessage({ id: 'settings.appearence' })}
                </Title>

                <Text className={classes.placeholder}>
                  {intl.formatMessage({ id: 'settings.appearence' })}
                </Text>
              </Box>

              <SegmentedControl
                data={schemes}
                value={settings.values.appearance.scheme}
                onChange={(value) =>
                  settings.setValues('appearance.scheme', value)
                }
              />
            </Stack>

            <Stack>
              <Box>
                <Title order={5}>
                  {intl.formatMessage({ id: 'settings.location' })}
                </Title>

                <Text className={classes.placeholder}>
                  {intl.formatMessage({ id: 'settings.location' })}
                </Text>
              </Box>

              <MultiSelect
                data={countries}
                value={[settings.values.locale.country]}
                valueComponent={(props) => (
                  <Box onClick={(e) => e.preventDefault()}>
                    <Chip
                      radius="md"
                      checked={false}
                      variant="filled"
                      classNames={{ label: classes.chip }}
                    >
                      {props.label}
                    </Chip>
                  </Box>
                )}
                onChange={([, value = 'us']) =>
                  settings.setValues('locale.country', value)
                }
              />
            </Stack>
          </Stack>
        </Section.Content>
      </Section>
    </>
  );
}
