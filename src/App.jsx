import './App.css'
import Prac from './Prac'
function App() {


  return (
    <section className='practice'>
      <div>
       <Prac profile={<img src="https://images.unsplash.com/photo-1591704951890-0862b2e98acb?q=80&w=681&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />}
       title={"Water Bottle"}
       description={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolorem at, eaque adipisci veniam aspernatur?s."}
       price={ "$ 137"}/>
      </div>

      <div>
        <Prac profile={<img src='https://images.unsplash.com/photo-1499678450342-29ebee16d1ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW1icmVsbGF8ZW58MHx8MHx8fDA%3D' />}
       title={"Umbrella"}
       description={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolorem at, eaque adipisci veniam aspernatur?s."}
       price={ "$ 220"}/>
      </div>

      <div>
        <Prac profile={<img src="https://images.unsplash.com/photo-1707438095940-1eee18e85400?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Ftc3VuZyUyMHBob25lfGVufDB8fDB8fHww" alt="" />}
       title={"Samsung"}
       description={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolorem at, eaque adipisci veniam aspernatur?s."}
       price={ "$ 1,000"}/>
      </div>
    </section>
  )
};

export default App
