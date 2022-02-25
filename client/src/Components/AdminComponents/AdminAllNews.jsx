import { DeleteOutlined, FullscreenOutlined } from "@ant-design/icons";
import { useQuery } from "@apollo/client";
import { Divider, Space, Table, Tooltip } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { GET_ALL_NEWS } from "../../graphql/news/news.query";
import Admin from "../Admin";

function AdminAllNews() {
  const { push } = useHistory();
  let adminOption = "Admin All News";

  const { data, loading } = useQuery(GET_ALL_NEWS, {
    onCompleted: () => console.log(data),
    fetchPolicy: "no-cache",
  });

  const columns = [
    {
      title: "عنوان",
      dataIndex: "title",
    },
    {
      key: "action",
      render: (text, record) => (
        <Space size="middle" split={<Divider type="vertical" />}>
          <Tooltip title="نمایش نویسنده" color="purple">
            <FullscreenOutlined
              onClick={() => push(`/news/${record._id}`)}
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
    <Admin adminOption={adminOption}>
      <Table
        style={{ minWidth: "500px", maxWidth: "1200px" }}
        size="large"
        loading={loading}
        size={"small"}
        rowKey={"_id"}
        columns={columns}
        dataSource={data && data.allNews}
      />
    </Admin>
  );
}

export default AdminAllNews;
