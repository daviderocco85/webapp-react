import { useParams } from 'react-router';

export const MonumentDetail = () => {
    const { id } = useParams();
    return (

        <div className="monument-detail">
            Dettaglio monumento
            <p>{id}</p>
        </div>
    );
};