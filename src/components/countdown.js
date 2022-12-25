import React from 'react'
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DivTime, SpanTime, DivTimeFirst, DivTitle } from '../styles/countdown';


export default function CountDown({ toend }) {
    const [timetoend, setTimeToEnd]  = useState(new Date(toend));
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [second, setSecond] = useState(0);


    const getTimeRemaining = (endtime) => {
        const total = Date.parse(endtime) - Date.parse(new Date());
        setSecond(Math.floor((total / 1000) % 60));
        setMin(Math.floor((total / 1000 / 60) % 60));
        setHour(Math.floor((total / (1000 * 60 * 60)) % 24));
        setDay(Math.floor(total / (1000 * 60 * 60 * 24)));

        return total;
    }

    const updateClock = () => {
        return getTimeRemaining(timetoend);
    }
      

    useEffect(() => {

        const interval = setInterval(() => {
            setTimeToEnd(timetoend-1000)
            updateClock()
        }, 1000);
        return () => 
        {   
            if(timetoend===0)
            {
                clearInterval(interval);
            }
        };
    }, []);

    
    return (
      <>
            <Row className="justify-content-md-center">
                <Col xs={3} md={3}>
                    <DivTitle>Days</DivTitle>
                    <DivTimeFirst>
                        <DivTime>
                            <SpanTime>
                                {(day > 100) ? day : ('0' + day).slice(-2)}
                            </SpanTime>
                        </DivTime>
                    </DivTimeFirst>
                </Col>
                <Col xs={3} md={3}>
                    <DivTitle>Hours</DivTitle>
                    <DivTimeFirst>
                        <DivTime>
                            <SpanTime>
                            {('0' + hour).slice(-2)}
                            </SpanTime>
                        </DivTime>
                    </DivTimeFirst>
                </Col>
                <Col xs={3} md={3}>
                    <DivTitle>Minutes</DivTitle>
                    <DivTimeFirst>
                        <DivTime>
                            <SpanTime>
                                {('0' + min).slice(-2)}
                            </SpanTime>
                        </DivTime>
                    </DivTimeFirst>
                </Col>
                <Col xs={3} md={3}>
                    <DivTitle>Seconds</DivTitle>
                    <DivTimeFirst>
                        <DivTime>
                            <SpanTime>
                                {('0' + second).slice(-2)}
                            </SpanTime>
                        </DivTime>
                    </DivTimeFirst>
                </Col>
            </Row>
      </>      
    );
  }