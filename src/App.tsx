import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TodoListPage } from './pages';

const App = () => {

    return (
        <BrowserRouter>
            <ToastContainer />
            <Routes>
              <Route path='/Todo-list' element={<TodoListPage />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;