import './MonumentCard.css';
import { Link } from 'react-router';


export const MonumentCard = props => (

    <div className="card">
        {props.monument.image &&
            <div className="card-img-wrap">
                <img src={`${import.meta.env.VITE_API_URL}/images/monuments/${props.monument.image}`}
                    alt={props.monument.monument} loading="lazy" />
            </div>
        }
        <span className="card-heart">❤️</span>
        <div className="card-info">
            <h3>{props.monument.monument}</h3>
            <div className="card-meta">
                <span>{props.monument.city}, {props.monument.region}</span>
                <span className="voto">⭐{props.monument.average_vote}</span>
            </div>
        </div>
        <div className="detail">
            <Link to={`/detail/${props.monument.id}`}>Scopri di più</Link>
        </div>
    </div>
);