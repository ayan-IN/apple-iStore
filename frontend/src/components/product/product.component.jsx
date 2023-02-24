import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from '../rating/rating.component'

const useStyles = {
  boxShadow:
    'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
  border: 'none',
  textAlign: "center"
}

const Product = ({ product }) => {
  return (
    <Card className='my-2 py-3 px-4 rounded' style={useStyles}>
      <Link
        to={`/product/${product._id}`}
        style={{
          display: 'flex',
          justifyContent: 'center',
          maxHeight: '150px',
          overflow: 'hidden',
        }}
      >
        <Card.Img
          src={product.image}
          variant='top'
          style={{ objectFit: 'scale-down' }}
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
          <Card.Title as='div'>
            <strong style={{ fontWeight: 500, color: 'black' }}>
              {product.name}
            </strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <div className='mb-3'>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </div>
        </Card.Text>
        <Card.Text as='h3' style={{ fontSize: '1.2rem' }}>
          ₹{product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
