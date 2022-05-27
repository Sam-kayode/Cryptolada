import React from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import momemnt from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import moment from "moment";

const { Text, Title } = Typography;
const { option } = Select;

const demoImage = "https://i.ibb.co/Z11pcGG/cryptocurrency.png";
const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "CryptoCurrency",
    count: simplified ? 6 : 12,
  });
  console.log(cryptoNews);

  if (!cryptoNews?.value) return "Loading.......";

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url}>
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                  alt=""
                />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)}........`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                    alt="news"
                  />
                  <Text className="provider-name">
                    {news.provider[0]?.name}
                  </Text>
                </div>
                <Text>
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
