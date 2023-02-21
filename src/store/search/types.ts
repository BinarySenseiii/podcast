import { z } from 'zod';

import { searchParamsShape } from './shapes';

export type SearchParamsState = z.infer<typeof searchParamsShape>;

export interface SearchParamsActions {
  set: (params?: SearchParamsState) => void;
}
