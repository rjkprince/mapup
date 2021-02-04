import React, { Component } from "react";
import { Form, Select, Button, Card } from "antd";
export default class index extends Component {
  submitRegion = (values) => {
    this.props.setRegion(values.Region);
  };
  render() {
    return (
      <Card>
        <Form onFinish={this.submitRegion}>
          <Form.Item
            label="Region"
            name="Region"
            rules={[{ required: true, message: "Please select a region" }]}
          >
            <Select defaultValue="Select" style={{ width: 120 }}>
              <Select.Option value="United States">United States</Select.Option>
              <Select.Option value="India">India</Select.Option>
              <Select.Option value="United Kingdom">
                United Kingdom
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}
