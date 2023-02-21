import { z } from 'zod';

import { exploreFormShape, exploreEntityShape } from './shapes';

export type ExploreFormValues = z.infer<typeof exploreFormShape>;
export type ExploreEntityParams = z.infer<typeof exploreEntityShape>;
