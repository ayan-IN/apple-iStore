import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
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
import FormContainer from '../../components/form-container/form-container.component'
import { login } from '../../redux-components/actions/userActions'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    //DISPATCH LOGIN
    console.log('Entered Credentials (Login) : ')
    console.log('Email : ', email)
    console.log('Password : ', password)
    dispatch(login(email, password))
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
        <Button
          type='submit'
          variant='primary'
          className='my-1'
          style={{ borderRadius: '10px' }}
        >
          Sign In
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          New Customer?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
