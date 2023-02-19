import { useState, useEffect } from 'react'
import {
  Form,
  Button,
  Row,
  Col,
  FormGroup,
  FormLabel,
  FormControl,
  Image,
} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useLocation, Link } from 'react-router-dom'
import { register } from '../../redux-components/actions/userActions'
import FormContainer from '../../components/form-container/form-container.component'

const RegisterScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()
  const location = useLocation()

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const submitHandler = (e) => {
    e.preventDefault()
    //DISPATCH REGISTER
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      console.log('Entered Credentials (Register) : ')
      console.log('Name : ', name)
      console.log('Email : ', email)
      console.log('Password : ', password)
      dispatch(register(name, email, password))
    }
  }
  return (
    <FormContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '30px',
        }}
      >
        <Image src='/images/apple-logo.png' alt='apple-rainbow' width='80px' />
      </div>

      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>
        One account for everything Apple
      </h3>
      <Form onSubmit={submitHandler}>
        <FormGroup controlId='name'>
          <FormLabel>Name</FormLabel>
          <FormControl
            style={{ borderRadius: '10px' }}
            type='text'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='mb-2'
          ></FormControl>
        </FormGroup>

        <FormGroup controlId='email'>
          <FormLabel>Email Address</FormLabel>
          <FormControl
            className='mb-2'
            style={{ borderRadius: '10px' }}
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup controlId='password'>
          <FormLabel>Password</FormLabel>
          <FormControl
            className='mb-2'
            style={{ borderRadius: '10px' }}
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></FormControl>
        </FormGroup>

        <FormGroup controlId='confirmpassword'>
          <FormLabel>Confirm Password</FormLabel>
          <FormControl
            className='mb-2'
            style={{ borderRadius: '10px' }}
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></FormControl>
        </FormGroup>
        <Button
          type='submit'
          variant='primary'
          className='my-1'
          style={{ borderRadius: '10px' }}
        >
          Register
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          Have an account?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen
