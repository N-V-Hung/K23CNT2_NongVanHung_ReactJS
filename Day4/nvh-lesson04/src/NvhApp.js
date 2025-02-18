import logo from './logo.svg';
import './App.css';
import NvhFuncComp from './components/NvhFuncComp';
import NvhFuncComp1 from './components/NvhFuncComp1';
import NvhClassComp from './components/NvhClassComp';

function App() {
  //
  const users ={
    fullname:'Nong Van Hung',
    age:'20',
    phone:'3u448844848'
  }

  return (
    <div className="App">
      <h1>Demo Componemt - Props - State</h1>
      <hr/>
      <div className='alret alret-danger'>
          <NvhFuncComp name="Van Hung" address="25 Vu Trong Phan" company = "Devmaster" />
          <hr/>
      </div>
      
      //
      <div className='alret alret-danger'>
        <NvhFuncComp1 renderInfo={users} />
        <hr/>

      </div>
      <div className='alret alret-danger'>
        <NvhClassComp />

      <hr/>
      </div>
      <div className='alret alret-danger'>
        <NvhClassComp renderName="K23CNT2" renderUsers={users} />
      </div>
    </div>
  )
}

export default App;
