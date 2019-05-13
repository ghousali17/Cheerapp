import React from 'react';

import { Card } from 'antd';


class Home extends React.Component{

	render(){
		return(
  <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Card title="This is home" bordered={false} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>);
	}
}


export default Home;