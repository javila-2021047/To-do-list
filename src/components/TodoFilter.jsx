const TodoFilter = ({ changeFilter, filter }) => {
  return (
    <section className=" container mx-auto  mt-8">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-md flex justify-center gap-4 transition-all duration-1000">
        <button
          className={`${
            filter === "all"
              ? "text-blue-500 hover:text-gray-500"
              : "text-gray-500 hover:text-blue-500"
          }`}
          onClick={() => changeFilter("all")}
        >
          all
        </button>
        <button
          className={`${
            filter === "active"
              ? "text-blue-500 hover:text-gray-500"
              : "text-gray-500 hover:text-blue-500"
          }`}
          onClick={() => changeFilter("active")}
        >
          active
        </button>
        <button
          className={`${
            filter === "completed"
              ? "text-blue-500 hover:text-gray-500"
              : "text-gray-500 hover:text-blue-500"
          }`}
          onClick={() => changeFilter("completed")}
        >
          completed
        </button>
      </div>
    </section>
  );
};
export default TodoFilter;
