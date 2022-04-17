import React from 'react';

const Checkout = () => {
    return (
        <div className='text-center'>
            <h2 className='text-primary'>Thanks for getting services</h2>
            <h5 className='text-info'>Please Complete Your Payment</h5>
            <div className='mt-5'>
                <p className='text-warning'>Method: Bkash</p>
                <p>Send money: <span className='text-danger'>01730661569</span></p>
            </div>
        </div>
    );
};

export default Checkout;