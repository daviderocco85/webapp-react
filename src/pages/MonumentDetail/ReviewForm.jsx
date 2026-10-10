import './ReviewForm.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';


const formInit = {
    reviewer_name: '',
    vote: 1,
    text: ''
};

export const ReviewForm = props => {

    const [state, setState] = useState({ ...formInit });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const { id: monumentId } = useParams();

    const handleSubmit = async e => {
        e.preventDefault();

        if (isSubmitting) return;

        setIsSubmitting(true);
        setSuccess('');
        setError('');

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/monuments/${monumentId}/reviews`, state);
            setState({ ...formInit });
            setSuccess('Recensione inviata correttamente!');
            props.onPublished();
        }
        catch (err) {
            console.error('Review submission failed:', err);
            setError('Impossibile inviare la recensione. Riprova.');
        }
        finally {
            setIsSubmitting(false);
        }
    };


    useEffect(() => {
        if (!success) return;

        const timer = setTimeout(() => {
            setSuccess('');
        }, 5000);

        return () => clearTimeout(timer);
    }, [success]);

    const handleChange = e => {

        setError('');

        setState(prev => ({
            ...prev, [e.target.name]:
                e.target.name === 'vote'
                    ? Number(e.target.value)
                    : e.target.value
        }));
    };

    return (
        <form
            className="review-form"
            onSubmit={handleSubmit}
        >
            <h3>Inserisci la tua recensione</h3>

            <label>
                Nome
                <input
                    type="text"
                    name="reviewer_name"
                    value={state.reviewer_name}
                    onChange={handleChange} required />
            </label>

            <label>
                Voto
                <select
                    name="vote"
                    value={state.vote}
                    onChange={handleChange}
                >
                    <option value={1}>⭐ 1</option>
                    <option value={2}>⭐⭐ 2</option>
                    <option value={3}>⭐⭐⭐ 3</option>
                    <option value={4}>⭐⭐⭐⭐ 4</option>
                    <option value={5}>⭐⭐⭐⭐⭐ 5</option>
                </select>
            </label>

            <label>
                Messaggio
                <textarea
                    name="text"
                    value={state.text}
                    onChange={handleChange} />
            </label>

            {error &&
                <p className="review-form_error" role="alert">
                    {error}
                </p>}

            {success &&
                <p className="review-form_success" role="status">
                    {success}
                </p>
            }

            <button
                type="submit"
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Invio in corso...' : 'Invia'}
            </button>
        </form>
    );
};
