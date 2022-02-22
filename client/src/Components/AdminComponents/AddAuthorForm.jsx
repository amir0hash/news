import { useMutation } from "@apollo/client";
import { Button, Form, Input, message, Select } from "antd";
import React, { useState } from "react";
import Admin from "../Admin";
import { ADD_NEWS } from "../../graphql/news/news.mutation";
const { Option } = Select;
const { TextArea } = Input;

function AddAuthorForm() {
  //////////////////////////////

  const [type, setType] = useState(1);

  const [addData] = useMutation(ADD_NEWS, {
    onError: () => {
      message.error("خطا در انجام عملیات");
    },
  });
  const onFinish = (value) => {
    return addData({
      variables: {
        myInput: value,
      },
      update: () => {
        message.success("کاربر با موفقیت درج گردید");
      },
    });
  };
  //////////////////////////////////// #
  return (
    <Admin>
      <Form style={{ width: "800px" }} onFinish={onFinish}>
        <span style={{ fontSize: "50px" }}>Author</span>
        <Form.Item
          label="نام نویسنده"
          name="firstname"
          rules={[{ required: true, min: "2", max: "30" }]}
        >
          <TextArea></TextArea>
        </Form.Item>
        <Form.Item
          label="فامیلی"
          name="lastname"
          rules={[{ required: true, min: "2", max: "30" }]}
        >
          <TextArea></TextArea>
        </Form.Item>
        <Form.Item>
          <Button
            style={{ width: 120, height: 40 }}
            htmlType="submit"
            type="primary"
          >
            ثبت خبر
          </Button>
        </Form.Item>
      </Form>
    </Admin>
  );
}

export default AddAuthorForm;
