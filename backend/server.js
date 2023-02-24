//* Imports for server functionalities
import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import morgan from 'morgan'
//!Payment
import Stripe from 'stripe'

//!Payment

//* Mongoose Connector function import
import connectDB from './config/db.js'

//* Routes for user related API calls
import userRoutes from './routes/userRoutes.js'

//* Routes for product related API calls
import productRoutes from './routes/productRoutes.js'

//* Routes for order related API calls
import orderRoutes from './routes/orderRoutes.js'

//* Routes for image upload
import uploadRoutes from './routes/uploadRoutes.js'

//* Custom Middlewares
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

//* Connecting remote (MongoDB) database with our backend
connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(cors())

app.use(express.json())

//? Routing

//* Products route
app.use('/api/products', productRoutes)
//* User route
app.use('/api/users', userRoutes)
//* Order route
app.use('/api/orders', orderRoutes)

//* Upload route
app.use('/api/upload', uploadRoutes)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))
  app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,"frontend","build","index.html")))
} else {
  //* Home route
  app.get('/', (req, res) => {
    res.send('API is running...')
  })
}

//! Payment Handler

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: 'inr',
    automatic_payment_methods: {
      enabled: true,
    },
  })

  res.send({
    clientSecret: paymentIntent.client_secret,
  })
})

//! Payment Handler

//* Middleware handler
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 8000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
