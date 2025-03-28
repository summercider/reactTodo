import Checkbox from '@/components/Checkbox';

// List에서 todo맵돌린 배열 줌 todos는 왜받음? 맵돌려서 배열 갱신하려면 setTodos 사용하는건 ok
//근데 왜 todos를 받어 todo배열 맵돌려서 t배열 만드는데?

export default function TodoItem({ todo, todos, setTodos }) {
  console.log(todo);
  // 배열업데이트
  function handleDone() {
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          return {
            ...t,
            done: !t.done,
          };
        } else {
          return t;
        }
      })
    );
  }

  // 배열요소 삭제
  function handleDelete() {
    setTodos(
      todos.filter((filteredTodo) => {
        return filteredTodo.id !== todo.id;
      })
    );
  }

  console.log(todos, 'todos Item todos');
  console.log(todo, 'todos Item todo');

  return (
    <li className={`flex items-center gap-x-[15px]`}>
      {todo.id}
      <Checkbox
        label={todo.text}
        onChange={handleDone}
        className={` grow ${todo.done ? 'line-through' : ''}`}
      />
      <button
        type="button"
        className="h-[32px] border rounded-[4px] 
        px-[10px] text-[#b83030] border-[#b83030]"
        onClick={handleDelete}
      >
        remove
      </button>
    </li>
  );
}
