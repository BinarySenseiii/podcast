import Head from 'next/head';
import { useIntl } from 'react-intl';
import { Title } from '@mantine/core';

import { BRAND } from 'src/constants';
import { Section } from 'src/components/UI';

import { SearchRootForm } from './SearchRootForm';
import { SearchRootResults } from './SearchRootResults';

import { useStyles } from './styles';

export function SearchRoot() {
  const intl = useIntl();
  const { classes } = useStyles();

  const title = intl.formatMessage({ id: 'ui.search' });

  return (
    <>
      <Head>
        <title>
          {title} / {BRAND.NAME}
        </title>
      </Head>

      <Section className={classes.sticky}>
        <Section.Header>
          <Title order={2}>{title}</Title>
        </Section.Header>

        <Section.Content className={classes.form}>
          <SearchRootForm />
        </Section.Content>
      </Section>

      <Section>
        <Section.Content>
          <SearchRootResults />
        </Section.Content>
      </Section>
    </>
  );
}
