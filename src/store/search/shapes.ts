import { z } from 'zod';

import { FIELD, ENTITY } from 'src/constants';

export const searchParamsShape = z.object({
  [FIELD.TERM]: z.string().min(2),
  [FIELD.LIMIT]: z.number().optional(),
  [FIELD.ENTITY]: z.nativeEnum(ENTITY),
  [FIELD.OFFSET]: z.number().optional(),
});
