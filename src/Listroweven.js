import React from 'react';
import './Listroweven.css';
import ActionColumneven from './ActionColumneven';

const Listroweven = (props) => {

console.log('panjang dataeven ' + JSON.stringify(props));

return(
  <div className="div-table-roweven">
                  <div className="div-table-coleven1">
                   <div className="coleven1textspan">{props.dataeven[0]}
                           </div></div>
                <div className="div-table-coleven2">
                   <div className="coleven2textspan">{props.dataeven[1]}
                          </div></div>
                <div className="div-table-coleven3">
                       <div className="coleven3textspan">{props.dataeven[2]}
                       </div></div>
                  <div className="div-table-coleven4">
                        <div className="coleven4textspan">{props.dataeven[3]}
                       </div></div>
                <div className="div-table-coleven5">
                    <div className="coleven5textspan">{props.dataeven[4]}
                       </div></div>
                  <ActionColumneven/>
    </div>
)
}

export default Listroweven;
