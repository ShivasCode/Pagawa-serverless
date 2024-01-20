"use client"; // This is a client component 👈🏽
import { useState, useEffect } from "react";
import { fetchAuthSession } from "aws-amplify/auth";
import Navbar from "@/components/navbar";
import "bootstrap/dist/css/bootstrap.css";
import { Authenticator } from "@aws-amplify/ui-react";
import { getCurrentUser } from "aws-amplify/auth";

import "@aws-amplify/ui-react/styles.css";

export default function page() {
  const [authenticatedUsername, setAuthenticatedUsername] = useState("");
  const [idToken, setIdToken] = useState("");
  async function currentSession(access, setId) {
    console.log(access);
    try {
      const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};

      access(accessToken);
      setId(idToken);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const session = await fetchAuthSession();
        const authToken = session?.tokens?.accessToken.toString();

        setAuthenticatedUsername(session?.username || "");

        if (authToken) {
          setIdToken(authToken);
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);
  return (
    <div>
      <div>
        <Navbar />
        <p>{idToken}</p>
        <Authenticator loginMechanisms={["email"]}>
          {({ signOut, user }) => (
            <main>
              <h1>Hello, {user.username}!</h1>
              <button onClick={signOut}>Sign out</button>
            </main>
          )}
        </Authenticator>
      </div>
    </div>
  );
}
