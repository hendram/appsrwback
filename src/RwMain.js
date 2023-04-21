import React, {useState, useRef, createContext} from 'react';
import './RwMain.css';
import Signinpage from './Signinpage';
import Adminpage from './Adminpage';
import DataProcess from './DataProcess';
import Cover from './images/cover.jpg';

const RwMain = () => {

const [changemainpage, setChangemainpage] = useState({signin: "Signinshow", 
adminpage: "Adminpagehid", dataprocess: "Dataprocesshid"});


const openadminpagef = (truefalse) => {
         if(truefalse === "true"){
      let newchangemainpage = {signin: "Signinhid", adminpage: "Adminpageshow",
   dataprocess: "Dataprocesshid" }; 
       setChangemainpage(newchangemainpage);         
}
}

const opendataprocessf = (truefalse) => {
         if(truefalse === "true"){
      let newchangemainpage = {signin: "Signinhid", adminpage: "Adminpagehid",
   dataprocess: "Dataprocessshow" }; 
       setChangemainpage(newchangemainpage);         
}
}

return(
<div className="Mostouterdiv">
{/* <img src={Cover} className="Cover-image" alt="GreenBay Picture" /> */}
<div className={changemainpage.signin}>
<Signinpage openadminpage={openadminpagef} opendataprocess={opendataprocessf}/>
</div>
<div className={changemainpage.adminpage}>
<Adminpage />
</div>
<div className={changemainpage.dataprocess}>
<DataProcess />
</div>
</div>
);
}

export default RwMain;
