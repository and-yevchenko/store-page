import './App.css';
import '@radix-ui/themes/styles.css';
import { Header } from './components/Header/Header';
import { Theme } from '@radix-ui/themes';
import { ProductCard } from './pages/ProductCard';
import { ProductProvider } from './context/ProductContext';

function App() {
    return (
        <Theme style={{ backgroundColor: 'transparent' }}>
            <div className="app">
                <ProductProvider>
                    <Header />
                    <main className="main">
                        <ProductCard />
                    </main>
                </ProductProvider>
            </div>
        </Theme>
    );
}

export default App;
