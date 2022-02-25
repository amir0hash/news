import { useQuery } from "@apollo/client";
import { Button } from "antd";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { GET_AUTHOR } from "../graphql/authors/authors.query";

function Author() {
  const { push } = useHistory();
  const { authorId } = useParams();
  const { data, loading } = useQuery(GET_AUTHOR, {
    variables: { id: authorId },
  });
  return (
    <>
      <div style={{ marginRight: "400px" }}>
        {data && (
          <div className="ml-1 float-right">
            <img
              style={{ height: "700px" }}
              src="https://joeschmoe.io//api/v1/male/random"
              alt=""
            />
            <span className="display-1 m-lg-3">{data.author.firstname}</span>
            <span className="display-1 ml-4">{data.author.lastname}</span>
            <Button
              type="primary"
              size={"large"}
              onClick={() => {
                push(`/news/author/${data.author._id}`);
              }}
            >
              اخبار نوشته شده
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default Author;
