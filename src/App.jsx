import './App.css'
import "@radix-ui/themes/styles.css";
import { Header } from './components/Header/Header'
import { Theme } from '@radix-ui/themes';

function App() {
  

  return (
    <Theme style={{"backgroundColor": "transparent"}}>
      <div className='app'>
        <Header />
        <main className='main'>
          
        </main>
      </div>
    </Theme>
  )
}

export default App
