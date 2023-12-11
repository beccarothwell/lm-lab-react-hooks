import { useEffect, useState } from "react";

interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// make an api call using useEffect
export const APICall = () => {
  const [toDo, setToDo] = useState<ToDo>();

  const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

  useEffect(() => {
    const fetchData = async (apiEndPoint: string) => {
      const response = await fetch(apiEndPoint);
      try {
        const json = await response.json();
        setToDo(json as ToDo);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(jsonTypicode);
  }, []);

  return (
    <>
      <h2>useEffect</h2>
      <p>UserID: {toDo?.userId}</p>
      <p>ID: {toDo?.id}</p>
      <p>Title: {toDo?.title}</p>
      <p>Completed: {toDo?.completed.toString()}</p>
    </>
  );
};
