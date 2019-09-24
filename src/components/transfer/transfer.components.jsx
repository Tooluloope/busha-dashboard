import React from 'react';

import './transfer.style.css';



export const Transfer = ()  => (
    <div className='margin rectangle-4-copy'>
        <div className='div-1'>
            <button className='btn-table'>
              New transfer  <i class="fas fa-angle-down"></i>
            </button>
        </div>
       
        <div className='row text-color-head div-2 '>
            <p className='col-sm-5'>
                Reference
            </p>
            <p className='float col-sm-3'>
                Status
            </p>
            <p className='float col-sm-4'>
                Amount
            </p>
        </div>
        <div className='pda-container'>
        <p className='table-text'>
        You haven’t made any transfers yet 
        </p>
        <p className='your-transfers-will'>
        Your transfers will be displayed here.
        </p>

        </div>
        
        

    {/* <table className="table table-striped ">
  <thead  className='thead' >
    <tr className='row text-color-head'>
      <th className=' col-sm-5 pad' ></th>
      <th className='float col-sm-3'  ></th>
      <th className='float col-sm-4 btn-row'>

          <button className='btn-table'>
              New transfer
          </button>
          
          </th>
    </tr>
  </thead>
  <tbody className='text-color-body body-head'>
    <tr className='row text-color-head row-header'>
        <th className=' col-sm-5 pad' >Refereence</th>
        <th className='float col-sm-3'  >Status</th>
        <th className='float col-sm-4 pad' >Amount</th>
    </tr>
   
    
   
  </tbody>
</table> */}



</div>
)

