import React from 'react';
import ReactDOM from 'react-dom';
// import App1 from './components/alldetails/apps';
// import ToolbarApp from './components/callbackcomp/cutomhookapp';
// import UseMemoApp from './components/callbackcomp/usememoapp';
import App from './components/workingcomp/app';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Form from './components/form';
//import Studentdetails from './components/table';
//import App from './components/callbackcomp/todo-index';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Form /> */}
    {/* <Studentdetails /> */}
    {/* <App/> */}
    {/* <UseMemoApp />
    <ToolbarApp/> */}
    {/* <App1/> */}
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
