import GlobalStyle from './components/createGlobalStyle'

import Head from './components/Head'
import Body from './components/Body'
import List from './components/List'
import Button from './components/Button'
import Data from './components/Data'

const Home = () => {

  return (
    <>
      <Data>
        <GlobalStyle />
        <Head text="ここにtodoを入力" />
        <Body>
          <List />
        </Body>
        <Button />
      </Data>
    </>
  );
}

export default Home;