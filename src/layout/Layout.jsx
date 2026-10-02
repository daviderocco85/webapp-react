import { NavLink, Outlet } from 'react-router';
import './Layout.css';

export const Layout = () => (
    <div className="layout">
        <header>
            <div className="header-inner">
                <div className="brand">
                    <span className="brand-dot" />
                    L'Italia in Monumento
                </div>

                <nav>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `link ${isActive ? 'link--active' : ''}`
                        }
                    >
                        Home
                    </NavLink>
                </nav>
            </div>
        </header>

        <main>
            <div className="content">
                <Outlet />
            </div>
        </main>

        <footer>
            <div className="footer-inner">
                <span>L'Italia in Monumento</span>
                <span className="footer-separator">•</span>
                <span>© 2026</span>
            </div>
        </footer>
    </div>
);