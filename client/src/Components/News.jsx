import { useQuery } from "@apollo/client";
import { Spin } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_NEWS } from "../graphql/news.query";

function News() {
  const { newsId } = useParams();

  const { error, data, loading } = useQuery(GET_NEWS, {
    variables: { id: newsId },
  });
  const SpanStyle = {
    fontSize: "55px",
    float: "right",
  };
  return (
    <>
      <Spin spinning={loading}>
        <span style={SpanStyle}>{data.news.title}</span>
        <span>{data.news.newsText}</span>
      </Spin>
    </>
  );
}
export default News;
