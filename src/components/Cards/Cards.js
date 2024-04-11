import React, { Component } from 'react'
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';

export default class Cards extends Component {
  render() {

    const arr = [ <li>10 users included</li> ,
                  <li>2 GB of storage</li>,
                  <li>Email support</li>,
                  <li>Help center access</li>];

    const arr2 = [  <li>20 users included</li>,
                    <li>10 GB of storage</li>,
                    <li>Priority email support</li>,
                    <li>Help center access</li>   ];  

    const arr3 = [   <li>30 users included</li>,
                     <li>15 GB of storage</li>,
                    <li>Phone and email support</li>,
                    <li>Help center access</li>   ];

    return (

          <div className="card-deck mb-3 text-center ">
            
            <Card1 title="Free" price="$0" arr={arr} button="Sign up for free" />
            <Card2 title="Pro" price="$15" arr={arr2} button="Get started" />
            <Card3 title="Enterprise" price="$29" arr={arr3} button="Contact us" />
            
          </div>
   
    )
  } 
}
