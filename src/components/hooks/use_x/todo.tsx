import useFetch from "./use_fetch";

/** This is the response that TypiCode gives for the /todos/ endpoint */
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Todo = () => {
  const toDo = useFetch<Todo>("/todos/1");

  return (
    <>
      <h2>Custom Hook</h2>

      {toDo.isFetching ? <p>Fetching...</p> : <p>{toDo?.data?.title}</p>}
    </>
  );
};

export default Todo;
