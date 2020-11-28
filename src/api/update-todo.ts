import { headers, baseUrl } from "./headers";

export const updateTodo = async (id, newBody): Promise<any> => {
  const newbodyString = JSON.stringify(newBody);

  const requestOptions: RequestInit = {
    method: "PUT",
    headers,
    body: newbodyString,
    redirect: "follow",
  };

  try {
    const response = await fetch(`${baseUrl}/task/${id}`, requestOptions);
    const result = await response.text();

    console.info(result);
  } catch (error) {
    console.error("error", error);
  }
};
