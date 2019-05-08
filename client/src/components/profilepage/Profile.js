import React, { Component } from "react";
import DetailProfile from './DetailProfile'
import MainDashB from "./dashboard/MainDashB";
import UpcomingAD from "./dashboard/UpcomingAD";
import BtnGroup from "../featurebutton/BtnGroup";
import {Route,Switch} from 'react-router-dom';
import NotificationDashB from "./dashboard/NotificationDashB";
import SearchDashB from "./dashboard/SearchDashB";
import NoMatch from "./NoMatch";
import Information from "./dashboard/Information";
import ChangePassword from "./dashboard/ChangePassword";
class Profile extends Component {
  render() {
    console.log(this.props)
    const {match} = this.props;
    console.log(match.url);
    return (

      <div className="row">
      <div className="col-12">
      <img src="img/school.jpg"
      alt="none"
      className="img-fluid rounded mb-3 border"
      ></img>
      <hr></hr>
      </div>
      <div className="col-md-3  d-none d-sm-block">
          <DetailProfile/>
          <BtnGroup/>
      </div>
      <div className="col-md-6">
      <Switch> 
      <Route path={``} exact component={MainDashB}/>
      <Route path={`${this.props.match.url}/noti`} exact component={NotificationDashB}/>
      <Route path={`${this.props.match.url}/search/:name`} exact render={({match, history}) => <SearchDashB match={match} />} /> 
      <Route path={`${this.props.match.path}/information`} exact component={Information}/>
      <Route path={`${this.props.match.path}/changepassword`} exact component={ChangePassword}/>  
      <Route path="/" component={NoMatch}/>
      </Switch>   
      
      </div>
      <div className="col-md-3 d-none d-sm-block">
        <UpcomingAD/>
        <UpcomingAD/>
        <UpcomingAD/>
      </div>
      </div>
        
    );
  }
}

export default Profile;
