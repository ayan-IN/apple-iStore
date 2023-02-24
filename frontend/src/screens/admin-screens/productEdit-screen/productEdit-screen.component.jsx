import axios from 'axios'
import { useState, useEffect } from 'react'
import {
  Form,
  Button,
  FormGroup,
  FormLabel,
  FormControl,
  Image,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  listProductDetails,
  updateProduct,
} from '../../../redux-components/actions/productActions'
import FormContainer from '../../../components/form-container/form-container.component'
import Message from '../../../components/message/message.component'
import Loader from '../../../components/loader/loader.component'
import { PRODUCT_CONSTANT_TYPES } from '../../../redux-components/constants/productConstants'

const ProductEditScreen = () => {
  const { id: productId } = useParams()

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const productUpdate = useSelector((state) => state.productUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_CONSTANT_TYPES.PRODUCT_UPDATE_RESET })
      navigate('/admin/productList')
    } else {
      if (!product || !product.name || product._id !== productId) {
        dispatch(listProductDetails(productId))
      } else {
        setName(product.name)
        setPrice(product.price)
        setImage(product.image)
        setBrand(product.brand)
        setCategory(product.category)
        setCountInStock(product.countInStock)
        setDescription(product.description)
      }
    }
  }, [dispatch, product, navigate, productId, successUpdate])

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      const { data } = await axios.post('/api/upload', formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    //UPDATE PRODUCT
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        brand,
        category,
        countInStock,
        description,
      })
    )
  }
  return (
    <>
      <Link to='/admin/productList' className='btn btn-light my-3'>
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

        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>
          Edit Product
        </h3>
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

            <FormGroup controlId='price'>
              <FormLabel>Price</FormLabel>
              <FormControl
                className='mb-2'
                style={{ borderRadius: '10px' }}
                type='number'
                placeholder='Enter price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></FormControl>
            </FormGroup>

            <FormGroup controlId='image'>
              <FormLabel>Image</FormLabel>
              <FormControl
                className='mb-2'
                style={{ borderRadius: '10px' }}
                type='text'
                placeholder='Enter image url'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></FormControl>
              <FormControl
                type='file'
                // id='image-file'
                label='Choose File'
                // custom
                onChange={uploadFileHandler}
              ></FormControl>
              {uploading && <Loader />}
            </FormGroup>

            <FormGroup controlId='brand'>
              <FormLabel>Brand</FormLabel>
              <FormControl
                className='mb-2'
                style={{ borderRadius: '10px' }}
                type='text'
                placeholder='Enter brand'
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></FormControl>
            </FormGroup>
            <FormGroup controlId='category'>
              <FormLabel>Category</FormLabel>
              <FormControl
                className='mb-2'
                style={{ borderRadius: '10px' }}
                type='text'
                placeholder='Enter image url'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></FormControl>
            </FormGroup>
            <FormGroup controlId='countInStock'>
              <FormLabel>Count In Stock</FormLabel>
              <FormControl
                className='mb-2'
                style={{ borderRadius: '10px' }}
                type='number'
                placeholder='Enter stock value'
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></FormControl>
              <FormGroup controlId='description'>
                <FormLabel>Description</FormLabel>
                <FormControl
                  className='mb-2'
                  style={{ borderRadius: '10px' }}
                  type='text'
                  placeholder='Enter Description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></FormControl>
              </FormGroup>
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

export default ProductEditScreen
