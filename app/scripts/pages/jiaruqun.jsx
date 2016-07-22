import React from 'react';

const question = ['您所在的城市','您的出生日期是在','您是？'];

class Page extends React.Component {
  
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
    var wentilist = 

    return (
      <div>
        <div className="title">有前图社群申请表</div>
      </div>
    );
  }
}

export default Page;