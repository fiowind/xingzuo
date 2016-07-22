import React from 'react';
import Header from '../components/header.jsx';
import Cslist from '../components/cslist.jsx';


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
        <Header id={this.state.num}/>
        <Cslist id={this.state.num} />
      </div>
    );
  }
}

export default Home;