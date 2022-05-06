import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Post from './Post';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const config ={
  width: "400px",
  height: "500px",
  floating: true, 
};

class SimpleForm extends Component {
  render() {
    return (
    	  <ThemeProvider theme={theme}>
      <ChatBot 
       steps={[
         {
          id:'intro', 
          message:'Hello user, Do you require my assistance?', 
          trigger:'user-permission',
         },

         {
         	id:'user-permission',
         	options:[
         	{value:'y', label:'Yes', trigger:'yes-response'},
         	{value:'n', label:'No', trigger:'no-response'},
         	]         	
         },

         {
         	id:'no-response',
         	message:'sorry to hear that :(',
         	end:true,	
         },

         {
         	id:'yes-response',
         	message:'Great!',
         	trigger:'q-firstname',
         },

         {
         	id:'q-firstname',
         	message:'What is your first name?',
         	trigger:'firstname',
         },


         {
         	id:'firstname',
         	user:true,
         	validator: (value) => {
         		if(/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value))
         		{
         			return true;
         		}
         		else
         		{
         			return 'Please input alphabet characters only';
         		}
         	},
         	trigger:'q-email',
         },

         {
         	id:'q-email',
         	message:'Okay and what is your email?',       	
         	trigger:'email',
         },

         {
         	id:'email',
         	user:true,
         	validator: (value) => {
             if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
               {
                 return true;
               }
             else
               {
                 return'Please enter a valid email.';
               }
          },
         	trigger:'q-feedback',
         },

         {
         	id:'q-feedback',
         	message:'So whats on your mind?',
         	trigger:'feedback',
         },

         {
         	id:'feedback',
         	user:true,
         	trigger:'q-submit',
         },

         {
            id:'q-submit', 
            message:'Do you wish to submit?', 
            trigger:'submit'
         },

         {
         	id:'submit',
         	options:[
         	{value:'y', label:'Yes', trigger:'end-message'},
         	{value:'n', label:'No', trigger:'no-submit'},
         	]    
         },

         {
                  id: 'no-submit',
                  message:'Your information was not submitted.', 
                  end: true,
         },

         {
                  id: 'end-message',
                  component: <Post />,
                  asMessage: true,
                  end: true,
         },

         ]}
         {...config}
      />
      </ThemeProvider>
    );
  }
       
}

export default SimpleForm;