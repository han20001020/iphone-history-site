import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ 
      background: 'linear-gradient(90deg, #007bff, #00c6ff)', /* 漸變背景 */
      padding: '15px 20px',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', /* 陰影效果 */
    }}>
      <div style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '1px' }}>
        歷代 iPhone 介紹
      </div>
      <div>
        <Link 
          to="/" 
          style={{ 
            marginRight: '20px', 
            color: 'white', 
            textDecoration: 'none', 
            fontSize: '16px',
            fontWeight: '500' 
          }}
          onMouseOver={(e) => e.target.style.textShadow = '0px 0px 5px #fff'} /* 懸停效果 */
          onMouseOut={(e) => e.target.style.textShadow = 'none'}
        >
          首頁
        </Link>
        <Link 
          to="/iphones" 
          style={{ 
            color: 'white', 
            textDecoration: 'none', 
            fontSize: '16px',
            fontWeight: '500' 
          }}
          onMouseOver={(e) => e.target.style.textShadow = '0px 0px 5px #fff'}
          onMouseOut={(e) => e.target.style.textShadow = 'none'}
        >
          iPhone 一覽
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
