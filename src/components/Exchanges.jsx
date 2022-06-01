// import React, { useState, useEffect } from "react";
// import millify from "millify";
// import HTMLReactParser from "html-react-parser";
// import { Typography, Row, Col, Statistic, Collapse } from "antd";
// import { Link } from "react-router-dom";

// import {} from "../services/cryptoApi";

// const { Title, Text } = Typography;
// const { Panel } = Collapse;

// const Exchanges = () => {
//   const { data, isFetching } = useGetCryptosQuery(100);
//   const [position, setPosition] = useState();
//   const { data: details, isLoading } = useGetCryptoDetailsQuery(position);

//   const coins = data?.data?.coins;
//   const description = details?.data?.coin?.description;

//   const onChange = (key) => {
//     console.log(key);
//     setPosition(key);
//   };
//   if (isFetching) return "Loading.....";
//   return (
//     <Col className="exchange-container">
//       <Row>
//         <Col xs={6}>
//           <Text>Exchanges</Text>
//         </Col>
//         <Col xs={6}>
//           <Text>24h Trade Volume</Text>
//         </Col>
//         <Col xs={6}>
//           <Text>Market</Text>
//         </Col>
//         <Col xs={6}>
//           <Text>Change</Text>
//         </Col>
//       </Row>

//       <Collapse defaultActiveKey={"1"} onChange={onChange} accordion>
//         {coins.map((coin, index) => (
//           <Panel
//             key={coin.uuid}
//             showArrow={false}
//             header={
//               <>
//                 {" "}
//                 <Col xs={6}>
//                   {coin.rank}.{" "}
//                   <img src={coin.iconUrl} alt="" className="exchange-icon" />{" "}
//                   {coin.name}
//                 </Col>
//                 <Col xs={6}>$ {millify(coin?.["24hVolume"])}</Col>
//                 <Col xs={6}>Market</Col>
//                 <Col xs={6}>{coin.change}</Col>
//               </>
//             }
//           >
//             <p>{HTMLReactParser(description)}</p>
//           </Panel>
//         ))}
//       </Collapse>
//     </Col>
//   );
// };

// export default Exchanges;
