"use server";
import { get, post } from "aws-amplify/api/server";
import { runWithAmplifyServerContext } from "../runWithAmplifyServerContextRunner/amplifyServerUtils";
import { cookies } from "next/headers";

export async function onSubmit(images, event) {
  // console.log(event);
  // event.preventDefault();
  try {
    const formData = new FormData();

    const rawFormData = {
      title: event.get("title"),
      price: event.get("price"),
      category: event.get("category"),
      english_level: event.get("english_level"),
      delivery: event.get("delivery"),
      skills: event.get("skills"),
      country: event.get("country"),
      service_description: event.get("service_description"),
      images: images,
      routeKey: "POST /services",
    };
    console.log(rawFormData);
    const postOperation = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: async (contextSpec) =>
        post(contextSpec, {
          apiName: "apipagawa",
          path: "/services",
          options: {
            body: rawFormData,
          },
        }),
    });
    const postResponse = await postOperation.response;
    const bodyResponse = await postResponse.body.json();
    console.log(bodyResponse);

    // let text = await new Response(postOperation.response);
    // const textResponse = await postOperation.response;
    // const testPost = await new Response(textResponse.body).json();
    // console.log(testPost);
  } catch (error) {
    console.log(error);
  }
}
