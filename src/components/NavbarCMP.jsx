import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button, menu, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";
import { RiMovie2Fill } from "react-icons/ri";
import { useState } from "react";
import { NavLink } from "react-router-dom";


export default function NavbarCMP() {
  
  
  
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    <NavLink to={"/"}>Home</NavLink>,
    <NavLink to={"/movies"}>Movies</NavLink>,
    <NavLink to={"/contact"}>Contact</NavLink>,
    <NavLink to={"/about"}>About Us</NavLink>,
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
        <RiMovie2Fill />
          <p className="font-bold text-inherit">Movie Shop</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
        <RiMovie2Fill />
          <p className="font-bold text-inherit">Movie Shop</p>
        </NavbarBrand>
        {
            menuItems.map((menu,index) => (
                <NavbarItem key={index}>
          <Link color="foreground" href="#">
            {menu}
          </Link>
        </NavbarItem>
            ))
        }
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <NavLink to={"/login"}>Login</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to={"/signup"} as={Link} className={"bg-red-400 p-3 rounded-md"}>
            Sign Up
          </NavLink>
        </NavbarItem>
        <NavbarItem>

            <Dropdown>
                <DropdownTrigger>
                <Avatar isBordered color="success" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                </DropdownTrigger>

                <DropdownMenu>
                    <DropdownItem>Profile</DropdownItem>
                    <DropdownItem>Logout</DropdownItem>
                </DropdownMenu>
            </Dropdown>

        
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
