import type { GroupProps, GroupStylesParams } from '@mantine/core';

import type { ThemeComponent } from 'src/theme/types';

export const Group: ThemeComponent<GroupProps, '', GroupStylesParams> = {
  defaultProps: {
    noWrap: true,
    spacing: 'xs',
    align: 'flex-start',
  },
};
