import styled from 'styled-components'

const Head = (props) => {
  return (
    <Content>
      <InputArea>
        <Input
          type="text"
          placeholder="todo"
        />
        <Button>決定</Button>
        <p>{props.text}</p>
      </InputArea>
    </Content>
  )
}

export default Head

const Content = styled.div`
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 50px 0 30px;
`;

const InputArea = styled.div`
  margin: 20px 0 20px;
  text-align: center;
`;

const Input = styled.input`
  font-size: 24px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding-left: 15px;
  width: 600px;
`;

const Button = styled.button`
  font-size: 24px;
  border: 1px solid #bfbfbf;
  border-radius: 3px;
  background-color: rgb(85, 158, 248);
  color: #ffffff;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;