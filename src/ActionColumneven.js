import React, {useContext} from 'react';
import './ActionColumneven.css';
import {MainContext3} from './UserManagement';
import {MainContext4} from './DataProcess';
import Emitter from './Emitter';

const ActionColumneven = (props) => {

const c = useContext(MainContext3);
const d = useContext(MainContext4);

const handleEdit = (event) => {
 event.stopPropagation();
    event.preventDefault();

    d.toUpdatedata();
    Emitter.emit('actioneven', props.actioneven);
}

const handleDelete = async (event) => {
 event.stopPropagation();
    event.preventDefault();

   let dataaction = { "nama": props.actioneven.nama, "tempatlahir": props.actioneven.tempatlahir, 
"tgllahir": props.actioneven.tgllahir, "nohp": props.actioneven.nohp, "tower": props.actioneven.tower,
"unit": props.actioneven.unit, "status": props.actioneven.status, "periodsewa": props.actioneven.periodsewa,
"agen": props.actioneven.agen, "emergencyhp": props.actioneven.emergencyhp, 
"pemilikunit": props.actioneven.pemilikunit }    

    await fetch("https://localhost/action", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(dataaction)
}).then((response) => response.json()
   ).then(function(data){
    if(data.answer === "ok"){
        c.callyangdicari();
}
});

}


return(
<div className="editdeleteevendiv">
<div className="editbuttonevendiv">
<button className="editbuttoneven" onClick={handleEdit} >Update</button>
</div>
<div className="deletebuttonevendiv">
<button className="deletebuttoneven" onClick={handleDelete} >Delete</button>
</div>
</div>
);

}

export default ActionColumneven;
