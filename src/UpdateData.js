import React, {useRef, useEffect} from 'react';
import Emitter from './Emitter';
import Emitter2 from './Emitter';
import Emitter3 from './Emitter';
import './InputData.css';

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
  <div className="Inputdiv">
<div className="Namadiv">
  <span>Nama:</span>
  <div className="Namainputdiv">
    <input type="text" ref={nama} className="Namainput" />
  </div>
</div>
<div className="Tempattanggallahirdiv">
<div className="Tempatlahirdiv">
  <span>Tempat lahir:</span>
  <div className="Tempatlahirinputdiv">
    <input type="text" ref={tempatlahir}  className="Tempatlahirinput"/>
  </div>
</div>
<div className="Tanggallahirdiv">
  <span>Tanggal lahir:</span>
   <span> Tanggal: </span>
<select ref={date} >
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
   <span> Bulan: </span>
<select ref={month}>
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
   <span> Tahun: </span>
 <div className="Tanggallahirinputdiv" >
    <input type="text" ref={tgllahir} className="Tanggallahirinput"/>
  </div>
</div>
</div> {/* closing of tempattanggallahirdiv */ }
<div className="Nohptowerunitdiv">
<div className="Nohpdiv">
  <span>No hp:</span>
  <div className="Nohpinputdiv">
    <input type="text" ref={nohp} className="Nohpinput" />
  </div>
</div>
<div className="Towerdiv">
  <span>Tower:</span>
 <select ref={tower}>
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
  <span>Unit:</span>
  <div className="Unitinputdiv">
    <input type="text" ref={unit} className="Unitinput" />
 </div>
</div>
</div> {/* closing of nohptowerunitdiv */}
<div className="Statusperiodsewadiv">
<div className="Statusdiv">
  <span>Status:</span>
  <div className="Statusinputdiv">
    <input type="text"  ref={status} className="Statusinput"/>
  </div>
</div>
<div className="Periodsewadiv">
  <span>Period Sewa:</span>
  <div className="Periodsewainputdiv">
    <input type="text" ref={periodsewa} className="Periodsewainput"/>
  </div>
</div>
</div> {/* closing of statusperiodsewadiv */}
   <div className="Agendiv">
   <span>Agen:</span>
  <div className="Ageninputdiv">
   <input type="text" ref={agen} className="Ageninput"/>
</div>    
</div>
<div className="Emergencyhpdiv">
 <span>Emergency hp:</span>
<div className="Emergencyhpinputdiv">   
<input type="text" ref={emergencyhp} className="Emergencyhpinput" />
</div>   
 </div>
  <div className="Pemilikunitdiv">
 <span>Pemilik Unit:</span>
<div className="Pemilikunitinputdiv">  
 <input type="text" ref={pemilikunit}  className="Pemilikunitinput"/>
</div>   
 </div>
<div className="Submitresetdiv">
<button className="Submitbutton" onClick={(e) => handleUpdate(e)} >
<span>Update</span>
</button>
<button className="Resetbutton" onClick={(e) => handleReset(e)} >
<span>Reset</span>
</button>
</div>
</div>

);
}

export default UpdateData;
