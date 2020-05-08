import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import List from './List';

type TodoDataType = {
  id: number
  title: string
  content: string
  category: string
  createdAt: string
  isFavorite: boolean
}

const TodoData: TodoDataType[] = [
  {
      id: 1,
      title: "タイトル",
      content: "内容1",
      category: "1",
      createdAt: "2020-05-06",
      isFavorite: false
  },
  {
      id: 2,
      title: 'タイトル2',
      content: "内容2",
      category: "2",
      createdAt: "2020-05-07",
      isFavorite: false
  }
]

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <h1>
          TODO LIST
        </h1>
        <table>
          <thead>
            <tr>
               <th>ID</th>
               <th>カテゴリ</th>
               <th>タイトル</th>
               <th>内容</th>
               <th>日付</th>
               <th>操作</th>
            </tr>
          </thead>
          <tbody>
          {TodoData.map((TodoData, index) => (
            <List
              key={index}
              id={TodoData.id}
              title={TodoData.title}
              content={TodoData.content}
              category={TodoData.category}
              createdAt={TodoData.createdAt}
              isFavorite={TodoData.isFavorite}
            />
          ))}
          </tbody> 
      </table>
      </div>
    );
  }
}

export default App;
