import React from 'react';
import './index.css';
import { Layout } from 'antd';
import Banner from '../banner';
const { Footer } = Layout;

const App = () => {
  return (
    <Layout className='application_layout'>
      <Banner/>
          <div style={{height: '200vh'}}>
          </div>
      {/*<Footer className='application_footer'>© Gitraffe</Footer>*/}
    </Layout>
  );
}

export default App;