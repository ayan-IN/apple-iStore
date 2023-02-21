//* Imports for server functionalities
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'

//* Mongoose Connector function import
import connectDB from './config/db.js'

//* Routes for user related API calls
import userRoutes from './routes/userRoutes.js'

//* Routes for product related API calls
import productRoutes from './routes/productRoutes.js'

//* Routes for order related API calls
import orderRoutes from './routes/orderRoutes.js'

//* Custom Middlewares
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()
//* Connecting remote (MongoDB) database with our backend
connectDB()

const app = express()

app.use(express.json())

//? Routing

//* Home route
app.get('/', (req, res) => {
  res.send('API is running...')
})

//* Products route
app.use('/api/products', productRoutes)
//* User route
app.use('/api/users', userRoutes)
//* Order route
app.use('/api/orders', orderRoutes)

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
