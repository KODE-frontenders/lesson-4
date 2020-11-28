import { headers, baseUrl } from "./headers";

export const fetchTodos = async (): Promise<any> => {
  const requestOptions: RequestInit = {
    method: "GET",
    headers,
    redirect: "follow",
  };

  const url = `${baseUrl}/task`;

  try {
    const response = await fetch(url, requestOptions);
    const result = await response.text();
    const { data } = await JSON.parse(result);

    return [...data];
  } catch (error) {
    console.error("error", error);
  }
};
