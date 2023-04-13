import React from "react";

// TODOの追加
export const TodoAdd = ({todoTitle, todoText, onChangeTitle, onChangeText, onClickAdd}) => {
    return (
        <div>
            <input onChange={onChangeTitle} type="text" placeholder="TODOを入力" value={todoTitle} />
            <input onChange={onChangeText} type="text" placeholder="TODOの詳細を入力" value={todoText} />
            <button type="button" onClick={onClickAdd}>追加</button>
        </div>
    )
};