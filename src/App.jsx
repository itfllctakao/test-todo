import React from 'react';
import './App.css';
import { useState } from 'react';
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';

function App() {
  const [id, setId] = useState(1);
  const [todoTitle, setTodoTitle] = useState('');
  const [todoText, setTodoText] = useState('');
  const [todoList, setTodoList] = useState([]);

  // onChangeイベントの処理
  const onChangeTitle = (e) => setTodoTitle(e.target.value);
  const onChangeText = (e) => setTodoText(e.target.value);

  // 追加ボタンが押された時の処理
  const onClickAdd = () => {
    if (todoTitle === '' || todoText === '') {
      // TODOが未入力の場合はalertを出して処理を中断
      alert('TODOを入力してください');
      return;
    };
    const newTodoList = [...todoList];
    newTodoList.push({
      id: id,
      title: todoTitle,
      text: todoText,
    });
    setTodoList(newTodoList);
    setId(id + 1);
    setTodoTitle('');
    setTodoText('');
  }

  // 削除ボタンが押された時の処理
  const onClickDelete = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <>
      {/* TODOの追加 */}
      <TodoAdd
        todoTitle={todoTitle}
        todoText={todoText}
        onChangeTitle={onChangeTitle}
        onChangeText={onChangeText}
        onClickAdd={onClickAdd}
      />
      {/* TODOの一覧 */}
      <TodoList
        todoList={todoList}
        onClickDelete={onClickDelete} />
    </>
  );
}

export default App;
