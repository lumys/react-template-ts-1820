import { RouteObject } from 'react-router/dist/lib/context';

interface RouteErrorResponse {
  status: number;
  statusText?: string;
}

export type RouteErrorResponseType =
  (typeof RouteErrorResponse)[keyof typeof RouteErrorResponse];

export interface HeaderOptionObject {
  title?: string;

  headerShown?: boolean;
}

export type CustomIndexRouteObject = RouteObject & {
  headerOptions?: HeaderOptionObject;
};

export type CustomDataRouteObject = CustomIndexRouteObject & {
  children?: CustomDataRouteObject[];
  id: string;
};

export type TemplateProps<> = {};
