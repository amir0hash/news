import { useQuery } from "@apollo/client";
import { Spin } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_NEWS } from "../graphql/news.query";

function News() {
  console.log("first");
  const { newsId } = useParams();

  const { data, loading } = useQuery(GET_NEWS, {
    variables: { id: newsId },
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
