import { useState, useEffect } from "react";
import axios from "axios";

export const GetUsers = () => {
  const [ users, setUsers] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      
      const result = await axios("http://localhost:3000/api/users");

      setUsers(result.data);
    }

    fetchData();
  }, []);

  return { users };
}

export const GetSampleText = () => {
  const [ text, setText] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      
      const result = await axios("http://localhost:3000/api/sample-text");

      setText(result.data);
    }

    fetchData();
  }, []);

  return text;
}