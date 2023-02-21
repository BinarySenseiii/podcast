import { useMemo, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { omit, isEqual } from 'lodash';
import { useRouter } from 'next/router';
import { useForm, zodResolver } from '@mantine/form';
import { Stack, TextInput, SegmentedControl } from '@mantine/core';
import { useDebouncedValue, useShallowEffect } from '@mantine/hooks';

import { useSearchParams } from 'src/store/search/hooks';
import { searchParamsShape } from 'src/store/search/shapes';
import { FIELD, ROUTE, ENTITY, DEFAULTS } from 'src/constants';

export function SearchRootForm() {
  const intl = useIntl();
  const router = useRouter();

  const params = useSearchParams(({ state }) => state);

  const form = useForm({
    initialValues: params,
    validate: zodResolver(searchParamsShape),
  });

  const [term] = useDebouncedValue(form.values[FIELD.TERM], DEFAULTS.DELAY);

  const handleSubmit = (query: typeof form.values) => {
    router.replace({ pathname: ROUTE.SEARCH.ROOT, query }, undefined, {
      shallow: true,
    });
  };

  useEffect(() => {
    form.setValues(params);
  }, [params]);

  useShallowEffect(() => {
    if (term && !isEqual(params, form.values)) {
      form.onSubmit(handleSubmit)();
    }
  }, [term, omit(form.values, [FIELD.TERM])]);

  const entities = useMemo(
    () =>
      Object.values(ENTITY).map((value) => ({
        value,
        label: intl.formatMessage({ id: `ui.${value}` }),
      })),
    []
  );

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack spacing="xs">
        <TextInput
          {...form.getInputProps(FIELD.TERM, { withError: false })}
          type="search"
          autoComplete="off"
          aria-label={intl.formatMessage({ id: 'ui.search' })}
          placeholder={intl.formatMessage({ id: 'ui.search' })}
        />

        <SegmentedControl
          {...form.getInputProps(FIELD.ENTITY)}
          data={entities}
        />
      </Stack>
    </form>
  );
}
