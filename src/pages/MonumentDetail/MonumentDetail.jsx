import './MonumentDetail.css';
import { useParams } from 'react-router';
import { MonumentCard } from './MonumentCard';
import { ReviewCard } from './ReviewCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Vote } from '../../components/Vote';
import { useGlobal } from '../../context/GlobalContext';
import { ReviewForm } from './ReviewForm';

export const MonumentDetail = () => {
    const { id } = useParams();
    const { loader, breadcrumb } = useGlobal();
    const [monument, setMonument] = useState(null);

    const loadMonument = () => {
        if (Number.isNaN(Number(id))) {
            loader.error('Page not found.');
            return;
        }

        loader.loading();

        axios.get(`${import.meta.env.VITE_API_URL}/monuments/detail/${id}`)
            .then(res => {
                loader.success(res.data);
                breadcrumb.monument(res.data.monument);
                setMonument(res.data);
            })
            .catch(err => {
                const isNotFound = err.status === 404;
                const msg = isNotFound ? 'Monument not found.' : 'Monument loading failed.';
                console.error(msg, err);
                loader.error(msg);
            });
    };

    useEffect(() => loadMonument(false), [id]);

    if (loader.state.step !== 'idle') return null;

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
            <ReviewForm onPublished={() => { loadMonument(true) }} />
        </div>
    );
};