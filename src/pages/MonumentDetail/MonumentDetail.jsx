import './MonumentDetail.css';
import { useParams } from 'react-router';
import { MonumentCard } from './MonumentCard';
import { ReviewCard } from './ReviewCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Vote } from '../../components/Vote';

export const MonumentDetail = () => {
    const { id } = useParams();
    const [monument, setMonument] = useState(null);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/monuments/${id}`)
            .then(res => setMonument(res.data))
            .catch(err => console.error('monument index', err));
    }, [id]);

    return (

        <div className="monument-detail container">
            {monument && <MonumentCard monument={monument} />}
            <div className="hr"></div>
            <div className="review-heading">
                <h2>Recensioni</h2>
                {monument && <p className='average-vote'>
                    <span>Media Voti: </span>
                    <Vote vote={monument.average_vote} /></p>}
            </div>
            <div className="reviews">
                {monument && monument.reviews.map(review => <ReviewCard key={review.id} review={review} />)}
            </div>
        </div>
    );
};