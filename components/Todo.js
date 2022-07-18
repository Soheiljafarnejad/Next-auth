const Todo = ({ todo, onDelete }) => {
  return (
    <div className="bg-white flex items-center justify-between px-4 py-2 mb-4 shadow border rounded-md">
      <div>
        <p>{todo.title}</p>
        <p>{todo.description}</p>
      </div>

      <div className="flex items-center justify-end gap-3">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 stroke-green-500 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span onClick={onDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 stroke-red-500 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 stroke-blue-500 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Todo;
