import './ReviewCard.css';
import { Vote } from '../../components/Vote';

export const ReviewCard = props => (
    <div className="review-card">
        <p className="text">{props.review.text}</p>
        <p className="vote-container"><span>Voto</span><Vote vote={props.review.vote} /></p>
        <p className="name">Di {props.review.reviewer_name}</p>
    </div>
);