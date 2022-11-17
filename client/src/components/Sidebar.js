import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import jinx from '../images/jinx.jpeg'

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        {/* Header - comes with a sandwich button that opens and closes it appears */}
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            RCVV Backend Site
          </a>
        </CDBSidebarHeader>

        {/* Entries for the sidebar */}
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <CDBSidebarMenuItem>
              {/* Use React-Bootstrap grid system to properly handle rows and columns */}
            <div className="d-flex justify-content-start flex-row mb-3">
              <div className='flex-col'>
                <img
                  src={jinx}
                  alt="bigfootjinx"
                  style={{ width: '75px' }}
                />
              </div>
              <div className="flex-col ms-2 d-flex align-items-center">Daniel Figueroa</div>
            </div>
            </CDBSidebarMenuItem>
            {/* IMPORTANT FOR ICONS: The icons are from Font Awesome 5 */}
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/articles" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="edit">Articles</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/newsletters" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="newspaper">Newsletters</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/volunteers" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="grin">Volunteers</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/vendor" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book">Vendor Items</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        {/* Footer */}
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;