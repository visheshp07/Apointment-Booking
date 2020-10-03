import React, {Component} from 'react';
import {Link} from "react-router-dom";




class Appointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: true
        };
        console.log(props);
    };

    componentDidMount() {
        console.log("DidMount");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState, this.state);
    }

    render() {
        return (
            <div>
                <div className="Appodetail">
                    <div className="Appodetailbox">
                        <div >
                        <Link to="/Main"><img src ="/close.png" className="Close" /></Link>
                        </div>
                        <div className="Appointmentheader">
                            <a>Appointment Details</a>
                        </div>
                        <div className="Appointmentdate">
                            Wednesday, August 8th 2020 <br></br>
                            9:30am - 10:00am
                        </div>
                        <div className="Appointmentbookingtime">
                            Free Consultation - 30 mins
                        </div>
                        <div className="Phonenumber">
                            Phone Number:
                        </div>
                        <div className="Container">
                            
                        </div>
                        <div className="Reason">
                            Reason for Booking:
                        </div>
                        <div className="Reasoncontainer">
                            <a className="Pleasereason">Please share anything that will help the Practitioner prepare for your session.</a>
                        </div>
                        <div className="MakeAppointment">
                            <a className="makeappointmenttext">MAKE APPOINTMENT</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  }
  
  
  export default Appointment;