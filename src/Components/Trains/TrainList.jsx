import axios from "axios";
import { useEffect, useState } from "react";
import './TrainList.styles.css'
const TrainList = (props) => {
    console.log(props.token)
    const [trainList,setTrainList] = useState([]);
    let token = props.token
    useEffect(()=> {
axios
  .get(
    "https://indian-railway.vercel.app/api/trains",

    { headers: { Authorization: `Bearer ${token}` } }
  )
  .then((res) => setTrainList(res.data.result));
    },[])
    

    if(props.token === '' || props.token === undefined){
        window.location.href = '/'
    }
    else{
        return(
             <div className="trainList-container">
                 { console.log(trainList.name)}
                 {trainList.map( (item,index) => {
                     return (
                       <div classname = 'trainlist-item'>
                         <input
                           type="checkbox"
                           name={item.name}
                           value={item.name}>
                         </input>
                         <label for={item.name}> {item.name}</label>
                         <br></br>
                       </div>
                     );
                 })}
            </div>
        )}
    
}

export default TrainList;