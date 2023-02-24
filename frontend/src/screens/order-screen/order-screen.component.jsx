import { useEffect, useState } from 'react'
import {
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  ListGroupItem,
  Button,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Message from '../../components/message/message.component'
import Loader from '../../components/loader/loader.component'
import {
  getOrderDetails,
  deliverOrder,
} from '../../redux-components/actions/orderActions'
import { resetUserDetails } from '../../redux-components/actions/userActions'
import { ORDER_TYPE_CONSTANTS } from '../../redux-components/constants/orderConstants'
//! Payment Form
import CheckoutForm from '../../components/checkoutForm/CheckoutForm.component'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
//TODO: Try to implement dotenv even its publishable to the outside world
const stripePromise = loadStripe(
  'pk_test_51MWgCjSGqBPOwq23lAkJohBTg8h5t45dGk981BnE1VYlduHoHmGXffUHkdlzrvGYVnJt1d1PviJVMwA3QkYP8ZaC00gG7iE9bD'
)
//! Payment Form

const OrderScreen = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const orderId = id

  //!Payment
  const [clientSecret, setClientSecret] = useState('')
  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails
  useEffect(() => {
    if (orderId) {
      dispatch(getOrderDetails(orderId))
    }
  }, [])
  useEffect(() => {
    if (order && !order.isPaid) {
      // Create PaymentIntent as soon as the page loads
      fetch('/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: Math.ceil(order.totalPrice * 100) }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret))
    }
    // if (!order) {
    //   dispatch(getOrderDetails(orderId))
    // }
  }, [dispatch, orderId, order])

  const appearance = {
    theme: 'stripe',
  }
  const options = {
    clientSecret,
    appearance,
  }
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  //! Payment

  const orderDeliver = useSelector((state) => state.orderDeliver)
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver

  useEffect(() => {
    if (!order || successDeliver) {
      dispatch({ type: ORDER_TYPE_CONSTANTS.ORDER_DELIVER_RESET })
      dispatch(getOrderDetails(orderId))
      // dispatch(resetUserDetails())
    }
  }, [dispatch, orderId, order, successDeliver])

  const deliverHandler = () => {
    dispatch(deliverOrder(order))
  }

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <>
      <h2>Order {order._id}</h2>
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h3>Shipping Details</h3>
              <p>
                <strong>Name: </strong>
                {order.user.name}
              </p>
              <p>
                <strong>Email: </strong>
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              <p>
                <strong>Address:</strong>
                {order.shippingAddress.address},{order.shippingAddress.city},
                {order.shippingAddress.postalCode},
                {order.shippingAddress.country}
              </p>
              {order.isDelivered ? (
                <Message variant='success'>Paid on {order.deliveredAt}</Message>
              ) : (
                <Message variant='danger'>Not Delivered</Message>
              )}
            </ListGroupItem>
            <ListGroupItem>
              <h3>Paymnet Method</h3>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant='success'>Paid on {order.paidAt}</Message>
              ) : (
                <Message variant='danger'>Not Paid</Message>
              )}
            </ListGroupItem>
            <ListGroupItem>
              <h3>Order Items</h3>
              {order.orderItems.length === 0 ? (
                <Message>Order is empty</Message>
              ) : (
                <ListGroup variant='flush'>
                  {order.orderItems.map((item, index) => (
                    <ListGroupItem key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <h3>Order Summary</h3>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Items</Col>
                  <Col>${order.itemsPrice}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${order.shippingPrice}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Tax</Col>
                  <Col>${order.taxPrice}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Total</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                {!userInfo.isAdmin && !order.isPaid && clientSecret && (
                  <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                )}
              </ListGroupItem>
              {userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                <ListGroupItem>
                  <Button
                    type='button'
                    className='btn btn-block col-12'
                    onClick={deliverHandler}
                  >
                    Mark As Delivered
                  </Button>
                </ListGroupItem>
              )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default OrderScreen
