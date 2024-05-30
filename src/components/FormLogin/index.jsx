import React from "react";
import { Form, Input, Button, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import  "./FormLogin.css";

const FormLogin = () => {

    const user = {
        username: 'admin',
        password: 'admin',
    };

    const onFinish = (values) => {
        console.log('Success: ', values)
    }

    const onFinishFiled = (errorInfo) => {
        console.log('Failed: ', errorInfo)

    }
    return (
        <>
        <Card 
            title="Bienvenido!"
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
                        message: 'Por ingresa un usuario'
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
                        message: 'Por ingresa una contraseña'
                    }
                ]}
            >
                <Input.Password prefix={<LockOutlined/>} placeholder='Password'/>

            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Iniciar Sesion
              </Button>
            </Form.Item>
            ¿Aun no tienes una cuenta? <a href="">Registrate</a> 

        </Form>
        </Card>
        </>
    );
}

export default FormLogin;