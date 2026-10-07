import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

const idleLoaderState = { step: 'idle' };

export const GlobalProvider = props => {
    const [loaderState, setLoaderState] = useState(idleLoaderState);
    const [breadcrumbState, setBreadcrumbState] = useState(null);


    const loader = {
        state: loaderState,
        loading: () => setLoaderState({ step: 'loading' }),
        success: () => setLoaderState(idleLoaderState),
        error: message => setLoaderState({ step: 'error', message })
    };

    const breadcrumb = {
        monumentTitle: breadcrumbState,
        monument: monument => setBreadcrumbState(monument),
        clear: () => setBreadcrumbState(null)
    };


    return (
        <GlobalContext value={{ loader, breadcrumb }}>
            {props.children}
        </GlobalContext>
    )
};

export const useGlobal = () => useContext(GlobalContext);