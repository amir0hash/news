import { Divider, Space, Table, Tooltip } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useQuery } from "@apollo/client";
import React from "react";
import { GET_AUTHORS } from "../../graphql/authors/authors.query";
import Admin from "../Admin";
import { useHistory } from "react-router-dom";

function Authors() {
  const { push } = useHistory;
  const { data, loading } = useQuery(GET_AUTHORS, {
    onCompleted: () => console.log(data),
  });
  const columns = [
    {
      title: "نام",
      dataIndex: "firstname",
    },
    {
      title: "نام خانوادگی",
      dataIndex: "lastname",
    },
    {
      key: "action",
      render: (text, record) => (
        <Space size="middle" split={<Divider type="vertical" />}>
          <Tooltip title="ویراش جدید" color="purple">
            <EditOutlined
              onClick={() => console.log(record._id)}
              // onClick={() => push(`/editContact/${record._id}`)}
              style={{ fontSize: 18, color: "#000000", cursor: "pointer" }}
            />
          </Tooltip>
          <Tooltip title="حذف" color="red">
            <DeleteOutlined
              // onClick={() => handleDelete(record)}
              style={{ fontSize: 18, color: "#f5222d", cursor: "pointer" }}
            />
          </Tooltip>
        </Space>
      ),
      width: "10%",
    },
  ];
  return (
    <Admin>
      <Table
        loading={loading}
        size={"small"}
        rowKey={"_id"}
        columns={columns}
        dataSource={data && data.allAuthor}
      />
    </Admin>
  );
}

export default Authors;
