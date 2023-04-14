import React, {useState} from 'react';
import Tabline from './images/Tabline.js';
import UserManagement from './UserManagement';
import InputData from './InputData';
import UpdateData from './UpdateData';
import './DataProcess.css';

const DataProcess = () => {

const [viewcomp, setViewcomp] = useState({search: "Searchshow", inputdata: "Inputdatahid", 
   updatedata: "Updatedatahid" }); 
const [menu, setMenu] = useState({caridata: "Caridata3", isidata: "Isidata2",
  updatedata: "Updatedata1" });


const handleSearchclick = (event) => {
  event.stopPropagation();
    event.preventDefault();

    let newviewcomp = {search: "Searchshow", inputdata: "Inputdatahid", 
   updatedata: "Updatedatahid" };
   let newmenu = {caridata: "Caridata3", isidata: "Isidata2",
  updatedata: "Updatedata1" }
     setViewcomp(newviewcomp);
     setMenu(newmenu);
}


const handleInputclick = (event) => {
  event.stopPropagation();
    event.preventDefault();
console.log("fuck");

    let newviewcomp = {search: "Searchhid", inputdata: "Inputdatashow", 
   updatedata: "Updatedatahid" };
   let newmenu = {caridata: "Caridata2", isidata: "Isidata3",
  updatedata: "Updatedata1" }
     setViewcomp(newviewcomp);
     setMenu(newmenu);
}


const handleUpdateclick = (event) => {
  event.stopPropagation();
    event.preventDefault();

    let newviewcomp = {search: "Searchhid", inputdata: "Inputdatahid", 
   updatedata: "Updatedatashow" };
   let newmenu = {caridata: "Caridata1", isidata: "Isidata2",
  updatedata: "Updatedata3" }

     setViewcomp(newviewcomp);
     setMenu(newmenu);
}



return(
<div>
<div className="Topframe">
<div className={menu.caridata} onClick={(e) => handleSearchclick(e)} >
<Tabline text={"Caridata"} locx={"35 0 50 35"}  />
</div>
<div  className={menu.isidata} onClick={(e) => handleInputclick(e)} >
<Tabline text={"Isidata"}  locx={"35 0 50 35"} />
</div>
<div  className={menu.updatedata} onClick={(e) => handleUpdateclick(e)} >
<Tabline text={"Updatedata"}  locx={"35 0 50 35"} />
</div>
</div> {/* closing for Topframe */}
<div className="Bottomframe">
<div className={viewcomp.search} >
<UserManagement />
</div>
<div className={viewcomp.inputdata} >
<InputData  />
</div>
<div className={viewcomp.updatedata} >
<UpdateData />
</div>
</div> {/* closing of Bottomframe */ }
</div>
);
}

export default DataProcess;
