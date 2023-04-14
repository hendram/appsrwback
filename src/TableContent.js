import React, {useRef} from 'react';
import './TableContent.css';
import Listrowodd from './Listrowodd';
import Listroweven from './Listroweven';

const TableContent = () => {

const listrow = useRef([]);
const data = useRef([["1", "John Doe", "LM Alam Sutra", "08123456789", "anastasia.flaviana@loanmarket.co.id"],
                    ["2", "HJ Herlandin Laksmiwat", "LM Intercon", "08123456789", "andin.laksmiwalti@gmail.com"],
                    ["3", "Harimurni", "LM Kelapa Gading", "08123456789", "harimurni@yahoo.com"],
                    ["4", "Djoni Gunawan", "LM Kemanggisan", "08123456789", "djoni.gunawan@loanmarket.co.id"],
                    ["5", "David Lai Min Layardi", "LM Kelapa Gading", "08123456789", "david.laimin@gmail.com"],
                    ["6", "HJ Herlandin Laksmiwat", "LM Intercon", "08123456789", "andin.lasmiwati@gmail.com"],
                    ["7", "Harimurni", "LM Kelapa Gading", "08123456789", "harimurni@yahoo.com"],
                    ["8", "Djoni Gunawan", "LM Kemanggisan", "08123456789", "djoni.gunawan@loanmarket.co.id"],
                    ["9", "David Lai Min Layardi", "LM Kelapa Gading", "08123456789", "david.laimin@gmail.com"],
                ["10", "Djoni Gunawan", "LM Kemanggisan", "08123456789", "djoni.gunawan@loanmarket.co.id"]]);


if(listrow.current.length === 0){
for(let a = 0; a < data.current.length; a++){
       if((a % 2 === 0) || (a === 0)){
           listrow.current.push(<Listroweven key={a} dataeven = {data.current[a]} />);
    }
      else {
        listrow.current.push(<Listrowodd key={a} dataodd = {data.current[a]} />);
}
}
}
 

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
                    <div className="colfirst6textspan">Tower
                         </div></div>
                <div  className="div-table-colfirst7">
                    <div className="colfirst7textspan">Unit
                         </div></div>

                <div  className="div-table-colfirst8">
                    <div className="colfirst8textspan">Status
                         </div></div>

                <div  className="div-table-colfirst9">
                    <div className="colfirst9textspan">Period Sewa
                         </div></div>

                <div  className="div-table-colfirst10">
                    <div className="colfirst10textspan">Agent
                         </div></div>

                <div  className="div-table-colfirst11">
                    <div className="colfirst11textspan">Emergency hp
                         </div></div>

                <div  className="div-table-colfirst12">
                    <div className="colfirst12textspan">Pemilik unit
                         </div></div>
                <div  className="div-table-colfirst6">
                     <div className="colfirst6textspan">Action
                        </div></div>
             </div>
        {listrow.current}
</div>
);

}

export default TableContent;
