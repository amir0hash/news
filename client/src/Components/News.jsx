import { useQuery } from "@apollo/client";
import { Button, message, Spin } from "antd";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { GET_NEWS } from "../graphql/news/news.query";
import Moment from "react-moment";

function News() {
  const { push } = useHistory();

  const newsType = {
    1: "ورزشی",
    2: "سلامت",
    3: "اقتصادی",
    4: "فناوری",
  };
  const { newsId } = useParams();
  const [newsTime, setNewsTime] = useState();
  const { data, loading } = useQuery(GET_NEWS, {
    variables: { id: newsId },
    onCompleted: () => {
      console.log(data.news);
      const time = data.news.newsTime;
      ////////////// STRING  NOT WORKING for Date()
      var dateTime = new Date(parseInt(time));
      setNewsTime(dateTime.toISOString());
    },
    fetchPolicy: "no-cache",
  });
  const pushAuthor = () => {
    if (data.news.author) {
      push(`/author/${data.news.author._id}`);
    } else {
      message.warning("این خبر نویسنده ندارد");
    }
  };
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
            <span
              className="bg-primary"
              style={{
                minWidth: "130px",
                maxWidth: "200px",
                marginLeft: "1000px",
                fontSize: "40px",
                padding: "0px",
              }}
            >
              {newsType[data.news.type]}
            </span>
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
            <div style={{ width: "1000px" }}>
              <span
                style={{
                  border: "5px solid #009966",
                  width: "1000px",
                  minHeight: "200px",
                  maxHeight: "2000px",
                  fontSize: "20px",
                  float: "right",
                  direction: "rtl",
                }}
              >
                {data.news.newsText}
              </span>
              <Button
                size="large"
                type="primary"
                onClick={() => {
                  pushAuthor();
                }}
              >
                نویسنده
              </Button>
            </div>
          </div>
        )}
      </Spin>
    </>
  );
}
export default News;
