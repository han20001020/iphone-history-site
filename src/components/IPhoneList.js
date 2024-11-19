import React from 'react';
import { Link } from 'react-router-dom';
import iPhones from '../data/iPhones.json';

function IPhoneList() {
  return (
    <div>
      <div style={{
  backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  padding: '10px 20px',
  borderRadius: '8px',
  display: 'inline-block',
  margin: '20px auto',
}}></div>
    <h1 style={{
  fontSize: '2.5rem',
  color: 'white', 
  textAlign: 'center',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', 
}}>
  歷代 iPhone 一覽
</h1>

      <div className="iphone-list">
        {iPhones.map((phone) => (
          <div className="iphone-card" key={phone.id}>
            <img src={phone.image} alt={phone.name} />
            <h2>{phone.name}</h2>
            <Link to={`/iphones/${phone.id}`}>
              <button>查看詳細資料</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IPhoneList;
