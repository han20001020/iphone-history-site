import React from 'react';
import { useParams } from 'react-router-dom';
import iPhones from '../data/iPhones.json';

function IPhoneDetail() {
  const { id } = useParams();
  const phone = iPhones.find((p) => p.id === parseInt(id));

  if (!phone) {
    return <h2>找不到該 iPhone 的資料。</h2>;
  }

  return (
    <div style={{
      backgroundColor: 'rgba(255, 255, 255, 0.1)', 
      padding: '20px',
      borderRadius: '10px', 
      boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', 
      maxWidth: '600px', 
      margin: '20px auto', 
      textAlign: 'center', 
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        color: 'white',
        marginBottom: '20px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
      }}>
        {phone.name}
      </h1>
      <img src={phone.image} alt={phone.name} style={{
        maxWidth: '80%',
        borderRadius: '10px',
        marginBottom: '20px',
      }} />
      <p style={{
        fontSize: '1.2rem',
        color: 'white',
        marginBottom: '20px',
      }}>
        發售年份：{phone.year}
      </p>
      <ul style={{
        listStyleType: 'none',
        padding: 0,
        color: 'white',
        fontSize: '1rem',
        lineHeight: '1.8',
      }}>
        {phone.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
    
  );
}

export default IPhoneDetail;
