import { LockFilled, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Form, Input, Layout, Space } from "antd";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Layout
      style={{
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Space orientation="vertical" align="center" size="large">
        <Layout.Content
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="/logo.svg" alt="pizzashop" />
        </Layout.Content>

        <Card
          variant="borderless"
          style={{
            width: 300,
          }}
          title={
            <Space
              style={{
                width: "100%",
                fontSize: 16,
                justifyContent: "center",
              }}
            >
              <LockFilled /> Sign in
            </Space>
          }
        >
          <Form>
            <Form.Item name="username">
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>

            <Form.Item name="password">
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item name="remember">
              <Checkbox>Remember me</Checkbox>
              <Link to="/auth/forgot-password">Forgot password</Link>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "100%",
                }}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Space>
    </Layout>
  );
};

export default LoginPage;
