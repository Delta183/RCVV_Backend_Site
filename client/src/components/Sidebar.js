import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
// useHistory is now useNavigate
import { NavLink, useNavigate, useLocation} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from '../constants/actionTypes.js';
import jinx from '../images/jinx.jpeg'

const Sidebar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    navigate.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    // sticky-top from the bootstrap-react allows it to stay on that area on the screen
    <div className='sticky-top' style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        {/* Header - comes with a 'prefix' sandwich button that opens and closes it appears */}
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            RCVV Backend Site
        </CDBSidebarHeader>

        {/* Entries for the sidebar */}
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            {/* The profile picture and name will only appear if they are signed in*/}
            {user?.result ? (<CDBSidebarMenuItem>
              {/* Use React-Bootstrap grid system to properly handle rows and columns */}
            <div className="d-flex justify-content-start flex-row mb-3">
              <div className='flex-col'>
                <Image
                  roundedCircle='true'
                  src={jinx}
                  alt="bigfootjinx"
                  style={{ width: '75px' }}
                />
              </div>
              <div className="flex-col ms-2 d-flex align-items-center">Daniel Figueroa</div>
            </div>
            </CDBSidebarMenuItem>
            ) : (
            <NavLink exact="true" to="/auth" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="user-alt">Sign In</CDBSidebarMenuItem>
            </NavLink>
            ) }
            {/* IMPORTANT FOR ICONS: The icons are from Font Awesome 5 */}
            <NavLink exact="true" to="/" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            {/* The class to give the element when it is active */}
            <NavLink exact="true" to="/articles" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="edit">Articles</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact="true" to="/newsletters" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="newspaper">Newsletters</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact="true" to="/vendor" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="book">Vendor Items</CDBSidebarMenuItem>
            </NavLink>
            {/* I want to do a simple if but unsure of how to do it */}
            {user?.result ? (<CDBSidebarMenuItem icon="book">Vendor Items</CDBSidebarMenuItem>
            ) : (
              <div></div>
            ) }
          </CDBSidebarMenu>
        </CDBSidebarContent>

        {/* Footer */}
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px',
            }}
          >
            @RCVV
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;