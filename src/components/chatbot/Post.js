import React, { Component } from 'react';
import axios from 'axios';


class Post extends Component {
  constructor(props) {
   super(props);
   const { steps } = this.props;
   const { submit, firstname, email, feedback } = steps;

   this.state = { submit, firstname, email, feedback };
  }
  

  componentDidMount() {
     const userObject = {
      submit:this.state.submit.value,
      first_name:this.state.firstname.value,     
      email:this.state.email.value,
      feedback:this.state.feedback.value,
    };
    axios.post(`/api`, userObject)
    .then(res => {
      console.log(res.status)
    }).catch(function(error) {
      console.log(error);
    });
  }

  render() {
  	return (
      <div>Thank you! Your data was submitted successfully!</div>
      );
 }    
   
};

export default Post;