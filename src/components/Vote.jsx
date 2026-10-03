import './Vote.css';
import { StarBorder } from '../components/StarBorder';
import { StarFull } from '../components/StarFull';


export const Vote = ({ vote }) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        stars.push(
            i < vote
                ? <StarFull key={i} />
                : <StarBorder key={i} />
        );
    }

    return <span className="vote">{stars}</span>;
};
