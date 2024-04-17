import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './App.tsx'
import './index.scss'
import 'normalize.css';
import { setupStore } from './store/store.ts';
import { BrowserRouter } from 'react-router-dom';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
)
