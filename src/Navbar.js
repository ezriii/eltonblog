// import { Link } from 'react-router-dom'

import { CNavbar, CContainer, CNavbarBrand, CNavbarToggler, COffcanvas, COffcanvasHeader, COffcanvasTitle, CCloseButton, COffcanvasBody, CNavbarNav, CNavItem, CNavLink, CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CDropdownDivider, CForm, CFormInput, CButton } from '@coreui/react';
import { useState } from "react";

export const Navbar = () => {
    const [visible, setVisible] = useState(false)
    return (
        <CNavbar colorScheme="light" className="bg-primary">
    <CContainer fluid>
      <CNavbarBrand className='text-light'>EduLink</CNavbarBrand>
      <CNavbarToggler className='d-lg-none'
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
        onClick={() => setVisible(!visible)}
      />
      <div className='d-none d-lg-block'>
        {/* <Link to='/login'>Log in</Link>
        <Link to='/'>Sign up</Link> */}
        {/* <a href="login.js" className='text-dark btn btn-light p-1 m-1'>Log in</a>
        <a href="signin" className='text-dark btn btn-light p-1 m-1'>Sign Up</a> */}
      </div>
      <COffcanvas id="offcanvasNavbar" placement="end" portal={false} visible={visible} onHide={() => setVisible(false)}>
        <COffcanvasHeader>
          <COffcanvasTitle>EduLink</COffcanvasTitle>
          <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
        </COffcanvasHeader>
        <COffcanvasBody>
          <CNavbarNav>
            <CNavItem>
              <CNavLink href="#" active>
                Home
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">Link</CNavLink>
            </CNavItem>
            <CDropdown variant="nav-item" popper={false}>
              <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Something else here</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CNavItem>
              <CNavLink href="#" disabled>
                Disabled
              </CNavLink>
            </CNavItem>
          </CNavbarNav>
          <CForm className="d-flex">
            <CFormInput type="search" className="me-2" placeholder="Search" />
            <CButton type="submit" color="success" variant="outline">
              Search
            </CButton>
          </CForm>
        </COffcanvasBody>
      </COffcanvas>
    </CContainer>
  </CNavbar>
    );
}
 
export default Navbar;