import { headers, baseUrl } from "./headers";

export const addTodo = async (description: any): Promise<any> => {
  const body = JSON.stringify({ description });

  const requestOptions: RequestInit = {
    method: "POST",
    headers,
    redirect: "follow",
    body,
  };

  try {
    const response = await fetch(`${baseUrl}/task`, requestOptions);
    const result = await response.text();

    console.info(result);
  } catch (error) {
    console.error("error", error);
  }
};
