import React from 'react';
import Fengxianbiao from '../components/fengxianbiao.jsx';
import Loading from '../components/loading.jsx';
import { Link } from 'react-router';
import request from 'superagent';

class Resutl extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      fnum : props.params.fnum,
      loading: true,
    };
  }

  render() {
    return (
      <div className="test">
      联系管理员增加测试内容
      </div>
    );
  }
}

export default Resutl;