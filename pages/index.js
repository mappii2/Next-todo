import GlobalStyle from './components/createGlobalStyle'

import Head from './components/Head'
import Body from './components/Body'
import List from './components/List'
import Button from './components/Button'
import Data from './components/Data'
import TableList from './components/TableList'

import Table from './components/Table/Table'
import Thead from './components/Table/Thead'
import Tbody from './components/Table/Tbody'
import Tr from './components/Table/Tr'
import Th from './components/Table/Th'
import Td from './components/Table/Td'

const Home = () => {

  return (
    <>
      {/* <Data>
        <GlobalStyle />
        <Head text="ここにtodoを入力" />
        <Body>
          <List />
        </Body>
        <Button />
      </Data> */}
      {/* <TableList /> */}
      <Table>
        <Tbody>
          <Tr>
            <Th>挨拶</Th>
            <Td>こんにちは</Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  );
}

export default Home;