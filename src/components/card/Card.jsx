// React Config
import React from 'react'
import api from '../../services/api.js';

//Estyles
import './card.scss';

//React Icons
import { FaTrashAlt } from "react-icons/fa";

function Card({ data, get_func }) {

    const reloadGet = () => {
        get_func();
    }

    async function delete_users(id){
        await api.delete(`users/${id}`);

        reloadGet();
    }

    return (
        <>
            {data.map((user) => (
                <section className='card' key={user.id}>
                    <article className='card-text'>
                        <p>Name: {user.name}</p>
                        <p>Last Name: {user.lastname}</p>
                        <p>Email: {user.email}</p>
                        <p>Password: {user.password}</p>
                    </article>
                    <article className='card-btn'>
                        <button onClick={() => delete_users(user.id)} className="btn">
                            <FaTrashAlt color="#FF0000" size={25} />
                        </button>
                    </article>
                </section>
            ))}
        </>
    )
}

export default Card;