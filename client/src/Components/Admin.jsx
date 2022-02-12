import { useMutation } from "@apollo/client";
import { Button, Form, Input, message, Select } from "antd";
import React from "react";
import { ADD_NEWS } from "../graphql/news.mutation";

const { Option } = Select;
const { TextArea } = Input;

function Admin() {
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
    });
    message.success("کاربر با موفقیت درج گردید");
  };
  return (
    <Form style={{ width: "800px" }} onFinish={onFinish}>
      <Form.Item
        style={{ wight: "100px" }}
        name="type"
        label="نوع خبر"
        rules={[{ required: true }]}
      >
        <Select
          style={{ width: 120, float: "right", marginRight: "10px" }}
          defaultValue={1}
          placeholder="لطفا نوع خبر را انتخاب کنید"
        >
          <Option value={1}>ورزش</Option>
          <Option value={2}>سلامت</Option>
          <Option value={3}>اقتصاد</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="عنوان خبر"
        name="title"
        rules={[{ required: true, max: "120" }]}
      >
        <TextArea></TextArea>
      </Form.Item>
      <Form.Item
        label="متن خبر"
        name="newsText"
        rules={[{ required: true, min: "50", max: "3000" }]}
      >
        <TextArea rows={20}></TextArea>
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
  );
}

export default Admin;
