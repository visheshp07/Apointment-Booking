import React, {Component} from 'react';



class Calendar extends Component {
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
        console.log("Render");
        const { click } = this.state;
        console.log(click);
      return (
                <div>
                    <div className="Month">
                        August <a className="Year">2020</a>
                    </div>
                    <div className="Days">
                        <div className="SUN">
                            SUN
                        </div>
                        <div className="MON">
                            MON
                        </div>
                        <div className="TUE">
                            TUE
                        </div>
                        <div className="WED">
                            WED
                        </div>
                        <div className="THU">
                            THU
                        </div>
                        <div className="FRI">
                            FRI
                        </div>
                        <div className="SAT">
                            SAT
                        </div>
                    </div>
                    <div className="Rectangle84" onClick={() => this.setState({ click: !click })}>
                        <div className="Dates">
                            <div className="Twentyninelight">
                                29
                            </div>
                            <div className="Five">
                                5
                            </div>
                            <div className="Twelve">
                                12
                            </div>
                            <div className="Nineteen">
                                19
                            </div>
                            <div className="Twentysix">
                                26
                            </div>
                        </div>
                        <div className="Rectangle85">
                            <div className="Thirtylight">
                                30
                            </div>
                            <div className="Six">
                                6
                            </div>
                            <div className="Thirteen">
                                13
                            </div>
                            <div className="Twenty">
                                20
                            </div>
                            <div className="Twentyseven">
                                27
                            </div>
                        </div>
                        <div className="Dates">
                            <div className="Thirtyonelight">
                                31
                            </div>
                            <div className="Seven">
                                7
                            </div>
                            <div className="Forteen">
                                14
                            </div>
                            <div className="Twentyone">
                                21
                            </div>
                            <div className="Twentyeight">
                                28
                            </div>
                        </div>
                        <div className="Rectangle86">
                            <div className="One">
                                1
                            </div>
                            <div className="Eight">
                                8
                            </div>
                            <div className="Fifteen">
                                15
                            </div>
                            <div className="Twentytwo">
                                22
                            </div>
                            <div className="Twentynine">
                                29
                            </div>
                        </div>
                        <div className="Dates">
                            <div className="Two">
                                2
                            </div>
                            <div className="Nine">
                                9
                            </div>
                            <div className="Sixteen">
                                16
                            </div>
                            <div className="Twentythree">
                                23
                            </div>
                            <div className="Thirtyheavy">
                                30
                            </div>
                        </div>
                        <div className="Rectangle87">
                            <div className="Three">
                                3
                            </div>
                            <div className="Ten">
                                10
                            </div>
                            <div className="Seventeen">
                                17
                            </div>
                            <div className="Twentyfour">
                                24
                            </div>
                            <div className="Thirtyone">
                                31
                            </div>
                        </div>
                        <div className="Dates">
                            <div className="Four">
                                4
                            </div>
                            <div className="Eleven">
                                11
                            </div>
                            <div className="Eighteen">
                                18
                            </div>
                            <div className="Twentyfive">
                                25
                            </div>
                            <div className="Onelight">
                                1
                            </div>
                        </div>
                    </div>
                </div>
      );
    }
  }
  
  
  export default Calendar;