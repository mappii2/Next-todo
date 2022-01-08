import styled from 'styled-components';

const Body = ({ children }) => {
  return (
    <Content>
      <TodoList>
        {children}
      </TodoList>
    </Content>
  )
}
export default Body

const Content = styled.div`
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 50px 0 30px;
`;

const TodoList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 20px;
`;
