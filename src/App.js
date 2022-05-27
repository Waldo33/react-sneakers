import Card from './components/Card/Card'
import Search from './components/Search/Search'
import Header from './components/Header/Header'
import Drawer from './components/Drawer/Drawer'

function App() {
  return (
    <div className='wrapper clear'>
      <Drawer/>
      <Header/>
      <main className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1 className="">Все кроссовки</h1>
          <Search/>
        </div>
        <div className="card-wrapper">
          <Card img={'1'}/>
          <Card img={'2'}/>
          <Card img={'3'}/>
          <Card img={'4'}/>
          <Card img={'5'}/>
          <Card img={'6'}/>
          <Card img={'7'}/>
          <Card img={'8'}/>
          <Card img={'9'}/>
          <Card img={'10'}/>
          <Card img={'11'}/>
          <Card img={'12'}/>
        </div>
      </main>
    </div>
  );
}

export default App;