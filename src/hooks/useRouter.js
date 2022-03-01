import React from 'react';
import { singletonHook } from 'react-singleton-hook';
import _mainNavigation from '../app/main/routes';
import _subNavigation from '../app/main/modules/routes';

const childrenNavigation = (children, firstLevel) => {
  return children.reduce((acchild, child) => {
    let path = child.path;
    if (path && path !== '*') {
      let subRoute = `${firstLevel}/${path}`;
      acchild.push(subRoute);
      if (child.children) {
        let secondLevel = `${firstLevel}/${path}`;
        let subNavigation = childrenNavigation(child.children, secondLevel);
        acchild.push(...subNavigation);
      }
    }
    return acchild;
  }, []);
};

const generateNavigation = (routes) => {
  return [...routes].reduce((acc, route) => {
    let path = route.path;
    let objectName = '';
    if (path !== '*') {
      if (/(^[/])([A-Za-z])/.test(path)) {
        path = path.split('/')[1];
      }
      objectName = path;
      path = `/${path}`;
      Object.assign(acc, { [objectName]: [path] });
      if (route.children) {
        const prefix = path;
        let subNavigation = childrenNavigation(route.children, prefix);
        Object.assign(acc, { [objectName]: [path, ...subNavigation] });
        generateNavigation(route.children);
      }
    }
    return acc;
  }, {});
};

const mapRoutes = (routes) => {
  return [...routes].map((route) => ({
    ...route,
    element: route.element ? (
      route.to ? (
        <route.element to={route.to} />
      ) : (
        <route.element />
      )
    ) : undefined,
    children: route.children ? mapRoutes(route.children) : [],
  }));
};

const state = {
  mainNavigation: mapRoutes(_mainNavigation),
  subNavigation: mapRoutes(_subNavigation),
  appRoutes: generateNavigation([..._mainNavigation, ..._subNavigation]),
};

const useRouter = singletonHook(state, () => {
  return state;
});

export default useRouter;
