import { NavLink, Outlet } from 'react-router';
import './Layout.css';

export const Layout = () => (
    <div className='layout'>
        <header>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/dettaglio-monumento'>Dettaglio Monumento</NavLink>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
);