import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description } = service;
    const navigate = useNavigate();
    const toCheckout = () => {
        navigate('/checkout');
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p><small>{description}</small></p>
            <button onClick={toCheckout} className='btn btn-info'>Check Out</button>
        </div>
    );
};

export default Service;