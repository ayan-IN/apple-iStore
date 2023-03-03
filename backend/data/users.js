import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@istore.com',
    password: bcrypt.hashSync('admin', 10),
    isAdmin: true,
  },
  {
    name: 'Test User',
    email: 'testuser@istore.com',
    password: bcrypt.hashSync('testuser', 10),
  },
]

export default users
