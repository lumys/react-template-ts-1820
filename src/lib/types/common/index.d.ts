interface RouteErrorResponse {
  status: number;
  statusText?: string;
}

export type RouteErrorResponseType =
  (typeof RouteErrorResponse)[keyof typeof RouteErrorResponse];
