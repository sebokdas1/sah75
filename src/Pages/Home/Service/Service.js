import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description } = service;
    const navigate = useNavigate();
    const serviceDetails = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p><small>{description}</small></p>
            <button onClick={() => serviceDetails(id)} className='btn btn-info'>Check Out</button>
        </div>
    );
};

export default Service;