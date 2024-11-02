import './App.css'
import "@radix-ui/themes/styles.css";
import { Header } from './components/Header/Header'
import { Theme } from '@radix-ui/themes';
import { ProductCard } from './pages/ProductCard';


function App() {
  
  return (
    <Theme style={{"backgroundColor": "transparent"}} >
      <div className='app'>
        <Header />
        <ProductCard />
      </div>
    </Theme>
  )
}

export default App
