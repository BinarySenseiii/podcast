import { useEffect, Children } from 'react';
import { Box } from '@mantine/core';
import { useIntersection } from '@mantine/hooks';

import type { ReactNode } from 'react';

interface InfiniteScrollProps {
  loading: boolean;
  hasMore?: boolean;
  children: ReactNode;
  loadMore: (offset: number) => void;
}

export function InfiniteList({
  loading,
  hasMore,
  loadMore,
  children,
}: InfiniteScrollProps) {
  const { ref, entry } = useIntersection();

  const isNext = !loading && hasMore;
  const isIntersecting = entry?.isIntersecting;

  useEffect(() => {
    if (isNext && isIntersecting) {
      loadMore(Children.count(children));
    }
  }, [isNext, isIntersecting]);

  return (
    <>
      {children}
      {isNext && <Box ref={ref} />}
    </>
  );
}
