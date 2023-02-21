import { isEmpty } from 'lodash';
import { useIntl } from 'react-intl';
import { Loader, Center } from '@mantine/core';
import { TbEyeOff, TbAlertCircle } from 'react-icons/tb';

import type { ReactNode } from 'react';
import type { CenterProps } from '@mantine/core';

import { Placeholder } from 'src/components/UI';

import { useStyles } from './styles';

interface StatusProps extends CenterProps {
  views?: Partial<Record<'error' | 'nothing' | 'loading', ReactNode>>;
  selectors?: Record<'data' | 'isError' | 'isFetching', any>;
}

export function Status({
  views,
  children,
  selectors,
  className,
  ...props
}: StatusProps) {
  const isData = !isEmpty(selectors?.data);
  const isError = !isEmpty(selectors?.isError);
  const isLoading = Boolean(selectors?.isFetching);
  const isNothing = !isLoading && !isError && !isData;

  const intl = useIntl();
  const { cx, classes } = useStyles();

  return (
    <>
      {isData && children}

      <Center {...props} className={cx(classes.status, className)}>
        {isLoading && (views?.loading || <Loader />)}

        {isError &&
          (views?.error || (
            <Placeholder
              icon={TbAlertCircle}
              title={intl.formatMessage({ id: 'message.somethingWentWrong' })}
            />
          ))}

        {isNothing &&
          (views?.nothing || (
            <Placeholder
              icon={TbEyeOff}
              title={intl.formatMessage({ id: 'message.nothingFound' })}
            />
          ))}
      </Center>
    </>
  );
}
