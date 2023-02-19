import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@istore.com',
    password: bcrypt.hashSync('admin', 10),
    isAdmin: true,
  },
  {
    name: 'Ayan Chakraborty',
    email: 'ayanchakraborty.inbox@gmail.com',
    password: bcrypt.hashSync('developer', 10),
  },
  {
    name: 'Test User',
    email: 'testuser@istore.com',
    password: bcrypt.hashSync('testuser', 10),
  },
]

export default users
