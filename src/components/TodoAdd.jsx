import { useRef, useState } from 'react';

export default function TodoAdd({ todos, setTodos }) {
  const [txt, setTxt] = useState('');
  //렌더링이랑 관련없으니까 ref
  const idRef = useRef(0);

  function handleEnter(e) {
    if (e.key === 'Enter') {
      // console.log(e.key);
      handleAdd();
    }
  }

  function handleAdd() {
    //txt랑 txt공백제거한 값이 빈문자열이 아닐떄 실행
    if (txt && txt.trim() !== '') {
      idRef.current += 1;
      // 입력필드 초기화 ( input 넣고나서 비워주기)
      setTxt('');
      setTodos([
        ...todos,
        {
          id: idRef.current,
          text: txt,
          done: false,
        },
      ]);
    }
  }

  return (
    <div className="flex my-[10px] gap-x-[10px]">
      <input
        value={txt}
        onChange={(e) => setTxt(e.target.value)}
        type="text"
        className="w-full border-[#ddd]
        rounded-[4px] text-gray-600"
        placeholder="할 일을 입력하세요"
        onKeyUp={handleEnter}
      />

      <button
        onClick={handleAdd}
        type="button "
        className="bg-gray-600
      text-white
        px-[10px]
        rounded-[4px]"
      >
        Add
      </button>
    </div>
  );
}
