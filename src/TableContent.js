import React, {useRef, useState, useEffect} from 'react';
import './TableContent.css';
import Listrowodd from './Listrowodd';
import Listroweven from './Listroweven';

const TableContent = (props) => {

const [listrow, setListrow]  = useState([]);

useEffect(() =>  {
let newlistrow = [];
for(let a = 0; a < props.dataget.length; a++){
           console.log(props.dataget[a]);
           
   if((a % 2 === 0) || (a === 0)){
              let tampilkeno;
               if(a === 0){
               
              tampilkeno = props.limitbawah;
            }
           else{
              tampilkeno = a + props.limitbawah;
             }
                            
    newlistrow.push(<Listroweven key={a} nonya={tampilkeno} dataeven = {props.dataget[a]} />);
    }
      else {
        let tampilkeno = a + props.limitbawah;
      newlistrow.push(<Listrowodd key={a} nonya={tampilkeno} dataodd = {props.dataget[a]} />);
}
}

setListrow(newlistrow);
}, [JSON.stringify(props.dataget)]);

 

return(
 <div className="div-table">
             <div className="div-table-rowfirst">
                <div className="div-table-colfirst1">
                 <div className="colfirst1textspan">No
                       </div></div>
                <div  className="div-table-colfirst2">
                    <div className="colfirst2textspan">Nama
                          </div></div>
                <div  className="div-table-colfirst3">
                      <div className="colfirst3textspan">Tempat Lahir
                    </div></div>
                <div  className="div-table-colfirst4">
                   <div className="colfirst4textspan">Tgl Lahir
                          </div></div>
                <div  className="div-table-colfirst5">
                    <div className="colfirst5textspan">No hp
                         </div></div>

                <div  className="div-table-colfirst6">
                    <div className="colfirst6textspan">Twr
                         </div></div>
                <div  className="div-table-colfirst7">
                    <div className="colfirst7textspan">Unit
                         </div></div>

                <div  className="div-table-colfirst8">
                    <div className="colfirst8textspan">Status
                         </div></div>

                <div  className="div-table-colfirst9">
                    <div className="colfirst10textspan">Agen
                         </div></div>

                <div  className="div-table-colfirst10">
                    <div className="colfirst11textspan">Emergency hp
                         </div></div>

                <div  className="div-table-colfirst11">
                    <div className="colfirst12textspan">Pemilik unit
                         </div></div>
                <div  className="div-table-colfirst12">
                     <div className="colfirst6textspan">Action
                        </div></div>
             </div>
        {listrow}
</div>
);

}

export default TableContent;
