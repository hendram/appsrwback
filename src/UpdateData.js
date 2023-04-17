import React, {useRef, useEffect} from 'react';
import Emitter from './Emitter';
import Emitter2 from './Emitter';
import Emitter3 from './Emitter';

const UpdateData = () => {


const temp = useRef();
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

const fillinupdate = (actionvalue) => {
         temp.current = actionvalue;
     console.log(temp.current);
}


useEffect(() => {
 if(temp.current !== undefined){
  console.log(temp.current.nama);

  nama.current.value = temp.current.nama;
  tempatlahir.current.value = temp.current.tempatlahir;
  tgllahir.current.value = temp.current.tgllahir;
  nohp.current.value = temp.current.nohp;
  tower.current.value = temp.current.tower;
  unit.current.value = temp.current.unit;
  status.current.value = temp.current.status;
  periodsewa.current.value = temp.current.periodsewa;
  agen.current.value = temp.current.agen;
  emergencyhp.current.value = temp.current.emergencyhp;
  pemilikunit.current.value = temp.current.pemilikunit;
}
}, [temp.current]);

const numberListenereven = Emitter.listenerCount('actioneven', fillinupdate);
if(numberListenereven < 1){
    Emitter.on('actioneven', fillinupdate);
}

const numberListenerodd = Emitter2.listenerCount('actionodd', fillinupdate);
if(numberListenerodd < 1){
    Emitter2.on('actionodd', fillinupdate);
}

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

   let datainput = { "oldnama": temp.current.nama, "oldtempatlahir": temp.current.tempatlahir, "oldtgllahir": temp.current.tgllahir,
"oldnohp": temp.current.nohp, "oldtower": temp.current.tower, "oldunit": temp.current.unit, "oldstatus": temp.current.status,
"oldperiodsewa": temp.current.periodsewa, "oldagen": temp.current.agen, "oldemergencyhp": temp.current.emergencyhp,
"oldpemilikunit": temp.current.pemilikunit, 
"nama": namanya, "tempatlahir": tempatlahirnya, "tgllahir": tgllahirnya, 
"nohp": nohpnya, "tower": towernya, "unit": unitnya, "status": statusnya, "periodsewa": periodsewanya,
"agen": agennya, "emergencyhp": emergencyhpnya, "pemilikunit": pemilikunitnya }

  await fetch("https://localhost/updatedata", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(datainput)
}).then((response) => response.json()
   ).then(function(data){
    if(data.answer === "ok"){

    nama.current.value = "";
   tempatlahir.current.value = "";
   tgllahir.current.value = "";
   nohp.current.value = "";
   tower.current.value = "";
   unit.current.value = "";
   status.current.value = "";
   periodsewa.current.value = "";
   agen.current.value = "";
   emergencyhp.current.value = "";
   pemilikunit.current.value = "";

    Emitter3.emit('refreshsearch', "");         
}
});



}


const handleReset = (event) => {
   event.stopPropagation();
    event.preventDefault();

    nama.current.value = "";
   tempatlahir.current.value = "";
   tgllahir.current.value = "";
   nohp.current.value = "";
   tower.current.value = "";
   unit.current.value = "";
   status.current.value = "";
   periodsewa.current.value = "";
   agen.current.value = "";
   emergencyhp.current.value = "";
   pemilikunit.current.value = "";

}



return(
  <div>
   <div>
   <span>Nama:</span>
  <input type="text" width="5vw" ref={nama}/>
    </div>
   <div>
   <span>Tempat lahir:</span>
   <input type="text" width="5vw" ref={tempatlahir}/>
    </div>
   <div>
   <span>Tanggal lahir:</span>
   <input type="text" width="5vw" ref={tgllahir} />
    </div>
   <div>
   <span>No hp:</span>
   <input type="text" width="5vw" ref={nohp} />
    </div>
   <div>
   <span>Tower:</span>
   <input type="text" width="5vw" ref={tower} />
    </div>
   <div>
   <span>Unit:</span>
   <input type="text" width="5vw" ref={unit} />
    </div>
   <div>
   <span>Status:</span>
   <input type="text" width="5vw" ref={status} />
    </div>
   <div>
   <span>Period Sewa:</span>
   <input type="text" width="5vw" ref={periodsewa}/>
    </div>
   <div>
   <span>Agen:</span>
   <input type="text" width="5vw" ref={agen} />
    </div>
<div>
 <span>Emergency hp:</span>
   <input type="text" width="5vw" ref={emergencyhp} />
    </div>
  <div>
 <span>Pemilik Unit:</span>
   <input type="text" width="5vw" ref={pemilikunit} />
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
