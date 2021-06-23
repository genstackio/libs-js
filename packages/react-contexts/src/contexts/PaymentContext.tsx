import { createContext, ReactNode, useMemo } from 'react';
import createDefaultPaymentContextValue from '../utils/createDefaultPaymentContextValue';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const PaymentContext = createContext(createDefaultPaymentContextValue());
const InternalPaymentProvider = PaymentContext.Provider;
export const PaymentConsumer = PaymentContext.Consumer;
PaymentContext.displayName = 'PaymentContext';
export default PaymentContext;

/**
 * Make sure to call `loadStripe` outside of a component’s render or to cache it to avoid
 * recreating the `Stripe` object on every render.
 *
 * @see https://stripe.com/docs/stripe-js/react
 */
const stripePromises: any = {};

export function PaymentProvider({ stripe = undefined, locale = 'fr-fr', children }: PaymentProviderProps) {
    const stripePromise = stripe && (stripePromises[stripe.pk] || (stripePromises[stripe.pk] = loadStripe(stripe.pk)));
    const value = useMemo(() => {
        return {
            stripe,
            // add more payment provider here
        };
    }, [stripe]);
    const options = useMemo(
        () => ({
            fonts: [
                {
                    cssSrc: 'https://fonts.googleapis.com/css?family=Nunito:wght@0,400;0,800;1,400;1,800&display=swap',
                },
            ],
            locale: (locale || 'fr-fr').substr(0, 2) || 'fr',
        }),
        [],
    );
    return (
        <InternalPaymentProvider value={value}>
            {stripePromise && (
                <Elements stripe={stripePromise} options={options}>
                    {children}
                </Elements>
            )}
            {!stripePromise && children}
        </InternalPaymentProvider>
    );
}

export interface PaymentProviderProps {
    stripe?: {
        pk: string;
    };
    locale: any;
    children?: ReactNode;
}
