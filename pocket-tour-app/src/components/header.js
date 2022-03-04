import styled from "styled-components";
import {  Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const NavbarContent = styled(Navbar.Brand)`
    text-align: center;
    width: 100%;
    height: 500px;
    background-color: green;
`;

export function NavigationBar() {
    return <Navbar>
        <Container>
            <NavbarContent>MyApp</NavbarContent>
        </Container>
    </Navbar>
}