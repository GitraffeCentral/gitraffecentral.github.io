import React from 'react';
import './MainContent.css';
import {Button, Typography, Row, Col} from 'antd';
const {Title, Paragraph} = Typography;

class MainContent extends React.Component{
    render() {
        return(
            <div id='MainContent'>
                <Row justify='start' gutter={0}>
                    <Title  id='title'>Gitraffe</Title>
                </Row>
                <Row justify='start' gutter={0}>
                    <Paragraph id='motto'>Leverage the power of Git through a minimal <br/>and intuitive interface, on any computer, for free.</Paragraph>
                </Row>
                <Row justify='start' gutter={10}>
                    <Button type='primary' className='download'>Windows</Button>
                    <Button type='primary' className='download'>Mac</Button>
                    <Button type='primary' className='download'>Linux</Button>
                </Row>
            </div>
            
        )
    }
}

export default MainContent;