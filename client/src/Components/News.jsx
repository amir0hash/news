import { useQuery } from "@apollo/client";
import { Spin } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { GET_NEWS } from "../graphql/news/news.query";
import Moment from "react-moment";

function News() {
  const { newsId } = useParams();
  const [newsTime, setNewsTime] = useState();
  const { data, loading } = useQuery(GET_NEWS, {
    variables: { id: newsId },
    onCompleted: () => {
      const time = data.news.newsTime;
      ////////////// STRING  NOT WORKING for Date()
      var dateTime = new Date(parseInt(time));
      setNewsTime(dateTime.toISOString());
    },
  });
  const SpanStyle = {
    display: "block",
    fontSize: "55px",
    float: "right",
  };
  return (
    <>
      <Spin spinning={loading}>
        {data && (
          <div
            style={{
              minHeight: "80vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Moment
              style={{ marginLeft: "1300px", fontSize: "30px" }}
              interval={30000}
              format="YYYY/MM/DD"
            >
              {newsTime}
            </Moment>
            <div style={{ display: "block" }}>
              <span style={SpanStyle}>{data.news.title}</span>
            </div>
            <div>
              <span
                style={{
                  border: "5px solid #009966",
                  width: "1000px",
                  fontSize: "20px",
                  float: "right",
                  direction: "rtl",
                }}
              >
                {data.news.newsText}
              </span>
            </div>
          </div>
        )}
      </Spin>
    </>
  );
}
export default News;
