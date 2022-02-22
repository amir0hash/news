import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_NEWS } from "../graphql/news/news.query";
import { Button, Spin } from "antd";
import { useHistory } from "react-router";

function Home() {
  const { push } = useHistory();

  const { data, loading } = useQuery(GET_ALL_NEWS);

  const ButtonStyle = {
    float: "right",
    marginRight: "20px",
    marginTop: "29px",
  };
  return (
    <>
      <Spin spinning={loading}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            columnGap: "10px",
            rowGap: "1em",
          }}
        >
          {data &&
            data.allNews.map((news) => (
              <div
                style={{
                  padding: "3px",
                  backgroundColor: "gray",
                  height: "250px",
                  width: "450px",
                }}
              >
                <span style={{ fontSize: "35px" }}>{news.title}</span>
                <div>
                  <Button
                    type="primary"
                    style={ButtonStyle}
                    onClick={() => push(`/news/${news._id}`)}
                  >
                    نمایش
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </Spin>
    </>
  );
}

export default Home;
