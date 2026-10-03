import './MonumentIndex.css';
import { Loader } from '../../components/Loader';
import { useEffect, useState } from 'react';
import { MonumentCard } from './MonumentCard';
import axios from 'axios';



export const MonumentIndex = () => {
    const [monuments, setMonuments] = useState(null);

    useEffect(() => {
        console.log('monument index effect');

        axios.get(`${import.meta.env.VITE_API_URL}/monuments`)
            .then(res => setMonuments(res.data))
            .catch(err => console.error('monument index', err));
    }, []);

    return (
        <div className="monument-index container">
            <h1>Monumenti d'Italia</h1>
            <p className='subtitle'>I piu belli</p>
            {monuments === null
                ? (
                    <div className="loader-container">
                        <Loader />
                    </div>
                )
                : (
                    <div className="monuments-grid">
                        {monuments.map(monument => <MonumentCard key={monument.id} monument={monument} />)}
                    </div>
                )}
        </div>
    );
};