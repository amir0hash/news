import { Divider, message, Space, Table, Tooltip } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  FullscreenOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { GET_AUTHORS } from "../../graphql/authors/authors.query";
import Admin from "../Admin";
import { useHistory } from "react-router-dom";
import { DELETE_AUTHOR } from "../../graphql/authors/authors.mutation";

function AdminAuthors() {
  const { push } = useHistory();
  let adminOption = "Admin Authors";

  const [deleteAuthor] = useMutation(DELETE_AUTHOR, {
    onError: () => message.error("خطا در انجام حذف"),
  });

  const handleDelete = () => {
    deleteAuthor({
      variables: {
        id: record._id,
      },
      update: (cache) => {
        message.success("عملیات حذف با موفقیت انجام شد");
      },
    });
  };

  const { data, loading } = useQuery(GET_AUTHORS, {
    onCompleted: () => console.log(data),
    fetchPolicy: "no-cache",
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
          <Tooltip title="نمایش نویسنده" color="purple">
            <FullscreenOutlined
              onClick={() => push(`/author/${record._id}`)}
              style={{ fontSize: 18, color: "#000000", cursor: "pointer" }}
            />
          </Tooltip>
          <Tooltip title="افزودن خبر" color="green">
            <PlusSquareOutlined
              onClick={() => push(`/admin/addNews/${record._id}`)}
              style={{ fontSize: 18, color: "green", cursor: "pointer" }}
            />
          </Tooltip>
          <Tooltip title="حذف" color="red">
            <DeleteOutlined
              onClick={() => handleDelete(record)}
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
      <>
        <Table
          size="middle"
          loading={loading}
          size={"small"}
          rowKey={"_id"}
          columns={columns}
          dataSource={data && data.allAuthor}
        />
      </>
    </Admin>
  );
}

export default AdminAuthors;
