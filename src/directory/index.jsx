import React from "react";
import Person from "../directory/singleUser.jsx";

const axios = require("axios");

class directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memberList: []
    };
  }
  async componentDidMount() {
    var res = await axios({
      method: "Get",
      url: `${process.env.API_SERVER_URL}/members`
    });
    var tempMemberList = [...this.state.memberList];
    tempMemberList = [res.data];
    this.setState({ memberList: tempMemberList });
  }

  render() {
    var tempMemberList = [...this.state.memberList];
    const userdata = [];
    tempMemberList.map((d, key) => {
      d.members.map((d, key) => {
        userdata.push(<Person data={d} key={key} />);
      });
    });
    return (
      <div>
        <div className="row">{userdata}</div>
      </div>
    );
  }
}
export default directory;
