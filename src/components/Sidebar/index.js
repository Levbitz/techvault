import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink className="s_b_links" to="/">
          Home
        </SidebarLink>
        <SidebarLink className="s_b_links" to="/about">
          About
        </SidebarLink>
        <SidebarLink className="s_b_links" to="/services">
          {" "}
          Services
        </SidebarLink>
        <SidebarLink className="s_b_links" to="/contact">
          {" "}
          Contact Us
        </SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
