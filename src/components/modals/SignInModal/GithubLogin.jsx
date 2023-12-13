import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, useToast } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../App";


export default function GithubLogin() {
   const navigate = useNavigate()
   const { state, dispatch } = useContext(AuthContext);
   const [isLoading, setLoading] = useState(false)
   const toast = useToast()

   const { client_id, redirect_uri } = state;

   useEffect(() => {
      const url = window.location.href;
      const hasCode = url.includes("?code=");

      if (hasCode) {
         const newUrl = url.split("?code=");
         window.history.pushState({}, null, newUrl[0]);
         setLoading(true)

         const requestData = {
            code: newUrl[1]
         };

         fetch(state.proxy_url, {
            method: "POST",
            body: JSON.stringify(requestData)
         })
            .then(response => response.json())
            .then(data => {
               dispatch({
                  type: "LOGIN",
                  payload: { user: data, isLoggedIn: true }
               });
            })
            .catch(error => {
               setLoading(false)
               toast({
                  title: 'Login Failed!',
                  status: 'error',
                  description: { error }
               })
            });
      }
   }, [state, dispatch]);

   if (state.isLoggedIn) {
      navigate('/');
   }

   const handleRedirectUrl = () => {
      window.location.href = `https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`
   }

   return (
      <Button
         leftIcon={<FaGithub />}
         isLoading={isLoading}
         onClick={handleRedirectUrl}
      >
         Login with GitHub
      </Button>
   );
}