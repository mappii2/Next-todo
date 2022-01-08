import styled from 'styled-components';
import { useContext } from 'react';
import { TodoList } from '../components/Data'

const Button = () => {
  const { count, setCount } = useContext(TodoList);

  return (
    <>
      <p>
        全<Number>1</Number>個
      </p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button>一括で削除</button>
      <button>全選択</button>
      <button>全解除</button>
    </>
  )
}

export default Button

const Number = styled.span`
  color: #f00;
  font-size: 20px;
  font-weight: bold;
  margin: 0 2px;
`;