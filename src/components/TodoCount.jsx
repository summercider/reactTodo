export default function TodoCount({ todos }) {
  // console.log(todos.filter((todo) => todo.done === true));
  const done = todos.filter((todo) => todo.done === true).length;

  return (
    <div className="mt-[10px] text-[14px] text-gray-600">
      완료 : {done} / 할일 : {todos.length}
    </div>
  );
}
