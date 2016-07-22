import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  console.log(props.id);
  return (
    <header className="header">
      <div className="header1">
       <span>&lt;</span>
        <Link to="#">magichouse</Link>
      </div>
      <div className="header2">
        <Link className={"header2_nav"+(props.id==0?' active':'')} to={"home/0"} >推荐</Link>
        <Link className={"header2_nav"+(props.id==1?' active':'')} to={"home/1"}>性格</Link>
        <Link className={"header2_nav"+(props.id==2?' active':'')} to={"home/2"}>情感</Link>
        <Link className={"header2_nav"+(props.id==3?' active':'')} to={"home/3"}>星座</Link>
        <Link className={"header2_nav"+(props.id==4?' active':'')} to={"home/4"}>犯罪</Link>
        <Link className={"header2_nav"+(props.id==5?' active':'')} to={"home/5"}>专业</Link>
        <Link className={"header2_nav"+(props.id==6?' active':'')} to={"home/6"}>职业</Link>
      </div>
    </header>
  )
};

export default Header;