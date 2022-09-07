import { createBrowserHistory } from 'history';
import Home from './pages/Home';

function App() {
    const history = createBrowserHistory();
    return <Home history={history} />;
}

export default App;
