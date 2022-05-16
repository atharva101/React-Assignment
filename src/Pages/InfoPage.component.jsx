import TrainList from "../Components/Trains/TrainList";

import './InfoPage.styles.css'
const InfoPage = (props) => {

    return (
      <div className="container">
        <div className="map">
            <h2>map aayega</h2>
        </div>
        <div className="trainlist">
          <TrainList token = {props.accessToken}/>
        </div>
      </div>
    );
}

export default InfoPage;