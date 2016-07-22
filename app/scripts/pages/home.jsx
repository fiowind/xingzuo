import React from 'react';
import Header from '../components/header.jsx';
import Cslist from '../components/cslist.jsx';
import Hongbao from '@dr/react-client-mvp-hongbao';
if (typeof window !== 'undefined') {
   require('../../../node_modules/@dr/react-client-mvp-hongbao/dist/style.css');
}

class Home extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      num : props.params.flid?props.params.flid:0,
      time: '10:23',
    };
  }

  componentWillMount(){

  }
  componentWillReceiveProps(){
    this.setState({num : this.props.params.flid});
    console.log(this.state.num);
  }

  render() {

    return (
      <div>
        <Hongbao imgurl="http://forum.dianrong.com/data/attachment/forum/201607/19/171341yuwzb2be8few0ryz.png" />
        <Header id={this.state.num}/>
        <Cslist id={this.state.num} />
      </div>
    );
  }
}

export default Home;