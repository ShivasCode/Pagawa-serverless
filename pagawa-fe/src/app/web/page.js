import { get, post } from "aws-amplify/api/server";
import { runWithAmplifyServerContext } from "../runWithAmplifyServerContextRunner/amplifyServerUtils";
import { cookies } from "next/headers";

export default async function getAndCreateTodo() {
  try {
    // Perform GET request
    const getOperation = await runWithAmplifyServerContext({
      nextServerContext: null,
      operation: async (contextSpec) =>
        get(contextSpec, {
          apiName: "apipagawa",
          path: "/services",
        }),
    });

    const getResponse = await getOperation.response;
    console.log("GET call succeeded: ", getResponse);

    // Perform POST request
    const todoData = {
      // Replace with the actual data you want to send in the POST request
      title: "New Todo",
      description: "This is a new todo item.",
    };

    const postOperation = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: async (contextSpec) =>
        post(contextSpec, {
          apiName: "apipagawa",
          path: "/services",
        }),
    });
    const postResponse = await postOperation.response;
    console.log("POST call succeeded: ", postResponse);
  } catch (error) {
    console.error("Error: ", error);
  }
}
