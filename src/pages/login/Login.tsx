import { LockFilled, LockOutlined, UserOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import {
  Alert,
  Button,
  Card,
  Checkbox,
  Flex,
  Form,
  Input,
  Layout,
  Space,
} from "antd";
import { Link } from "react-router-dom";
import { login } from "../../http/api";
import type { Credentials } from "../../types";

const loginUser = async (userData: Credentials) => {
  const { data } = await login(userData);
  return data;
};

const LoginPage = () => {
  const {
    mutate: loginHandler,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
    onSuccess: async () => {
      console.log("login successfull");
    },
  });
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
          <Form
            initialValues={{
              username: "admin@pizzashop.com",
              password: "Admin@12345",
              remember: true,
            }}
            onFinish={(values) => {
              loginHandler({
                email: values.username,
                password: values.password,
              });
              console.log("values", values);
            }}
          >
            {isError && (
              <Alert
                style={{ marginBottom: 24 }}
                type="error"
                title={error.message}
              />
            )}

            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username",
                },
                {
                  type: "email",
                  message: "Email is not valid",
                },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
              />
            </Form.Item>

            <Flex justify="space-between">
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Link id="login-form-forgot" to="/auth/forgot-password">
                Forgot password
              </Link>
            </Flex>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "100%",
                }}
                loading={isPending}
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
