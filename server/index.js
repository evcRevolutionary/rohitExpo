import express from 'express';

// const express = require('express');
const app = express();
app.use(express.json());
const port  = 3000;
// const Publishable_key = 'pk_test_51LQVRqSDAYIIWmAgGmBNI2ba3ZkjkmsXyIeOsaoPgcek9iRcJ3hQCJzuZytMFIjNozrkOUKEEZnoJvy7EqLggaYm00pQ9wEjV0';

// const Secrect_key =  'sk_test_51LQVRqSDAYIIWmAguFVjngEx0jsys4MZ5HPzheaU8h4t1Y6oTIjxkv9aYPLrT4Riqtv63VmtBwoFmBscXmaIDxLQ00fTTBx0Sn';

// import Stripe from 'stripe';

// const stripes = new Stripe(Secrect_key, { apiVersion: '2020-08-27', typescript: true});


// app.post('/create-payment-intent', async (req, res)=> {
//     console.log('post', res);
//     try {
//         const paymentIntent = await stripes.paymentIntents.create({
//             amount: 1099, //lowest denomination of particular currency
//             currency: 'usd',
//         });

//         res.send({
//             clientSecret: paymentIntent.client_secret
//         });
//     } catch(e) {
//         res.json({error: e.message});
//     }
// });

app.get('/api', (req, res)=> {
    res.send('raj');
});

app.listen(port, ()=> {
    console.log(`listeninng ${port}`);
});