import React from 'react';
import './Listrowodd.css';
import ActionColumnodd from './ActionColumnodd';

const Listrowodd = (props) => {

return(
  <div className="div-table-rowodd">
                  <div className="div-table-colodd1">
                  <div className="colodd1textspan">{props.dataodd[0]}
                    </div></div>
                <div className="div-table-colodd2">
                  <div className="colodd2textspan">{props.dataodd[1]}
                        </div></div>
                <div className="div-table-colodd3">
                     <div className="colodd3textspan">{props.dataodd[2]}
                     </div></div>
                  <div className="div-table-colodd4">
                     <div className="colodd4textspan">{props.dataodd[3]}
                        </div></div>
                <div className="div-table-colodd5">
                   <div className="colodd5textspan">{props.dataodd[4]}
                     </div></div>
                <ActionColumnodd/>
    </div>
)
}

export default Listrowodd;
