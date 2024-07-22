import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';

const { Title } = Typography;

const App = () => {
  const [form] = Form.useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onFinish = (values) => {
    setSubmittedData(values);
  };

  return (
    <div style={{ padding: '50px' }}>
      <Title level={2}>Simple Form with Ant Design</Title>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ maxWidth: '400px', marginBottom: '20px' }}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: 'Please input a description!' }]}
        >
          <Input.TextArea placeholder="Enter a description" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      {submittedData && (
        <Card title="Submitted Data" style={{ maxWidth: '400px' }}>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Description:</strong> {submittedData.description}</p>
        </Card>
      )}
    </div>
  );
};

export default App;