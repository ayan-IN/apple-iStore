import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/header.component'
import { Container } from 'react-bootstrap'
import LoginScreen from './screens/login-screen/login-screen.component'
import RegisterScreen from './screens/register-screen/register-screen.component'
import HomeScreen from './screens/home-screen/home-screen.component'
import ProductScreen from './screens/product-screen/product-screen.component'
import CartScreen from './screens/cart-screen/cart-screen.component'
import Footer from './components/footer/footer.component'
import ShippingScreen from './screens/shipping-screen/shipping-screen.component'
import PaymentMethodScreen from './screens/paymentMethod-screen/paymentMethod-screen.component'
import PlaceorderScreen from './screens/place-order/place-order.component'
import OrderScreen from './screens/order-screen/order-screen.component'
import ProfileScreen from './screens/profile-screen/profile-screen.component'
import UserListScreen from './screens/admin-screens/userList-screen/userList-screen.component'
import UserEditScreen from './screens/admin-screens/userEdit-screen/userEdit-screen.component'
import ProductListScreen from './screens/admin-screens/productList-screen/productList-screen.component'
import ProductEditScreen from './screens/admin-screens/productEdit-screen/productEdit-screen.component'
import OrderListScreen from './screens/admin-screens/orderList-screen/orderList-screen.component'

const App = () => {
  return (
    <Router>
      <Header />

      <main className='py-3'>
        <Container>
          <Routes>
            <Route index path='/' element={<HomeScreen />} />
            <Route path='login' element={<LoginScreen />} />
            <Route path='register' element={<RegisterScreen />} />
            <Route path='profile' element={<ProfileScreen />} />
            <Route path='product/:id' element={<ProductScreen />} />
            <Route path='cart/:id?' element={<CartScreen />} />
            <Route path='shipping' element={<ShippingScreen />} />
            <Route path='payment-method' element={<PaymentMethodScreen />} />
            <Route path='place-order' element={<PlaceorderScreen />} />
            <Route path='admin/userlist' element={<UserListScreen />} />
            <Route path='admin/productlist' element={<ProductListScreen />} />
            <Route
              path='admin/productlist/:pageNumber'
              element={<ProductListScreen />}
            />
            <Route path='admin/user/:id/edit' element={<UserEditScreen />} />
            <Route
              path='admin/product/:id/edit'
              element={<ProductEditScreen />}
            />
            <Route path='admin/orderlist' element={<OrderListScreen />} />
            <Route path='order/:id' element={<OrderScreen />} />
            <Route path='search/:keyword' element={<HomeScreen />} />
            <Route path='page/:pageNumber' element={<HomeScreen />} />
            <Route
              path='search/:keyword/page/:pageNumber'
              element={<HomeScreen />}
            />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
