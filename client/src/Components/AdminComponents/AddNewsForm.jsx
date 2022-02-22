import { useMutation } from "@apollo/client";
import { Button, Form, Input, message, Select } from "antd";
import React, { useState } from "react";
import { ADD_NEWS } from "../../graphql/news/news.mutation";
import Admin from "../Admin";

const { Option } = Select;
const { TextArea } = Input;

function AddNewsForm() {
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
  const handleChange = (value) => {
    setType(value);
    console.log(value);
  };
  return (
    <>
      <Admin>
        <Form style={{ width: "800px" }} onFinish={onFinish}>
          <span style={{ fontSize: "50px" }}>News</span>
          <Form.Item
            style={{ wight: "100px" }}
            name="type"
            label="نوع خبر"
            initialValue={1}
            rules={[{ required: true }]}
          >
            <Select
              style={{ width: 120, float: "right", marginRight: "10px" }}
              onChange={handleChange}
              value={type}
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
      </Admin>
    </>
  );
}

export default AddNewsForm;
