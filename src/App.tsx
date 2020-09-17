import React from 'react';
import './App.css';
import MainContent from './MainContent';
import { Layout, Menu, Typography } from 'antd';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

function App() {
  return (
    <Layout>
      <Content className='homepage_first_content'>
        <Menu className='homepage_first_layout_menu' mode="horizontal">
          <Text style={{position: 'absolute', right: '5vw'}}>Launching <Text strong>Q1 2021</Text></Text>
        </Menu>
        <div className='homepage_skew'/>
      </Content>
      <Footer className='homepage_footer'>© Gitraffe</Footer>
    </Layout>
  );
}

export default App;
