import React from 'react';
import { Route } from 'react-router-dom';
import type { NavLink } from '../types/links';

export const generateRoutes = (links: NavLink[]): React.ReactNode[] => {
    return links.map(link => {
        if (link.children && link.children.length > 0) {
            return (
                <Route
                    key={link.path || link.label}
                    path={link.path}
                    element={link.element}
                >
                    {generateRoutes(link.children)}
                </Route>
            );
        }

        return (
            link.path &&
            link.element && (
                <Route
                    key={link.path}
                    path={link.path}
                    element={link.element}
                />
            )
        );
    });
};