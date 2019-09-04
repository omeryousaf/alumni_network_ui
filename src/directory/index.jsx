import React from "react";
import Navbar from "../navBar/navBar.jsx";
import Person from "../directory/singleUser.jsx";

const axios = require("axios");

class directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memberList: []
    };
    this.getMembersDate = this.getMembersDate.bind(this);
    this.getMembersDate();
  }
  async getMembersDate() {
    var res = await axios({
      method: "Get",
      url: "http://localhost:3000/members"
    });
    var tempMemberList = [...this.state.memberList];
    tempMemberList = [res.data];
    this.setState({ memberList: tempMemberList });
  }
  render() {
    var tempMemberList = [...this.state.memberList];
    const userdate = [];
    console.log(tempMemberList);
    tempMemberList.map((d, key) => {
      d.members.map((d, key) => {
        userdate.push(<Person data={d} key={key} />);
      });
    });
    return (
      <div>
        <Navbar />
        <div className="row">{userdate}</div>
      </div>
    );
  }
}
export default directory;
