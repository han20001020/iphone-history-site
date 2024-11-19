import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px', padding: '20px' }}>
      <h1 style={{
        fontSize: '3rem',
        background: 'linear-gradient(to right, #00c6ff, #007bff)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        fontWeight: 'bold',
        textShadow: '0px 2px 10px rgba(0, 0, 0, 0.5)',
      }}>
        歡迎來到歷代 iPhone 介紹網站
      </h1>
      <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>
        探索每一代 iPhone 的創新與設計！
      </p>
      <Link to="/iphones">
        <button style={{
          marginTop: '20px',
          padding: '15px 30px',
          fontSize: '1rem',
          background: 'linear-gradient(to right, #007bff, #00c6ff)',
          border: 'none',
          borderRadius: '25px',
          color: 'white',
          cursor: 'pointer',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
        }}
        onMouseOver={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = '0px 6px 15px rgba(0, 0, 0, 0.5)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.3)';
        }}
        >
          開始瀏覽
        </button>
      </Link>
    </div>
  );
}

export default Home;
