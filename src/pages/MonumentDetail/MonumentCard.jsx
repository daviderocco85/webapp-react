import { Place } from '../../components/Place';
import './MonumentCard.css';


export const MonumentCard = props => (
    <div className="monument-card">
        {props.monument.image &&
            <div className="cover">
                <img src={`${import.meta.env.VITE_API_URL}/images/monuments/${props.monument.image}`} alt={props.monument.monument} />
            </div>
        }
        <p className="monument">{props.monument.monument}</p>
        <p className="city"><Place /> {props.monument.city}, {props.monument.region}</p>
        {props.monument.abstract && <p className="abstract"> 🏛️ {props.monument.abstract}</p>}
    </div>
);