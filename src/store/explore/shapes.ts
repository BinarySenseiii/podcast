import { z } from 'zod';

import { FIELD, ENTITY } from 'src/constants';

export const exploreEntityShape = z.object({
  [FIELD.LIMIT]: z.number().optional(),
  [FIELD.COUNTRY]: z.string().optional(),
  [FIELD.ENTITY]: z.nativeEnum(ENTITY).optional(),
});

export const exploreFormShape = z.object({
  [FIELD.GENRE]: z.array(z.string()),
});
