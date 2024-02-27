"use client";
import { useEffect } from "react";
const BootstrapPopper = () => {

  useEffect(() =>{
    if(typeof window !== "undefined"){
      require('../../node_modules/popper.js/dist/umd/popper.min.js');
    } 
  }, []);
  return null;
}

export default BootstrapPopper;