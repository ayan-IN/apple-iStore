import mongoose from 'mongoose'

//* connectDB helps to connect our application to the repective mongoDB database using the credential using mongoose.

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold)
    //! Process exit with an error
    process.exit(1)
  }
}

export default connectDB
