import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Form,
  Button,
  FormGroup,
  FormLabel,
  FormControl,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from "../../components/form-container/form-container.component"
import CheckoutSteps from '../../components/checkout-steps/checkout-steps.component'
import { saveShippingAddress } from '../../redux-components/actions/cartActions'

const ShippingScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)
  let { shippingAddress } = cart
  const [address, setAddress] = useState(
    shippingAddress ? shippingAddress.address : ''
  )
  const [city, setCity] = useState(shippingAddress ? shippingAddress.city : '')
  const [postalCode, setPostalCode] = useState(
    shippingAddress ? shippingAddress.postalCode : ''
  )
  const [country, setCountry] = useState(
    shippingAddress ? shippingAddress.country : ''
  )

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country }))
    navigate('/payment-method')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <FormGroup controlId='address'>
          <FormLabel>Address</FormLabel>
          <FormControl
            style={{ borderRadius: '10px' }}
            className='my-1'
            type='text'
            placeholder='Enter name'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup controlId='city'>
          <FormLabel>City</FormLabel>
          <FormControl
            style={{ borderRadius: '10px' }}
            className='my-1'
            type='text'
            placeholder='Enter city'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup controlId='postalCode'>
          <FormLabel>Postal Code</FormLabel>
          <FormControl
            style={{ borderRadius: '10px' }}
            className='my-1'
            type='text'
            placeholder='Enter postal code'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup controlId='country'>
          <FormLabel>Country</FormLabel>
          <FormControl
            style={{ borderRadius: '10px' }}
            className='my-1'
            type='text'
            placeholder='Enter country'
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></FormControl>
        </FormGroup>
        <Button
          className='my-1'
          type='submit'
          variant='primary'
          style={{ borderRadius: '10px' }}
        >
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
