import React from "react";

// TODOの一覧表示
export const TodoList = ({todoList,onClickDelete}) => {
    return (
        <div>
            <ul>
                {todoList.map((todo, index) => {
                    const { id, title, text } = todo;
                    return (
                        <li key={id} className='list-row'>
                            <div className='manager-box'>
                                <p className='number'>{id}</p>
                                <button type="button" className='delete-button' onClick={()=>onClickDelete(index)}>削除</button>
                            </div>
                            <h1 className='title'>{title}</h1>
                            <p className='text'>{text}</p>
                            <select className="status">
                                <option value="未着手">未着手</option>
                                <option value="進行中">進行中</option>
                                <option value="完了">完了</option>
                            </select>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}