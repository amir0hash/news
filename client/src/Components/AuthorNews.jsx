import { useQuery } from "@apollo/client";
import { Button, Spin } from "antd";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { GET_AUTHOR_NEWS } from "../graphql/authors/authors.query";

function AuthorNews() {
  const { push } = useHistory();
  const { authorId } = useParams();
  const { data, loading } = useQuery(GET_AUTHOR_NEWS, {
    variables: { id: authorId },
    onCompleted: () => console.log(data.author.news),
  });
  const ButtonStyle = {
    float: "right",
    marginRight: "20px",
    marginTop: "29px",
  };
  return (
    <div>
      <Spin spinning={loading}>
        {data && (
          <div style={{ float: "right" }}>
            <img
              style={{ height: "100px" }}
              src="https://joeschmoe.io//api/v1/male/random"
              alt=""
            />
            <span style={{ fontSize: "30px" }}>
              {data.author.firstname +"-"+ data.author.lastname}
            </span>
          </div>
        )}
        <div className="row g-2">
          {data &&
            data.author.news.map((news) => (
              <div
                className="col-sm-4 col-md-5 m-5"
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
    </div>
  );
}

export default AuthorNews;
