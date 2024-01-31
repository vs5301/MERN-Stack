import axios from "axios"

import { API_URL_STRIPE } from "../../utils/apiURL";

// Stripe Payment
export const handleFreeSubscriptionAPI = async () => {
    const response = await axios.post(
        `${API_URL_STRIPE}/free-plan`,
        {},
        {
            withCredentials: true,
        }
    )
    return response?.data
}

// Stripe Payment intent
export const createStripePaymentIntentAPI = async (payment) => {
    console.log("Payment: ", payment);
    const response = await axios.post(
        `${API_URL_STRIPE}/checkout`,
        {
            amount: Number(payment?.amount),
            subscriptionPlan: payment?.plan,
        },
        {
            withCredentials: true,
        }
    )
    return response?.data
}

// Verify Payment
export const verifyPaymentAPI = async (paymentId) => {
    const response = await axios.post(
        `${API_URL_STRIPE}/verify-payment/${paymentId}`,
        {},
        {
            withCredentials: true,
        }
    )
    return response?.data
}