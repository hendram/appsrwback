import React, {useState} from 'react';
import Tabline from './images/Tabline.js';
import UserManagement from './UserManagement';
import InputData from './InputData';
import UpdateData from './UpdateData';
import './DataProcess.css';

export const MainContext2 = React.createContext(null);
export const MainContext4 = React.createContext(null);

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

const toUpdatedata = () => {

    let newviewcomp = {search: "Searchhid", inputdata: "Inputdatahid", 
   updatedata: "Updatedatashow" };
   let newmenu = {caridata: "Caridata1", isidata: "Isidata2",
  updatedata: "Updatedata3" }

     setViewcomp(newviewcomp);
     setMenu(newmenu);
}


const b: AppContext2 = {toUpdatedata};
const d: AppContext4 = {toUpdatedata};

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
<MainContext2.Provider value={b} >
<MainContext4.Provider value={d} >
<UserManagement />
</MainContext4.Provider>
</MainContext2.Provider>
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
