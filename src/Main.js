import React, {Component} from 'react';

import Calendar from './Calendar';
import Time from './Time';

class Main extends Component {

    render() {
      return (
          <div>
            <h1>
            Appointment Booking
          </h1>
          <div className="Rectangle110">
            <Calendar random="test" />

            <div className="Appointmenttype">
              <a className="Appointment">Appointment Type</a><br></br>
              <a className="Free">Free Consultation</a><br></br>
              <a className="Please">Please select an availble time that 
              works best for your schedule.</a>
            </div>
            <div className="Vector">
            </div>
            <Time />
          </div>
          <div className="Available">
            AVAILABLE
          </div>
          <div className="Booked">
            <a className="Bookedcolor">BOOKED</a>
          </div>
          </div>
        
  
      );
    }
  }
  
  
  export default Main;
