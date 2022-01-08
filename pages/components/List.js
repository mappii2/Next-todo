import styled from 'styled-components';
import { useContext } from 'react';
import { TodoList } from '../components/Data'

const List = () => {
  const { data, setData } = useContext(TodoList);

  return (
    <>
      {data.map((item, index) => (
        <ListStyle key={item.id}>
          <label>
            <div>
              <input type="checkbox" />
              <TextStrike>{item.name}</TextStrike>
            </div>
          </label>
          <ButtonList>
            <button>削除</button>
            <button>
              <span>取消</span>
            </button>
            <button>
              <span>変更</span>
            </button>
          </ButtonList>
        </ListStyle>
      ))}
    </>
  )
}

export default List

const ListStyle = styled.li`
  align-items: center;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 15px 0 15px 15px;
  background-color : #fff;
  color: #000;
  &:hover {
    opacity: 0.7;
  }
  &:not(:last-child) {
  border-bottom: 1px solid #ccc;
}
`;

const TextStrike = styled.span`
  text-decoration: none;
`;

const ButtonList = styled.div`
  display: none;
  margin-right: 15px;
  height: 30px;
  ${ListStyle}:hover & {
    display: block;
  }
`;