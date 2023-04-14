import React from 'react';
import TableContent from './TableContent';
import './UserManagement.css';
import Search from './images/Search';
import Filter from './images/Filter';
import Arrowleft from './images/Arrowleft';
import Arrowright from './images/Arrowright';

const UserManagement = () => {
     

return(
<div>
<div className="topouterright">
<div className="innerfiltertable">
<div className="filterinput">
<div className="filtertextdiv">
<Search className="searchbutton" />
<input type="text" placeholder="Type keyword" className="filterinputtext"/>
</div>
<div className="filterbuttondiv">
<button className="filterinputbutton">
<div className="filterdiv">
<Filter/>
<span className="filterspan"> Filters</span>
</div>
</button>
</div>
</div> {/* closing for filterinput */}
<TableContent/>
</div> {/* closing for innerfiltertable */}

</div> {/* closing for topouterright */}
<div className="counterpagediv">
<div className="countertextdiv">
<span className="countertextspan">1 - 15 of 30 </span>
</div>
<div className="textselectpagediv">
<div className="textpagediv">
<span className="textpagespan"> The page you're on </span>
</div>
<div className="selectpagediv">
<select>
<option>1</option>
<option>2</option>
</select>
</div>
<div className="pipetextdiv">
<span className="pipetextspan"> | </span>
</div>
<div className="arrowleftdiv">
<Arrowleft />
</div>
<div className="arrowrightdiv">
<Arrowright />
</div>
</div> {/* closing for textselectpagediv */}
</div> {/* closing for counterpagediv */}

</div>
)
}

export default UserManagement;
