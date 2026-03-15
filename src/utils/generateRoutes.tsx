import React from 'react';
import { Route, Outlet } from 'react-router-dom';
import type { NavLink } from '../types/links';

export const generateRoutes = (links: NavLink[]): React.ReactNode[] => {
    const routes: React.ReactNode[] = [];

    links.forEach(link => {
        if (link.path && link.element) {
            routes.push(
                <Route
                    key={link.path}
                    path={link.path}
                    element={link.element}
                />
            );
        }

        if (link.children && link.children.length > 0) {
            routes.push(
                <Route
                    key={link.label}
                    path={link.path || ''}
                    element={<Outlet />}
                >
                    {generateRoutes(link.children)}
                </Route>
            );
        }
    });

    return routes;
};
