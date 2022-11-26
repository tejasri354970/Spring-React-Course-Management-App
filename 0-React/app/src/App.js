import React from 'react';
import './App.css';
import { Button } from "reactstrap"
import {ToastContainer, toast} from "react-toastify"
function App() {
  const btnHandle= ()=>{
    toast.success("Done")
  }
  return (
    <div>      
      <ToastContainer />

      <h1>Simple Application</h1>
      <Button color='success' outline size='lg' onClick={btnHandle}> Click me</Button>

    </div>
  );
}

export default App;
