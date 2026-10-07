import { NavLink, Outlet } from 'react-router';
import './Layout.css';
import { useGlobal } from '../context/GlobalContext';
import { Loader } from '../components/Loader';



export const Layout = () => {
    const { loader, breadcrumb } = useGlobal();

    return (
        <div className="layout">
            <header>
                <div className="header-inner">
                    <div className="brand">
                        <h3><span className="italia">Italia</span><span className="meravigliosa">Meravigliosa</span></h3>
                    </div>
                    <nav>
                        <NavLink to="/" className={({ isActive }) => `link ${isActive ? 'link--active' : ''}`}>
                            Home
                        </NavLink>
                        {breadcrumb.monumentTitle && (
                            <>
                                <span className="breadcrumb-separator">›</span>
                                <span className="breadcrumb-link">
                                    {breadcrumb.monumentTitle}
                                </span>
                            </>
                        )}
                    </nav>
                </div>
            </header>

            <main>
                <div className='image'>
                    {loader.state.step === 'loading' && (
                        <div className="loader-container">
                            <Loader />
                        </div>
                    )}
                    {loader.state.step === 'error' && (
                        <div className="error">
                            {loader.state.message}
                        </div>
                    )}
                    <div className="content">
                        <Outlet />
                    </div>
                </div>
            </main>


            <footer>
                <div className="footer-inner">
                    <p><span className="italia">Italia</span><span className="meravigliosa">Meravigliosa </span></p>
                    <span>© 2026</span>
                </div>
            </footer>
        </div>
    )
};