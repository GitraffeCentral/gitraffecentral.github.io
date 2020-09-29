import React, { useState } from 'react';
import './index.css';
import Logo from '../../resources/logo.png'
import { Layout, Menu, Typography, Row, Col, Avatar, Button, Space, notification } from 'antd';
import MacButton from '../../resources/mac-download.svg';
import WindowsButton from '../../resources/windows-download.svg';
import Icon from '@ant-design/icons';
import { SiUbuntu, SiWindows, SiApple } from 'react-icons/si';
import { AiOutlineDownload } from 'react-icons/ai';
import DownloadButton from '../download-button'
const { Header, Content } = Layout;
const { Text, Paragraph } = Typography;

const Banner = () => {

  const [windowsHover, setWindowsHover] = useState(false)
  const NavBar = () => (
    <Row align='middle'>
      <Col span={4}>
        <Row align='middle'>
          <Avatar className='banner_logo' shape='square' size={32} src={Logo} />
          <Text className='banner_app-name'> Gitraffe </Text>
        </Row>
      </Col>
      <Col span={16}>
        <Row justify='center'>
          <Menu className='banner_menu' mode="horizontal">
          </Menu>
        </Row>
      </Col>
      <Col span={4}>
        <Row justify='center'>
          <Text className='banner_launch-title'>
            Launching
            <Text className='banner_launch-date' strong>
              Q1 2021
            </Text>
          </Text>
        </Row>
      </Col>
    </Row>
  )

  const notAvailableNotification = () => {
    notification['info']({
      message: 'Coming Spring 2021'
    });
  };

  return (
    <Layout className='banner_first_layout'>
      <Content className='banner_gradient_skew'>
        <Header className='banner_header'>
          <NavBar />
        </Header>
        <Content className='banner_content'>
          <Row>
            <Col span={4} />
            <Col span={8}>
              <Typography.Title>Git Simplified</Typography.Title>
              <p className='banner_subtext'>
                Leverage the power of Git through a minimal and intuitive interface.
              </p>
              <Space>
                <DownloadButton
                  hoveredIcon={AiOutlineDownload}
                  notHoveredIcon={SiWindows}
                  onClick={notAvailableNotification}
                  text='Windows' />
                <DownloadButton
                  hoveredIcon={AiOutlineDownload}
                  notHoveredIcon={SiApple}
                  onClick={notAvailableNotification}
                  text='Mac' />
                <DownloadButton
                  hoveredIcon={AiOutlineDownload}
                  notHoveredIcon={SiUbuntu}
                  onClick={notAvailableNotification}
                  text='Debian' />
              </Space>
            </Col>
            <Col span={16} />
          </Row>
        </Content>
      </Content>
    </Layout>
  );
}

export default Banner;