import { Button, Form, Input, Typography } from 'antd';

const { Title } = Typography;

function Login() {
  return (
    <div className="container mx-auto min-h-full flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
      <Form className="w-96 p-12 border border-[#ccc] border-solid" layout="vertical">
        <Title className="flex items-center justify-center">Sign In</Title>
        <Form.Item label="UserName" name="Username" rules={[{ required: true }]}>
          <Input autoFocus />
        </Form.Item>
        <Form.Item label="password" name="Password" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <div className="flex justify-between">
            <Button type="primary" htmlType="submit">
              Sign In
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
