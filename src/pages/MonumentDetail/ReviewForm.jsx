import './ReviewForm.css';
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useGlobal } from '../../context/GlobalContext';

const formInit = {
    reviewer_name: '',
    vote: 1,
    text: ''
};


export const ReviewForm = props => {
    const { loader } = useGlobal();
    const [state, setState] = useState(formInit);
    const { id: monumentId } = useParams();


    const handleSubmit = e => {
        e.preventDefault();

        loader.loading();

        axios.post(`${import.meta.env.VITE_API_URL}/monuments/${monumentId}/reviews`, state)

            .then(() => {
                setState(formInit);
                props.onPublished();
            })
            .catch(err => console.error(err));
    };

    const handleChange = e => {
        setState(state => ({
            ...state,
            [e.target.name]:
                e.target.name === 'vote'
                    ? Number(e.target.value)
                    : e.target.value
        }));
    };


    return (
        <form
            className='review-form'
            onSubmit={handleSubmit}
        >
            <h3>Inserisci la tua recensione</h3>
            <label>
                Nome
                <input type='text' name='reviewer_name' value={state.reviewer_name} onChange={handleChange} required />
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
                <textarea name='text' value={state.text} onChange={handleChange}></textarea>
            </label>
            <button type="submit">
                Invia
            </button>
        </form>
    )
};
