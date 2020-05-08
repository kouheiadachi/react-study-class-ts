import React from 'react';
import logo from '../logo.svg';
import '../App.css';

interface Props {
  id: number
  title: string
  content: string
  category: string
  createdAt: string
  isFavorite: boolean
}
interface State {}

class List extends React.Component<Props> {
  
  render() {
    return (
      <>
        <tr>
          <td>
          {this.props.id}
          </td>
          <td>
          {this.props.category}
          </td>
        <td>
          {this.props.title}
        </td>
        <td>
          {this.props.content}
        </td>
        <td>
        {this.props.createdAt}
        </td>
        <td>
        {this.props.isFavorite}
        </td>
        </tr>
      </>
    );
  }
}

export default List;
