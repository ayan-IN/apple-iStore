import jwt from 'jsonwebtoken'

//* generateToken function takes the {userID} and returns a cutomized token using a JWT_SECRET we provide and other parameters like {expiresIN} etc.

const generateToken = (userID) => {
  return jwt.sign({ userID }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}
export default generateToken
