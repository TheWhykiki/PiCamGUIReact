
import { useState } from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

import './Main.scss';

import {faArrowAltCircleLeft} from "@fortawesome/pro-solid-svg-icons";
import {faArrowAltCircleRight} from "@fortawesome/pro-solid-svg-icons";
import {faArrowAltCircleUp} from "@fortawesome/pro-solid-svg-icons";
import {faArrowAltCircleDown} from "@fortawesome/pro-solid-svg-icons";
import ButtonIcon from "../../components/ButtonIcon";

function Main() {
    const [turnState, setTurnState] = useState(0);

    const handleTurnLeft = value => () => {
        value = turnState + 5;
        if(value >= 330)
        {
            notifyHigh();
            value = 330;
        }
        else{
            axios.post('http://192.168.178.47:5000/umdrehung/' + value, {})
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
        }
        setTurnState(value);
        console.log(turnState);
    };

    const handleTurnRight = value => () => {
        value = turnState -5;
        if(value <= -330)
        {
            notifyLow();
            value = -330;
        }
        else{
            axios.post('http://192.168.178.47:5000/umdrehungBack/' + (-value), {})
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
        }
        setTurnState(value);
        console.log(turnState);
    };

    const notifyHigh = () => toast.info('High', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const notifyLow = () => toast.info('Low', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: 'Open Sans',
            weights: [400, '400i', 600, 700],
          },
          {
            font: 'Roboto Mono',
            weights: [400, 700],
          },
        ]}
        subsets={['cyrillic-ext', 'greek']}
      />

      <div className="appContainer fontLight">
        <ToastContainer />

        <section className="sectionDefault" id="mainSection">
            <div className="uk-container" id="headingContainer">
                <h1 className="uk-heading-large textCenter">
                  Cam GUI V1.0
                </h1>
            </div>

            <div className="uk-container" id="buttonContainer">
                <div className="emptyLeft gridItem"></div>
                <div className="gridItem buttonTop">
                    <ButtonIcon className="rotateBtn stdBtn marginAuto"  icon={faArrowAltCircleUp}></ButtonIcon>
                </div>
                <div className="emptyRigh gridItem"></div>

                <div className="gridItem buttonLeft">
                    <ButtonIcon className="rotateBtn stdBtn marginAuto" onClick={handleTurnLeft()} icon={faArrowAltCircleLeft}></ButtonIcon>
                </div>
                <div className="gridCenter gridItem"></div>
                <div className="gridItem buttonRight">
                    <ButtonIcon className="rotateBtn stdBtn marginAuto" onClick={handleTurnRight()} icon={faArrowAltCircleRight}></ButtonIcon>
                </div>

                <div className="emptyLeftBottom"></div>
                <div className="gridItem buttonBottom">
                    <ButtonIcon className="rotateBtn stdBtn marginAuto" icon={faArrowAltCircleDown}></ButtonIcon>
                </div>
                <div className="emptyRightBottom"></div>

            </div>

        </section>
      </div>
    </>
  );
}

export default Main;
