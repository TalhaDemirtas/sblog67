import { ToastContainer } from 'react-toastify';
import AppRouter from './router/AppRouter';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer />
      </AuthContextProvider>
    </div>
  )
}

export default App
