import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  padding: 15px 15px 15px 30px;
  transition: all 0.3s;
  color: #000;
  font-size: 25px;
  font-weight: 600;

  &.active {
    color: tomato;
  }
`;
