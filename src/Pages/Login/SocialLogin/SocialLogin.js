import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Something went wrong please try again</p>
        </div>

    }

    if (user) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className="bg-dark w-50"></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className="bg-dark w-50"></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info d-block mx-auto w-50 my-2'>
                    <img style={{ width: '30px' }} src="https://w1.pngwing.com/pngs/209/923/png-transparent-google-logo-g-suite-google-pay-google-doodle-text-circle-line-area.png" alt="" />
                    <span className='px-2'>Sign In With Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;