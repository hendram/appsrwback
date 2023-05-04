import React, {useContext} from 'react';
import './ActionColumnodd.css';
import {MainContext1} from './UserManagement';
import {MainContext2} from './DataProcess';
import Emitter2 from './Emitter';

const ActionColumnodd = (props) => {

const a = useContext(MainContext1);
const b = useContext(MainContext2);

const handleEdit = (event) => {
 event.stopPropagation();
    event.preventDefault();

    b.toUpdatedata();
    Emitter2.emit('actioneven', props.actionodd);
}

const handleDelete = async (event) => {
 event.stopPropagation();
    event.preventDefault();

   let dataaction = { "nama": props.actionodd.nama, "tempatlahir": props.actionodd.tempatlahir, 
"tgllahir": props.actionodd.tgllahir, "noktp": props.actionodd.noktp, "nohp": props.actionodd.nohp, 
"tower": props.actionodd.tower, "unit": props.actionodd.unit, "status": props.actionodd.status, "periodsewa": props.actionodd.periodsewa,
"agen": props.actionodd.agen, "emergencyhp": props.actionodd.emergencyhp, 
"pemilikunit": props.actionodd.pemilikunit }    

    await fetch("https://localhost/action", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(dataaction)
}).then((response) => response.json()
   ).then(function(data){
    if(data.answer === "ok"){
        a.callyangdicari();
}
});
}


return(
<div className="editdeletediv">
<div className="editbuttondiv">
<button onClick={handleEdit} className="editbutton">Update</button>
</div>
<div className="deletebuttondiv">
<button onClick={handleDelete} className="deletebutton">Delete</button>
</div>
</div>
);

}

export default ActionColumnodd;
