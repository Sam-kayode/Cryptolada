import React from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import momemnt from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const { Text, Title } = Typography;
const { option } = Select;
const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "CryptoCurrency",
    count: simplified ? 10 : 100,
  });
  console.log(cryptoNews);
  return <div>News</div>;
};

export default News;
