import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { CustomDataRouteObject } from '@c-types/common';

export type HeaderProps = {
  routes: CustomDataRouteObject[];
  deepLevel?: number;
};

const Component = ({ routes, deepLevel = 1 }: HeaderProps) => {
  // const activeStyle = {};
  // const activeClassName = '';

  const renderList = useCallback(
    (list: CustomDataRouteObject[], level = 0) => {
      return (
        <ul>
          {list.map((value) => {
            const { id, path, headerOptions, children } = value;
            const { headerShown = true } = headerOptions || {};
            const title = headerOptions?.title || id;

            if (!headerShown) return null;

            if (level < deepLevel && children) {
              return (
                <li key={id}>
                  {title}
                  {renderList(children, level + 1)}
                </li>
              );
            }

            if (!path) {
              return null;
            }

            return (
              <li key={id}>
                <NavLink key={id} to={path}>
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      );
    },
    [deepLevel],
  );

  return <nav>{renderList(routes)}</nav>;
};

export default Component;
