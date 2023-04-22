import React, {useRef} from 'react';
import './Adminpage.css';

const Adminpage = () => {

const [, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), [])

const resultrandomoperator = useRef(null);
const operatorname = useRef(null);
const success = useRef(null);

function forbuttonclick(event){
        event.stopPropagation();
        event.preventDefault();
}

const handleClicktokenoperator = (event) => {
      forbuttonclick(event);
     resultrandomoperator.current = Math.random().toString(36).slice(2);
      forceUpdate();
}

const handleSubmitoperator = async(event) => {
   forbuttonclick(event);

    let randomx = resultrandomoperator.current;
    let namaoperator = operatorname.current.value;
            if((namaoperator !== "") || (namaoperator !== undefined) || (randomx !== undefined)){
    let operatordata = {"operatorname": namaoperator, "invite": randomx }
         console.log("masuk ke operatordata");

       await fetch("https://localhost/operator", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(operatordata)
}).then((response) =>  response.json()
       ).then(function(data){
        if(data.answer === "ok"){
           success.current = "Success";
        console.log(success.current);
           forceUpdate(); 
}
});
}
}

const handleBackup = async (event) => {
   forbuttonclick(event);

        let backupdata = {backup: "ok"};

       await fetch("https://localhost/backupdb", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(backupdata)
}).then((response) =>  response.json()
       ).then(function(data){
        if(data.answer === "ok"){
   // let see what need to do
}
});
}


const handleRestore = async (event) => {
   forbuttonclick(event);

   let restoredata = {restore: "ok"}

       await fetch("https://localhost/restoredb", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(restoredata)
}).then((response) =>  response.json()
       ).then(function(data){
        if(data.answer === "ok"){
       // let see what need to do 
}
});
}

 


return(
<div className="Adminpagediv">
<div className="Inviteoperator">
<div className="Generatetokenoperatordiv">
<button onClick={(e) => handleClicktokenoperator(e)} className="Generatetokenoperatorbut">
Generate Token</button>
<span>{resultrandomoperator.current}</span>
</div>
<div className="Operatornameadmdiv">
<div className="Operatornameadmtext">Operator Name:</div>
<div className="Operatornameadmininputdiv">
<input type="text"  ref={operatorname} className="Operatornameinput" />
</div>
</div>
<div className="Submitoperatorbuttondiv">
<button onClick={(e) => handleSubmitoperator(e)} className="Submitoperator">Submit</button>
<span>{success.current}</span>
</div>
</div> {/* closing for Inviteoperator */}
<div className="Backuprestorediv">
<div className="Backupbuttondiv">
<button onClick={(e) => handleBackup(e)} className="Backupbutton">Backup</button>
</div>
<div className="Restorebuttondiv">
<button onClick={(e) => handleRestore(e)} className="Restorebutton">Restore</button>
</div>
</div>
</div>
);
}

export default Adminpage;
