import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router/Router'
import Store from './Redux/Store'
import { Provider } from 'react-redux'
createRoot(document.getElementById('root')).render(
 <Provider store={Store}>
    <Router />
</Provider>
)
