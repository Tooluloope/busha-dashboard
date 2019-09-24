import React from 'react';
import './balance.style.css'
import ethereum from '../../assets/ethereums.svg';
import bitcoin from '../../assets/bitcoin.svg';
import naira from '../../assets/naira.svg';



export const Balance = () => (
    <div className='margin'>


    <table className="table table-striped rectangle-4-copy-5">
  <thead  className=''>
    <tr className='row text-color-head'>
      <th className=' col-sm-5 pad' >Name</th>
      <th className='float col-sm-3'  >Pending</th>
      <th className='float col-sm-4 pad' >Available</th>
    </tr>
  </thead>
  <tbody className='text-color-body'>
  <tr className='row '>
      <th className=' col-sm-5 pad' ><img className='icon-margin' src ={`${bitcoin}`} />Bitcoin</th>
      <th className='float col-sm-3'  >
         <p > 10.12345678 BTC</p>
         <p className='no-gutter text-color-head'> 2,000,000 NGN </p>
      </th>
      <th className='float col-sm-4 pad'  >
         <p > 10.12345678 BTC</p>
         <p className='no-gutter text-color-head'> 2,000,000 NGN </p>
      </th>
    </tr>
    <tr className='row'>
      <th className=' col-sm-5 pad'  > <img className='icon-margin-eth' src ={`${ethereum}`} /> Ethereum</th>
      <th className='float col-sm-3'  >
         <p > 10.12345678 BTC</p>
         <p className='no-gutter text-color-head'> 2,000,000 NGN </p>
      </th>
      <th className='float col-sm-4 pad'  >
         <p > 10.12345678 BTC</p>
         <p className='no-gutter text-color-head'> 2,000,000 NGN </p>
      </th>
    </tr>
    <tr className='row last-row-height'>
      <th className=' col-sm-5 pad' > <img className='icon-margin icon-width-naira' src ={`${naira}`} />Naira</th>
      <th className='float col-sm-3'  >NGN 800,000</th>
      <th className='float col-sm-4 pad' >NGN 2,000,000</th>
    </tr>
  </tbody>
</table>
</div>
)