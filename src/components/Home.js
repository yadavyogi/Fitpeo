import React from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Legend, Bar, PieChart, Pie, Cell } from 'recharts';
import {BsCurrencyDollar} from "react-icons/bs";
import {FaListAlt, FaMix } from "react-icons/fa";
import {  FaShoppingBag    } from "react-icons/fa";
function Home() {
  const data = [
    {
      name: 'Jan',
      value: 15,
    },
    {
      name: 'Feb',
      value: 20,
    },
    {
      name: 'Mar',
      value: 25,
    },
    {
      name: 'April',
      value: 35,
    },
    {
      name: 'May',
      value: 50,
    },
    {
      name: 'Jun',
      value: 60,
    },
    {
      name: 'Jully',
      value: 55,
    },
    {
      name: 'Aug',
      value: 50,
    },
    {
      name: 'Sep',
      value: 55,
    },
    {
      name: 'Oct',
      value: 60,
    },
  ];

  const COLORS = ['#FF6384', '#36A2EB', '#FFCE56'];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
        
          <div className="card-inner">
          <div className='icons dollar'>
            <BsCurrencyDollar className="card_icon" />
           </div>
           <div>
            <h5>earning</h5>
           <h3>$198K</h3>
           <h5>37.8% this month</h5>
           </div>
           
          </div>
         
         
        </div>
        <div className="card">
          <div className="card-inner">
            <div className='icons'>
            <FaListAlt  className="card_icon" />
            </div>
            <div>
              <h5>orders</h5>
            <h3>$2.4K</h3>
           <h5> 2% this month</h5>
            </div>
          </div>
         
          
        </div>
        <div className="card">
          <div className="card-inner">
          <div className='icons'>
           
            <FaMix  className="card_icon" />
            </div>
            <div>
              <h5>Balance</h5>
            <h3>$2.4K</h3>
           <h5> 2% this month</h5>
           </div>
          </div>
         
        </div>
        <div className="card">
          <div className="card-inner">
          <div className='icons'>
            <FaShoppingBag   className="card_icon" />
            </div>
            <div>
              <h5>Total sales</h5>
            <h3>$89K</h3>
           <h5>11% this month</h5>
           </div>
          </div>
         
        </div>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
           
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
           
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
           
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              
              outerRadius={80}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      
    </main>
    
  );
}

export default Home;