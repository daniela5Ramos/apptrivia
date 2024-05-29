import React from "react";
import { Form, Input, Button, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import  "./FormRegister.css";

const FormRegister = () => {

    const onFinish = (values) => {
        console.log('Success: ', values)
    }

    const onFinishFiled = (errorInfo) => {
        console.log('Failed: ', errorInfo)

    }
    return (
        <>
        <Card 
            title="Registrate"
            bordered={false}
            className='responsive-card'
        >

        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
            name="username"
                rules={[
                    {
                        required: true,
                        message: 'Ingresa un usuario'
                    }
                ]}
            >
                <Input prefix={<UserOutlined/>} placeholder='usuario'/>

            </Form.Item>

            <Form.Item
            name="password"
                rules={[
                    {
                        required: true,
                        message: 'Ingresa una contraseña'
                    }
                ]}
            >
                <Input.Password prefix={<LockOutlined/>} placeholder='Password'/>

            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Registrarme
              </Button>
            </Form.Item>
           

        </Form>
        </Card>
        </>
    );
}

export default FormRegister;