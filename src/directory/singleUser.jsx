import React from "react";
import "../directory/person.css";

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      member: {
        ...this.props.data.doc,
        avatar: `${process.env.COUCH_SERVER_IP}/members/${this.props.data.doc._id}/${
          this.props.data.doc.currentImage}`
      }
    };
  }
  render() {
    return (
      <div className="member-card">
        <div className="card">
          <img src={this.state.member.avatar} />
          <h3>{this.state.member.name}</h3>
        </div>
      </div>
    );
  }
}
export default Person;
