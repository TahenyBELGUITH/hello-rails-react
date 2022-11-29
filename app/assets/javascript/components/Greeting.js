import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreetings, selectGreeting } from "../redux/greetingSlice";

function Greeting() {

 const greeting = useSelector(selectGreeting)
 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(fetchGreetings());
 },[dispatch])

 return (
   <h1> {greeting} </h1>
 );
}

export default Greeting;
