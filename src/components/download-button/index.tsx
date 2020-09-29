import React, { useState } from 'react';
import './index.css';
import { Row } from 'antd';
import Icon from '@ant-design/icons';

const DownloadButton = (props: any) => {

  const [hovered, setHovered] = useState(false)
  return (
    <Row  
      className = 'download-button' 
      align='middle' 
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
      onClick={props.onClick}
    >
      <Icon component={(hovered) ? props.hoveredIcon : props.notHoveredIcon} style={{marginRight:'10px'}}/> 
      {props.text}
    </Row>
  );
}

export default DownloadButton;