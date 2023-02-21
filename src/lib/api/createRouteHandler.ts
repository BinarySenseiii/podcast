import { get, toLower } from 'lodash';

import type { Method } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type MethodHandler = (
  request: NextApiRequest,
  response: NextApiResponse
) => Promise<{ data: any; meta?: any }>;

type RouteMethods = Partial<Record<Method, MethodHandler>>;

function callMethodHandler(request: NextApiRequest, response: NextApiResponse) {
  return async function (handler: MethodHandler) {
    try {
      const result = await handler(request, response);
      return response.status(200).json(result);
    } catch (e) {
      console.log(e);
      return response.status(500).json({ error: 'Something went wrong' });
    }
  };
}

export function createRouteHandler(methods: RouteMethods) {
  return function (request: NextApiRequest, response: NextApiResponse) {
    const handler = get(methods, toLower(request.method));

    return handler
      ? callMethodHandler(request, response)(handler)
      : response.status(405).json({ error: 'Method not allowed' });
  };
}
