import React, {useRef} from 'react';

const UpdateData = () => {

const nama = useRef(null);
const tempatlahir = useRef(null);
const tgllahir = useRef(null);
const nohp = useRef(null);
const tower = useRef(null);
const unit = useRef(null);
const status = useRef(null);
const periodsewa = useRef(null);
const agen = useRef(null);
const emergencyhp = useRef(null);
const pemilikunit = useRef(null);

const handleUpdate = async (event) => {
   event.stopPropagation();
    event.preventDefault();

 let namanya = nama.current.value;
   let tempatlahirnya = tempatlahir.current.value;
   let tgllahirnya = tgllahir.current.value;
   let nohpnya = nohp.current.value;
   let towernya = tower.current.value;
   let unitnya = unit.current.value;
   let statusnya = status.current.value;
   let periodsewanya = periodsewa.current.value;
   let agennya = agen.current.value;
   let emergencyhpnya = emergencyhp.current.value;
   let pemilikunitnya = pemilikunit.current.value;

   let datainput = { "nama": namanya, "tempatlahir": tempatlahirnya, "tgllahir": tgllahirnya, 
"nohp": nohpnya, "tower": towernya, "unit": unitnya, "status": statusnya, "periodsewa": periodsewanya,
"agen": agennya, "emergencyhp": emergencyhpnya, "pemilikunit": pemilikunitnya }

  await fetch("https://localhost/isidata", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(datainput)
}).then((response) => response.json()
   ).then(function(data){
    if(data.answer === "ok"){
         // harus direset all
}
});



}

const handleReset = (event) => {
   event.stopPropagation();
    event.preventDefault();

}


return(
  <div>
   <div>
   <span>Nama:</span>
   <input type="text" width="5vw"/>
    </div>
   <div>
   <span>Tempat lahir:</span>
   <input type="text" width="5vw"/>
    </div>
   <div>
   <span>Tanggal lahir:</span>
   <input type="text" width="5vw"/>
    </div>
   <div>
   <span>No hp:</span>
   <input type="text" width="5vw"/>
    </div>
   <div>
   <span>Tower:</span>
   <input type="text" width="5vw"/>
    </div>
   <div>
   <span>Unit:</span>
   <input type="text" width="5vw"/>
    </div>
   <div>
   <span>Status:</span>
   <input type="text" width="5vw"/>
    </div>
   <div>
   <span>Period Sewa:</span>
   <input type="text" width="5vw"/>
    </div>
   <div>
   <span>Agent:</span>
   <input type="text" width="5vw"/>
    </div>
<div>
 <span>Emergency hp:</span>
   <input type="text" width="5vw"/>
    </div>
  <div>
 <span>Pemilik Unit:</span>
   <input type="text" width="5vw"/>
    </div>
<div>
<button onClick={(e) => handleUpdate(e)} >
<span>Update</span>
</button>
<button onClick={(e) => handleReset(e)} >
<span>Reset</span>
</button>
</div>

</div>
);
}

export default UpdateData;
