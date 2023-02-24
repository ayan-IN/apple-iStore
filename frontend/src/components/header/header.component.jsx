import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import SearchBox from '../searchBox/serachBox.component'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../../redux-components/actions/userActions'
import { resetMyOrders } from '../../redux-components/actions/orderActions'

const useStyles = {
  boxShadow: 'rgba(0, 0, 0, 0.04) 0px 3px 5px',
  textTransform: 'none',
}

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(resetMyOrders())
    dispatch(logout())
    navigate('/')
  }
  return (
    <header>
      <Navbar
        bg='primary'
        variant='dark'
        expand='lg'
        collapseOnSelect
        className='py-2'
        style={useStyles}
      >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <span
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                }}
              >
                <Image src='/images/apple.png' width={'25px'} />
                &nbsp;iStore
              </span>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <SearchBox navigate={navigate} />

            <Nav className='ms-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
