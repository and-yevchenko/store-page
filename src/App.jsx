import './App.css'
import "@radix-ui/themes/styles.css";
import { Header } from './components/Header/Header'
import { Theme } from '@radix-ui/themes';
import { Images } from './components/Images/Images';
import { Description } from './components/Description/Description';

function App() {
  

  return (
    <Theme style={{"backgroundColor": "transparent"}} >
      <div className='app'>
        <Header />
        <main className='main'>
          <div className='slider'>
            <Images />
          </div>
          <Description />
        </main>
      </div>
    </Theme>
  )
}

export default App
