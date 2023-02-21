import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import { ENTITY } from 'src/constants';
import { explore } from 'src/store/explore/requests';
import { useSettings } from 'src/store/settings/hooks';

export function useExploreQuery<T>(entity: ENTITY) {
  const settings = useSettings();
  const { country } = settings.values.locale;

  useEffect(() => explore.entity.cancel, []);

  return useQuery<T>(
    ['explore', entity, country],
    () => explore.entity({ entity, country }) as Promise<T>,
    { enabled: Boolean(entity), staleTime: 1000 * 60 * 60 }
  );
}
