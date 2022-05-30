import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic, Collapse } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrencies, News } from "../components";

const { Title,Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;
  console.log(data);

  const onChange = (key) => {
    console.log(key);
  };
  if (isFetching) return "Loading.....";
  return (
    <Col className="exchange-container">
      <Row>
        <Col xs={6}><Text>Exchanges</Text></Col>
        <Col xs={6}><Text>24h Trade Volume</Text></Col>
        <Col xs={6}><Text>Market</Text></Col>
        <Col xs={6}><Text>Change</Text></Col>
      </Row>

      <Collapse defaultActiveKey={["1"]} onChange={onChange}>
        <Panel showArrow={false} header={<>   <Col xs={6}>{1}. <img src="" alt="" /> {"Binance"}</Col>
        <Col xs={6}>24h Trade volume</Col>
        <Col xs={6}>Market</Col>
        <Col xs={6}>Change</Col></>} key="1">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae itaque accusamus ipsam quasi quos? Corrupti provident in beatae. Quibusdam sequi quae ipsa voluptatem fugit nihil beatae a iusto doloremque ea!</p>
        </Panel>
      </Collapse>
    </Col>
  );
};

export default Exchanges;
