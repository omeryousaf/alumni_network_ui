import React from "react";
import "../directory/person.css";

class Person extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="column">
        <div className="card">
          <img src="http://cbsalumni.org/images/default-profile-3.png" />
          <h3>{this.props.data.doc.name}</h3>
        </div>
      </div>
    );
  }
}
export default Person;
