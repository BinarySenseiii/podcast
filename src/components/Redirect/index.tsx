import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { ROUTE } from 'src/constants';

export function Redirect() {
  const router = useRouter();

  useEffect(() => {
    router.push(ROUTE.EXPLORE.ROOT);
  }, []);

  return null;
}
