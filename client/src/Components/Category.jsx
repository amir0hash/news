import { useQuery } from "@apollo/client";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Spin } from "antd";

import { GET_ALL_NEWS } from "../graphql/news.query";

function Category() {
  const { push } = useHistory();
  const { categoryName } = useParams();
  const typeId = {
    varzesh: 1,
    salamat: 2,
    eghtesad: 3,
  };

  const { data, loading } = useQuery(GET_ALL_NEWS, {
    variables: { name: typeId[categoryName] },
    onCompleted: () => console.log(data),
  });

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
                    style={{
                      float: "right",
                      marginRight: "20px",
                      marginTop: "29px",
                    }}
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

export default Category;
