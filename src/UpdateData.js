import React, {useRef, useEffect} from 'react';
import Emitter from './Emitter';
import Emitter2 from './Emitter';
import Emitter3 from './Emitter';
import './UpdateData.css';

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
const date = useRef(null);
const month = useRef(null);


const fillinupdate = (actionvalue) => {
         temp.current = actionvalue;
     console.log(temp.current);
}


useEffect(() => {
 if(temp.current !== undefined){
  console.log(temp.current.nama);

  nama.current.value = temp.current.nama;
  tempatlahir.current.value = temp.current.tempatlahir;
  date.current.value = temp.current.tgllahir.split(" - ")[0];
  month.current.value = temp.current.tgllahir.split(" - ")[1];
  tgllahir.current.value = temp.current.tgllahir.split(" - ")[2];
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
   let tgllahirnya = date.current.value + " - " + month.current.value + " - " + tgllahir.current.value;
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
<div className="Updatediv">
<div className="Namadiv">
  <label htmlFor="Namau">Nama:</label>
  <div className="Namainputdiv">
    <input type="text" id="Namau" ref={nama} className="Namainputu" />
  </div>
</div>
<div className="Tempattanggallahirdiv">
<div className="Tempatlahirdiv">
  <label htmlFor="Tempatlahiru">Tempat lahir:</label>
  <div className="Tempatlahirinputdiv">
    <input type="text"  id="Tempatlahiru" ref={tempatlahir}  className="Tempatlahirinputu"/>
  </div>
</div>
<div className="Tanggallahirdiv">
  <span>Tanggal lahir:</span>
   <label htmlFor="Tanggalu"> Tanggal: </label>
<select id="Tanggalu" ref={date} >
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
<option>6</option>
<option>7</option>
<option>8</option>
<option>9</option>
<option>10</option>
<option>11</option>
<option>12</option>
<option>13</option>
<option>14</option>
<option>15</option>
<option>16</option>
<option>17</option>
<option>18</option>
<option>19</option>
<option>20</option>
<option>21</option>
<option>22</option>
<option>23</option>
<option>24</option>
<option>25</option>
<option>26</option>
<option>27</option>
<option>28</option>
<option>29</option>
<option>30</option>
<option>31</option>
<option>31</option>
</select>
   <label htmlFor="Bulanu"> Bulan: </label>
<select id="Bulanu" ref={month}>
	<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
<option>6</option>
<option>7</option>
<option>8</option>
<option>9</option>
<option>10</option>
<option>11</option>
<option>12</option>
</select>
   <label htmlFor="Tahunu"> Tahun: </label>

  <div className="Tanggallahirinputdiv" >
    <input id="Tahunu" type="text" ref={tgllahir} className="Tanggallahirinputu"/>
  </div>
</div>
</div> {/* closing of tempattanggallahirdiv */ }
<div className="Nohptowerunitdiv">
<div className="Nohpdiv">
  <label htmlFor="Nohpu">No hp:</label>
  <div className="Nohpinputdiv">
    <input type="text" id="Nohpu" ref={nohp} className="Nohpinputu" />
  </div>
</div>
<div className="Towerdiv">
  <label htmlFor="Toweru">Tower:</label>
 <select id="Toweru" ref={tower}>
        <option>A</option>
<option>B</option>
<option>C</option>
<option>D</option>
<option>E</option>
<option>F</option>
<option>G</option>
<option>H</option>
<option>J</option>
<option>K</option>
<option>L</option>
<option>M</option>
</select>

</div>
<div className="Unitdiv">
  <label htmlFor="Unitu">Unit:</label>
  <div className="Unitinputdiv">
    <input id="Unitu" type="text" ref={unit} className="Unitinputu" />
  </div>
</div>
</div> {/* closing of nohptowerunitdiv */}
<div className="Statusperiodsewadiv">
<div className="Statusdiv">
  <label htmlFor="Statusu">Status:</label>
  <div className="Statusinputdiv">
    <input id="Statusu" type="text"  ref={status} className="Statusinputu"/>
  </div>
</div>
<div className="Periodsewadiv">
  <label htmlFor="Periodsewau">Period Sewa:</label>
  <div className="Periodsewainputdiv">
    <input type="text" id="Periodsewau" ref={periodsewa} className="Periodsewainputu"/>
  </div>
</div>
</div> {/* closing of statusperiodsewadiv */}
   <div className="Agendiv">
   <label htmlFor="Agenu">Agen:</label>
  <div className="Ageninputdiv">
   <input id="Agenu" type="text" ref={agen} className="Ageninputu"/>
</div>    
</div>
<div className="Emergencyhpdiv">
 <label htmlFor="Emergencyhpu"> Emergency hp:</label>
<div className="Emergencyhpinputdiv">   
<input id="Emergencyhpu" type="text" ref={emergencyhp} className="Emergencyhpinputu" />
</div>   
 </div>
  <div className="Pemilikunitdiv">
 <label htmlFor="Pemilikunitu">Pemilik Unit:</label>
<div className="Pemilikunitinputdiv">  
 <input id="Pemilikunitu" type="text" ref={pemilikunit}  className="Pemilikunitinputu"/>
</div>   
 </div>
<div className="Submitresetdiv">
<button id="Update" className="Updatebutton" onClick={(e) => handleUpdate(e)} >
<label htmlFor="Update">Update</label>
</button>
<button id="Resetu" className="Resetbuttonu" onClick={(e) => handleReset(e)} >
<label htmlFor="Resetu">Reset</label>
</button>
</div>
</div>
);
}

export default UpdateData;
