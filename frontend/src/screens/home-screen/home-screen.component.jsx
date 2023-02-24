import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { listProducts } from '../../redux-components/actions/productActions'
import { Row, Col } from 'react-bootstrap'
import Product from '../../components/product/product.component'
import Loader from '../../components/loader/loader.component'
import Message from '../../components/message/message.component'
import Paginate from '../../components/Paginate/Paginate'
import ProductCarousal from '../../components/ProductCarousal/ProductCarousal'
import Meta from '../../components/Meta/Meta'

const HomeScreen = () => {
  const dispatch = useDispatch()
  let { keyword, pageNumber } = useParams()
  pageNumber = pageNumber ? pageNumber : 1
  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousal />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <h1> Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant={'danger'}>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  )
}

export default HomeScreen
