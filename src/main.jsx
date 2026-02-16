import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeContextProvider } from './context/ThemeContext.jsx'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename={"/"}>
        <ThemeContextProvider>
            <App />
            <Toaster
            richColors
            expand
            visibleToasts={9}
            position={"bottom-center"}
          />
        </ThemeContextProvider>
    </BrowserRouter>,
)