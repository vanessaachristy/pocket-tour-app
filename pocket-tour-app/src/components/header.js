import styled from "styled-components";
import {  Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const NavbarContent = styled(Navbar.Brand)`
    text-align: left;
    width: 100vw;
    height: 100px;
    background-color: green;
`;

export function NavigationBar() {
    return <Navbar>
        <Container>
            <NavbarContent>MyApp</NavbarContent>
        </Container>
    </Navbar>
}