import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)
userSchema.methods.matchPassword = async function (enteredPassword) {
  console.log("Running bcrypt phase 1")
  return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
   console.log('Running bcrypt phase 2')
  if (!this.isModified("password")) {
    console.log("Password not modified")
    next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  console.log("Hashed Password :",this.password)
})

const User = mongoose.model('User', userSchema)

export default User
