import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class StartCbs extends React.Component {
  state = {
    login : 'show',
    register: 'hide'
    }
    showLogin = () =>{ 
      this.setState({login : 'show', register : 'hide'});
           
   }
   showRegister = () =>{ 
    this.setState({login : 'hide', register : 'show'});
    
    }
  render() {
    return (
 
      <div className="login-page">
        <div className="form">
          <h4>CBS Alumni Network</h4>
          <form className={this.state.register+' register-form'} >
            <input type="text" placeholder="Full Name"/>
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Password"/>
            <input type="text" placeholder="Phone" required />
            <select>
                    <option value="">select your boarding house</option>
                </select>
                <select>
                    <option value="">select year</option>
                </select>
            <button>create</button>
            <p className="message">Already registered? <a href="#" onClick={this.showLogin}>Sign In</a></p>
          </form>
          <form  className={this.state.login+' login-form'}>
            <input type="text" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button>login</button>
            <p className="message">Not registered? <a href="#" onClick={this.showRegister}>Create an account</a></p>
          </form>
        </div>
      </div>
        );
  }
}





ReactDOM.render(<StartCbs/>,document.querySelector('#root'));