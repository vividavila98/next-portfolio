import React, { useState } from 'react';
import axios from "axios";

export default function useSubscribe() {
    const [email, setEmail] = useState("");

    const handleChange = e => {
        setValue(e.target.value);
    };

    const subscribe = async (e) => {
        e.preventDefault();
    
        // setStatus("Loading ...");
        // setErrorMessage(null);
    
        try {
          const response = await axios.post("/api/subscribe", {email});
          console.log(response);
        //   setStatus("Successfuly subscribed!");
          setEmail("");
        } catch (e) {
        //   setErrorMessage(e.response.data.error);
        //   setStatus(e.response.data.error);
        console.error(e);
        }
      };


    return { email, handleChange, subscribe }
}
