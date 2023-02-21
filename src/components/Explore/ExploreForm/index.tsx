import { useEffect } from 'react';
import { isEqual } from 'lodash';
import { useIntl } from 'react-intl';
import { Box, MultiSelect } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';

import type { SelectItem } from '@mantine/core';

import { FIELD } from 'src/constants';
import { exploreFormShape } from 'src/store/explore/shapes';

import type { ExploreFormValues } from 'src/store/explore/types';

interface ExploreFormProps {
  genres: SelectItem[];
  values: ExploreFormValues;
  onSubmit: (values: ExploreFormValues) => void;
}

export function ExploreForm({ genres, values, onSubmit }: ExploreFormProps) {
  const intl = useIntl();

  const form = useForm({
    initialValues: values,
    validate: zodResolver(exploreFormShape),
  });

  useEffect(() => {
    form.setValues(values);
  }, [values]);

  useEffect(() => {
    if (!isEqual(values, form.values)) {
      form.onSubmit(onSubmit)();
    }
  }, [form.values]);

  return (
    <Box component="form" onSubmit={form.onSubmit(onSubmit)}>
      <MultiSelect
        {...form.getInputProps(FIELD.GENRE)}
        clearable
        data={genres}
        placeholder={intl.formatMessage({ id: 'ui.genres' })}
      />
    </Box>
  );
}
