import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

import users from '../data/users.js'
import User from '../models/userModel.js'
import products from '../data/products.js'
import Product from '../models/productModel.js'

import connectDB from '../config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await User.deleteMany()
    await Product.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })
    await Product.insertMany(sampleProducts)
    console.log('Data imported Successfully'.green.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}
const destroyData = async () => {
  try {
    await User.deleteMany()
    await Product.deleteMany()
    console.log('Data destroyed successfully'.red.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
