import React, {useRef} from 'react';
import './InputData.css';


const InputData = () => {



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

const handleSubmit = async (event) => {
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
  <label htmlFor="Nama">Nama:</label>
  <div className="Namainputdiv">
    <input type="text" id="Nama" ref={nama} className="Namainput" />
  </div>
</div>
<div className="Tempattanggallahirdiv">
<div className="Tempatlahirdiv">
  <label htmlFor="Tempatlahir">Tempat lahir:</label>
  <div className="Tempatlahirinputdiv">
    <input type="text"  id="Tempatlahir" ref={tempatlahir}  className="Tempatlahirinput"/>
  </div>
</div>
<div className="Tanggallahirdiv">
  <span>Tanggal lahir:</span>
   <label htmlFor="Tanggal"> Tanggal: </label>
<select id="Tanggal" ref={date} className="Tanggalselect" >
<option selected>1</option>
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
</select>
   <label htmlFor="Bulan"> Bulan: </label>
<select id="Bulan" ref={month} className="Bulanselect">
	<option selected>1</option>
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
   <label htmlFor="Tahun"> Tahun: </label>

  <div className="Tanggallahirinputdiv" >
    <input id="Tahun" type="text" ref={tgllahir} className="Tanggallahirinput"/>
  </div>
</div>
</div> {/* closing of tempattanggallahirdiv */ }
<div className="Nohptowerunitdiv">
<div className="Nohpdiv">
  <label htmlFor="Nohp">No hp:</label>
  <div className="Nohpinputdiv">
    <input type="text" id="Nohp" ref={nohp} className="Nohpinput" />
  </div>
</div>
<div className="Towerdiv">
  <label htmlFor="Tower">Tower:</label>
 <select id="Tower" ref={tower} className="Towerselect">
        <option selected>A</option>
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
  <label htmlFor="Unit">Unit:</label>
  <div className="Unitinputdiv">
    <input id="Unit" type="text" ref={unit} className="Unitinput" />
  </div>
</div>
</div> {/* closing of nohptowerunitdiv */}
<div className="Statusperiodsewadiv">
<div className="Statusdiv">
  <label htmlFor="Status">Status:</label>
  <div className="Statusinputdiv">
    <input id="Status" type="text"  ref={status} className="Statusinput"/>
  </div>
</div>
<div className="Periodsewadiv">
  <label htmlFor="Periodsewa">Period Sewa:</label>
  <div className="Periodsewainputdiv">
    <input type="text" id="Periodsewa" ref={periodsewa} className="Periodsewainput"/>
  </div>
</div>
</div> {/* closing of statusperiodsewadiv */}
   <div className="Agendiv">
   <label htmlFor="Agen">Agen:</label>
  <div className="Ageninputdiv">
   <input id="Agen" type="text" ref={agen} className="Ageninput"/>
</div>    
</div>
<div className="Emergencyhpdiv">
 <label htmlFor="Emergencyhp"> Emergency hp:</label>
<div className="Emergencyhpinputdiv">   
<input id="Emergencyhp" type="text" ref={emergencyhp} className="Emergencyhpinput" />
</div>   
 </div>
  <div className="Pemilikunitdiv">
 <label htmlFor="Pemilikunit">Pemilik Unit:</label>
<div className="Pemilikunitinputdiv">  
 <input id="Pemilikunit" type="text" ref={pemilikunit}  className="Pemilikunitinput"/>
</div>   
 </div>
<div className="Submitresetdiv">
<button id="Submit" className="Submitbutton" onClick={(e) => handleSubmit(e)} >
<label htmlFor="Submit">Submit</label>
</button>
<button id="Reset" className="Resetbutton" onClick={(e) => handleReset(e)} >
<label htmlFor="Reset">Reset</label>
</button>
</div>
</div>
);
}

export default InputData;
