import { Place } from "../../components/Place";
import "./MonumentCard.css"

export const MonumentCard = props => (

    <div className="monument-card">
        {props.monument.image &&
            <div className="card-foto-wrap">
                <img src={`${import.meta.env.VITE_API_URL}/images/monuments/${props.monument.image}`} alt={props.monument.monument} className="card-foto" loading="lazy" />
            </div>
        }
        <div className="card-content">
            <div className="card-top">
                <div className="card-unesco">
                    <span>✦ Patrimonio UNESCO</span>
                </div>
                <h3 className="card-title">
                    {props.monument.monument}
                </h3>
                <p className="card-citta"><Place /> {props.monument.city}, {props.monument.region}</p>
                <p className="card-desc">
                    {props.monument.abstract}
                </p>
                <p className="card-construction_year">Anno di costruzione: {props.monument.construction_year}</p>
            </div>
            <div className="card-meta">
                <span>🕒 Durata visita: {props.monument.duration_visit} min </span>
                <span>🏛️ {props.monument.architectural_style}</span>
            </div>
        </div>
    </div>
);