  
import React, { Component } from 'react';
import {Row, Col } from 'reactstrap';
import ChainStatus from './ChainStatusContainer.js';
import ChainInfo from '../components/ChainInfo.jsx'
import Consensus from './ConsensusContainer.js';
import TopValidators from './TopValidatorsContainer.js';
import Chart from './ChartContainer.js';
import { Helmet } from "react-helmet";

export default class Home extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return <div id="home">
            <Helmet>
                <title>Tradehub Explorer brought to you by NEO Economy ❤️ Switcheo Validator</title>
                <meta name="description" content="Finance without limits, for lives without limits." />
            </Helmet>
            <ChainInfo/>
            <Consensus />
            <ChainStatus />
            <Row>
                <Col md={6}>
                    <TopValidators />
                </Col>
                <Col md={6}>
                    <Chart />
                </Col>
            </Row>
        </div>
    }

}