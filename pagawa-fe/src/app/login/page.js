"use client"; // This is a client component 👈🏽
import { useState, useEffect } from "react";
import { fetchAuthSession } from "aws-amplify/auth";
import Navbar from "@/components/navbar";
import "bootstrap/dist/css/bootstrap.css";
import { Authenticator } from "@aws-amplify/ui-react";
import { signUp } from "aws-amplify/auth";
import "@aws-amplify/ui-react/styles.css";

export default function page() {
  const services = {
    async handleSignUp(formData) {
      console.log(formData);

      let { username, password, options } = formData;
      username = username.toLowerCase();
      const email = options.userAttributes.email;
      const freelancer_boolean = "0";
      return signUp({
        username,
        password,
        options: {
          userAttributes: {
            email,
            "custom:freelancer_boolean": freelancer_boolean,
          },
          autoSignIn: true, // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
        },
      });
    },
  };
  // const [authenticatedUsername, setAuthenticatedUsername] = useState("");
  // const [idToken, setIdToken] = useState("");
  // async function currentSession(access, setId) {
  //   console.log(access);
  //   try {
  //     const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};

  //     access(accessToken);
  //     setId(idToken);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const session = await fetchAuthSession();
  //       const authToken = session?.tokens?.accessToken.toString();

  //       setAuthenticatedUsername(session?.username || "");

  //       if (authToken) {
  //         setIdToken(authToken);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }

  //   fetchData();
  // }, []);
  return (
    <div>
      <div>
        <Navbar />
        <Authenticator
          services={services}
          loginMechanisms={["email"]}
          initialState="signUp"
        >
          {({ signOut }) => <button onClick={signOut}>Sign out</button>}
        </Authenticator>
      </div>
    </div>
  );
}
