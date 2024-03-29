import {useEffect, useState} from "react";
import {MDBBtn, MDBCol, MDBListGroup, MDBRow} from "mdb-react-ui-kit";
import "./App.css";
import Quiz from "./components/Quiz";
import {data, prizeMoney} from "./data";
import Timer from "./components/Timer";
import Start from "./components/Start";
import * as _ from 'lodash';
const exportedData = _.shuffle(data)
function App() {
    const [name, setName] = useState(null);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [timeOut, setTimeOut] = useState(false);
    const [earned, setEarned] = useState("DH 0");

    useEffect(() => {
        questionNumber > 1 &&
        setEarned(
            prizeMoney.find((item) => item.id === questionNumber - 1).amount
        );
    }, [questionNumber]);

    return (
        <div className="App">
            {!name ? (
                <Start setName={setName} setTimeOut={setTimeOut}/>
            ) : (
                <MDBRow>
                    <MDBCol md="9">
                        <div className="main">
                            {timeOut ? (
                                <h1 className="earned">You Earned Total: {earned}

                                    <h2>
                                        ILA MA SIR HIR T9WED
                                    </h2>
                                </h1>
                            ) : (
                                <>
                                    <div style={{height: "50%", position: "relative"}}>
                                        <div className="timer">
                                            <Timer
                                                setTimeOut={setTimeOut}
                                                questionNumber={questionNumber}
                                            />
                                        </div>
                                    </div>
                                    <div style={{height: "50%"}}>
                                        <Quiz
                                            data={exportedData}
                                            questionNumber={questionNumber}
                                            setQuestionNumber={setQuestionNumber}
                                            setTimeOut={setTimeOut}
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    </MDBCol>
                    <MDBCol md="3" className="money">
                        <MDBListGroup className="money-list">
                            <MDBRow>
                <span className="mb-2">
                  <MDBBtn
                      style={{float: "right"}}
                      className="mx-2"
                      color="light"
                      onClick={() => setTimeOut(true)}
                  >
                    Quit
                  </MDBBtn>
                  <MDBBtn
                      style={{float: "right"}}
                      onClick={() => {
                          setName(null);
                          setQuestionNumber(1);
                          setEarned("DH 0");
                      }}
                  >
                    Exit
                  </MDBBtn>
                </span>
                                <MDBCol md="6">Name: {name}</MDBCol>
                                <MDBCol md="6">Total Earned: {earned}</MDBCol>
                            </MDBRow>
                            <hr/>
                            {prizeMoney.map((item) => (
                                <>
                                    <li
                                        className={
                                            questionNumber === item.id ? "item active" : "item"
                                        }
                                    >
                                        <h5 className="amount">{item.amount}</h5>
                                    </li>
                                </>
                            ))}
                        </MDBListGroup>
                    </MDBCol>
                </MDBRow>
            )}
        </div>
    );
}

export default App;
