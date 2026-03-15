import { BrowserRouter } from 'react-router-dom';
import { generateRoutes } from './generateRoutes';
import { NAV_LINKS } from '../data/links';

export function AppRoutes() {
    return <BrowserRouter>{generateRoutes(NAV_LINKS)}</BrowserRouter>;
}
