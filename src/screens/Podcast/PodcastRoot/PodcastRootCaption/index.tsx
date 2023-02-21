import { useIntl } from 'react-intl';
import { Text, Paper, Group, Divider } from '@mantine/core';

import { DRAWER } from 'src/constants';
import { Caption } from 'src/components/UI';
import { stripTags } from 'src/lib/helpers';
import { useShellDrawer } from 'src/store/shell/hooks';

import type { Podcast } from 'src/store/podcasts/types';

import { useStyles } from './styles';

export function PodcastRootCaption({
  genre,
  summary,
  language,
  description,
  ...podcast
}: Podcast) {
  const intl = useIntl();
  const { cx, classes } = useStyles();

  const drawer = useShellDrawer(({ actions }) => actions);

  const openDetails = () => {
    drawer.open(DRAWER.PODCAST, {
      genre,
      summary,
      language,
      description,
      ...podcast,
    });
  };

  return (
    <>
      <Paper className={classes.caption}>
        <Group>
          <Caption title={intl.formatMessage({ id: 'ui.genre' })}>
            {genre.name}
          </Caption>

          <Divider orientation="vertical" />

          <Caption title={intl.formatMessage({ id: 'ui.language' })}>
            {language?.toUpperCase()}
          </Caption>
        </Group>
      </Paper>

      <Paper
        component="button"
        onClick={openDetails}
        className={cx(classes.more, classes.caption)}
      >
        <Text align="center" className={classes.title} lineClamp={2}>
          {stripTags(summary || description)}
        </Text>
      </Paper>
    </>
  );
}
