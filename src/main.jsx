import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename={import.meta.env.PROD ? '/diro_technical_test/' : '/'}>
      <App />
    </Router>
  </React.StrictMode>,
);