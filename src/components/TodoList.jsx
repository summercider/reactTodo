import TodoItem from '@/components/TodoItem';

//App에서 보낸 state todos받음
export default function TodoList({ todos, setTodos }) {
  console.log(todos, 'TodoList todos');
  return (
    <ul className="space-y-[10pxr]">
      {/* 받은 todos로 맵돌려서 todo 배열 만듬 , Item에 todo 배열 전달함 todos는 왜줌?? */}
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </ul>
  );
}
