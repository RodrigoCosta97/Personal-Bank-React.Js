import { Container, LogoContainer,Nav, AsideButton} from './Aside.style.js'
import { Logo, DashboardIcon, TransactionsIcon, LinkedInIcon, FacebookIcon, InstagramIcon, TwitterIcon, } from "../../atoms/index";
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Aside() {
  const location = useLocation();
   const isTransactions = location.pathname === "/transactions";
   const primaryColor = isTransactions ? "#0BAC9B" : "#9D9D9D";
   const isDashboard = location.pathname === "/";
   const primaryColorDashboard= isDashboard ? "#0BAC9B" : "#9D9D9D";

  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      
      <Link to="/">
      <AsideButton selected={isDashboard}>

           <DashboardIcon selected={isDashboard} primaryColor={primaryColorDashboard } />
            <p>Dashboard</p>
           
         </AsideButton>
         </Link>
         
         
         <Link to="/transactions">
         <AsideButton selected={isTransactions}>
        
            <TransactionsIcon
               selected={isTransactions}
               primaryColor={primaryColor}
            />
            <p>Transactions</p>
           
         </AsideButton>
         </Link>
        
      
      <Nav>
        <button>
          <LinkedInIcon />
        </button>
        <button>
          <FacebookIcon />
        </button>
        <button>
          <InstagramIcon />
        </button>
        <button>
          <TwitterIcon />
        </button>
      </Nav>
    </Container>
  )
}