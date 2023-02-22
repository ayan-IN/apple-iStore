import { useState, useEffect } from 'react'
import {
  Form,
  Button,
  FormGroup,
  FormLabel,
  FormControl,
  Image,
  FormCheck,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, Link, useNavigate, useParams } from 'react-router-dom'
import {
  getUserDetails,
  updateUser,
} from '../../../redux-components/actions/userActions'
import FormContainer from '../../../components/form-container/form-container.component'
import Message from '../../../components/message/message.component'
import Loader from '../../../components/loader/loader.component'
import { USER_CONSTANT_TYPES } from '../../../redux-components/constants/userConstants'

const UserEditScreen = () => {
  const { id: userId } = useParams()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userUpdate = useSelector((state) => state.userUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({
        type: USER_CONSTANT_TYPES.USER_UPDATE_RESET,
      })
      navigate('/admin/userlist')
    } else {
      if (!user || !user.name || user._id !== userId) {
        dispatch(getUserDetails(userId))
      } else {
        setName(user.name)
        setEmail(user.email)
        setIsAdmin(user.isAdmin)
      }
    }
  }, [dispatch, user, successUpdate, navigate, userId])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateUser({
        _id: userId,
        name,
        email,
        isAdmin,
      })
    )
  }
  return (
    <>
      <Link to='/admin/userList' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '30px',
          }}
        >
          <Image
            src='/images/apple-logo.png'
            alt='apple-rainbow'
            width='80px'
          />
        </div>

        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Edit User</h3>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
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

            <FormGroup controlId='isadmin'>
              <FormCheck
                className='mb-2'
                type='checkbox'
                label='Is Admin'
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></FormCheck>
            </FormGroup>
            <Button
              type='submit'
              variant='primary'
              className='my-1'
              style={{ borderRadius: '10px' }}
            >
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default UserEditScreen
