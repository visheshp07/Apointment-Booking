import React, {Component} from 'react';
import {Link} from "react-router-dom";


class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: true
        };
    };

    componentDidMount() {
        console.log("DidMount");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState, this.state);
    }

    render() {
        const { click } = this.state;
        console.log(click);
      return (
                <div>
                    <div className="Week">
                        August 5 - 11, 2020
                    </div>
                    <div className="Rectangle111">
                        <div>
                            <div className="Sun5">
                                Sun <a className="Weekdate">05</a>
                            </div>
                            <div className="Booking11">
                                9:00 am
                            </div>
                            <div className="Booking12">
                                9:30 am
                            </div>
                            <div className="Booking13">
                                10:00 am
                            </div>
                            <div className="Booking14">
                                10:30 am
                            </div>
                            <div className="Booking15">
                                11:00 am
                            </div>
                            <div className="Booking16">
                                11:30 am
                            </div>
                            <div className="Booking17">
                                12:00 pm
                            </div>
                            <div className="Booking18">
                                12:30 pm
                            </div>
                            <div className="Booking19">
                                1:00 pm
                            </div>
                            <div className="Booking110">
                                1:30 pm
                            </div>
                            <div className="Booking111">
                                2:00 pm
                            </div>
                        </div>
                        
                        <div className="Rectangle112">
                            <div className="Mon6">
                                Mon <a className="Weekdate">06</a>
                            </div>
                            <div className="Booking21">
                                9:00 am
                            </div>
                            <div className="Booking22">
                                9:30 am
                            </div>
                            <div className="Booking23">
                                10:00 am
                            </div>
                            <div className="Booking24">
                                10:30 am
                            </div>
                            <div className="Booking25">
                                11:00 am
                            </div>
                            <div className="Booking26">
                                11:30 am
                            </div>
                            <div className="Booking27">
                                12:00 pm
                            </div>
                            <div className="Booking28">
                                12:30 pm
                            </div>
                            <div className="Booking29">
                                1:00 pm
                            </div>
                            <div className="Booking210">
                                1:30 pm
                            </div>
                            <div className="Booking211">
                                2:00 pm
                            </div>
                        </div>

                        <div>
                            <div className="Tue7">
                                Tue <a className="Weekdate">07</a>
                            </div>
                            <div className="Booking31">
                                9:00 am
                            </div>
                            <div className="Booking32">
                                9:30 am
                            </div>
                            <div className="Booking33">
                                10:00 am
                            </div>
                            <div className="Booking34">
                                10:30 am
                            </div>
                            <div className="Booking35">
                                11:00 am
                            </div>
                            <div className="Booking36">
                                11:30 am
                            </div>
                            <div className="Booking37">
                                12:00 pm
                            </div>
                            <div className="Booking38">
                                12:30 pm
                            </div>
                            <div className="Booking39">
                                1:00 pm
                            </div>
                            <div className="Booking310">
                                1:30 pm
                            </div>
                            <div className="Booking311">
                                2:00 pm
                            </div>
                        </div>

                        <div className="Rectangle113">
                            <div className="Wed8">
                                Wed <a className="Today">Today</a> 
                                <a className="Weekdate">08</a>
                            </div>
                            <div className="Booking41">
                                9:00 am
                            </div>
                            <div className="Booking42" >
                                <a ><Link className="TextDeco" to="/Appointment">9:30 am</Link></a>
                            </div>
                            <div className="Booking43">
                                10:00 am
                            </div>
                            <div className="Booking44">
                                10:30 am
                            </div>
                            <div className="Booking45">
                                11:00 am
                            </div>
                            <div className="Booking46">
                                11:30 am
                            </div>
                            <div className="Booking47">
                                12:00 pm
                            </div>
                            <div className="Booking48">
                                12:30 pm
                            </div>
                            <div className="Booking49">
                                1:00 pm
                            </div>
                            <div className="Booking410">
                                1:30 pm
                            </div>
                            <div className="Booking411">
                                2:00 pm
                            </div>
                        </div>
                        <div>
                            <div className="Thu9">
                                Thu <a className="Weekdate">09</a>
                            </div>
                            <div className="Booking51">
                                9:00 am
                            </div>
                            <div className="Booking52">
                                9:30 am
                            </div>
                            <div className="Booking53">
                                10:00 am
                            </div>
                            <div className="Booking54">
                                10:30 am
                            </div>
                            <div className="Booking55">
                                11:00 am
                            </div>
                            <div className="Booking56">
                                11:30 am
                            </div>
                            <div className="Booking57">
                                12:00 pm
                            </div>
                            <div className="Booking58">
                                12:30 pm
                            </div>
                            <div className="Booking59">
                                1:00 pm
                            </div>
                            <div className="Booking510">
                                1:30 pm
                            </div>
                            <div className="Booking511">
                                2:00 pm
                            </div>
                        </div>
                        <div className="Rectangle114">
                            <div className="Fri10">
                                Fri <a className="Weekdate">10</a>
                            </div>
                            <div className="Booking61">
                                9:00 am
                            </div>
                            <div className="Booking62">
                                9:30 am
                            </div>
                            <div className="Booking63">
                                10:00 am
                            </div>
                            <div className="Booking64">
                                10:30 am
                            </div>
                            <div className="Booking65">
                                11:00 am
                            </div>
                            <div className="Booking66">
                                11:30 am
                            </div>
                            <div className="Booking67">
                                12:00 pm
                            </div>
                            <div className="Booking68">
                                12:30 pm
                            </div>
                            <div className="Booking69">
                                1:00 pm
                            </div>
                            <div className="Booking610">
                                1:30 pm
                            </div>
                            <div className="Booking611">
                                2:00 pm
                            </div>
                        </div>
                        <div>
                            <div className="Sat11">
                                Sat <a className="Weekdate">11</a>
                            </div>
                            <div className="Booking71">
                                9:00 am
                            </div>
                            <div className="Booking72">
                                9:30 am
                            </div>
                            <div className="Booking73">
                                10:00 am
                            </div>
                            <div className="Booking74">
                                10:30 am
                            </div>
                            <div className="Booking75">
                                11:00 am
                            </div>
                            <div className="Booking76">
                                11:30 am
                            </div>
                            <div className="Booking77">
                                12:00 pm
                            </div>
                            <div className="Booking78">
                                12:30 pm
                            </div>
                            <div className="Booking79">
                                1:00 pm
                            </div>
                            <div className="Booking710">
                                1:30 pm
                            </div>
                            <div className="Booking711">
                                2:00 pm
                            </div>
                        </div>
                    </div>      
                </div>
      );
    }
  }
  
  
  export default Time;