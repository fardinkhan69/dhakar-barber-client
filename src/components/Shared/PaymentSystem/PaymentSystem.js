  
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';


const stripePromise = loadStripe('pk_test_51IeY0ABBcau6tOaKXcxTtYTDPYuylW8jweOzsLPGAxfrGXAEPgqbFQxmFlM04OuBE5JbafwlU169iro5OEt2x3ze00Vku5Iecl');

const PaymentSystem = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment} ></SimpleCardForm>
        </Elements>
    );
};


export default PaymentSystem;