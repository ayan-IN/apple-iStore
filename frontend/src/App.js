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

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route index path='/' element={<HomeScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='cart/:id?' element={<CartScreen />} />
            <Route path='/shipping' element={<ShippingScreen />} />
            <Route path='/payment-method' element={<PaymentMethodScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
