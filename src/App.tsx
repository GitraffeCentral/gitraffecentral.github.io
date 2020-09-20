import React from 'react';
import './App.css';
import Icon from '@ant-design/icons';
import Logo from './logo.png';
import { Layout, Menu, Typography, Row, Col, Avatar } from 'antd';
const { Header, Content, Footer } = Layout;
const { Text } = Typography;

function App() {

  const NavBar = () => {
    return (
      <Row align='middle'>
        <Col span={4}>
          <Row align='middle'>
          <Avatar size={40} src={Logo} style={{border: '1px solid'}}/>
          </Row>
        </Col>
        <Col span={16}>
          <Row justify='center'>
            <Menu style={{background:'transparent', color:'black', borderBottom:'0'}} mode="horizontal">
            </Menu>
          </Row>
        </Col>
        <Col span={4}>
          <Row justify='center'>
            <Text style={{color: 'white'}}>Launching <Text strong style={{color: 'white'}}>Q1 2021</Text></Text>
          </Row>
        </Col>
      </Row>
    )}

  return (
    <Layout style={{minHeight: '100vh'}}>
      <Layout className='homepage_first_layout'>
        <Content className='homepage_gradient_skew'>
          <Header className='homepage_header'>
            <NavBar />
          </Header>
          <Content style={{marginTop: '15vh'}}>
            <Row>
              <Col span={4}/>
              <Col span={8}>
                <Typography.Title>Abcdefg Hijklmnop</Typography.Title>
                <p>
                  Leverage the power of Git through a minimal and intuitive interface.
                </p>
              </Col>
              <Col span={16}/>
            </Row>
          </Content>
        </Content>
      </Layout>
      <Content>
      </Content>
      <Footer className='homepage_footer'>© Gitraffe</Footer>
    </Layout>
  );
}

export default App;
