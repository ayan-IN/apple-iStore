import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Form,
  Button,
  Col,
  FormGroup,
  FormLabel,
  FormCheck,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../../components/form-container/form-container.component'
import CheckoutSteps from '../../components/checkout-steps/checkout-steps.component'
import { savePaymentMethod } from '../../redux-components/actions/cartActions'

const PaymentMethodScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)
  let { shippingAddress } = cart
  if (!shippingAddress) {
    navigate('/shipping')
  }
  const [paymentMethod, setPaymentMethod] = useState('Stripe')
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    navigate('/place-order')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Paymnet Method</h1>
      <Form onSubmit={submitHandler}>
        <FormGroup>
          <FormLabel as='legend'>Select Method</FormLabel>

          <Col>
            <FormCheck
              type='radio'
              label='Credit Card Payment with Stripe'
              id='Stripe'
              name='paymentMethod'
              value='Stripe'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></FormCheck>
            {/* <FormCheck
              type='radio'
              label='Stripe'
              id='Stripe'
              name='paymentMethod'
              value='Stripe'
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></FormCheck> */}
          </Col>
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

export default PaymentMethodScreen
