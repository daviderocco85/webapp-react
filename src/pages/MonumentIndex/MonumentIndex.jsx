import './MonumentIndex.css';
import { useEffect, useState } from 'react';
import { MonumentCard } from './MonumentCard';
import axios from 'axios';
import { useGlobal } from '../../context/GlobalContext';



export const MonumentIndex = () => {
    const { loader, breadcrumb } = useGlobal();
    const [monuments, setMonuments] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(1);


    useEffect(() => {
        breadcrumb.clear();
        loader.loading();

        axios.get(`${import.meta.env.VITE_API_URL}/monuments`)
            .then(res => {
                loader.success();
                setMonuments(res.data);
            })
            .catch(err => {
                const msg = 'Loading Monuments failed.';
                console.error(msg, err);
                loader.error(msg);
            });
    }, []);

    useEffect(() => {
        const updateVisibleCards = () => {
            if (window.innerWidth < 600) {
                setVisibleCards(1);
            } else if (window.innerWidth < 900) {
                setVisibleCards(2);
            } else if (window.innerWidth < 1200) {
                setVisibleCards(3);
            } else {
                setVisibleCards(4);
            }
        };

        updateVisibleCards();

        window.addEventListener('resize', updateVisibleCards);

        return () => {
            window.removeEventListener('resize', updateVisibleCards);
        };
    }, []);


    useEffect(() => {
        if (!monuments) return;

        const maxIndex = Math.max(
            monuments.length - visibleCards,
            0
        );

        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [visibleCards, monuments, currentIndex]);

    const handlePrevious = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex(prev =>
            Math.min(
                prev + 1,
                monuments.length - visibleCards
            )
        );
    };

    if (loader.state.step !== 'idle') return null;
    return (
        <>
            <div className="monument-index container">
                <h1>L'Italia,<br />una storia senza tempo</h1>
                <p className='subtitle'>Monumeti, città, luoghi straordinari da scoprire</p>
                <div className="monuments-carousel">
                    <button
                        className="carousel-button carousel-button--left"
                        onClick={handlePrevious}
                        disabled={!monuments || currentIndex === 0}
                    >
                        ‹
                    </button>
                    <div className="monuments-grid">
                        {monuments && monuments
                            .slice(currentIndex, currentIndex + visibleCards)
                            .map(monument => (
                                <MonumentCard
                                    key={monument.id}
                                    monument={monument}
                                />
                            ))}
                    </div>
                    <button
                        className="carousel-button carousel-button--right"
                        onClick={handleNext}
                        disabled={
                            !monuments ||
                            currentIndex >= monuments.length - visibleCards
                        }
                    >
                        ›
                    </button>
                </div>
            </div>
        </>
    );
};

