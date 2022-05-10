import { Routes, Route } from 'react-router-dom';
import { Admin } from './Admin';
import { Editor } from './Editor';
import { Home } from './Home';
import { Layout } from './Layout';
import { LinkPg } from './LinkPg';
import { Login } from './Login';
import { Lounge } from './Lounge';
import { Register } from './Register';
import { Unauthorized } from './Unauthorized';
import { Missing } from './Missing';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* Public */}
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='linkpage' element={<LinkPg />} />
        <Route path='unauthorized' element={<Unauthorized />} />

        {/* Private */}
        <Route path='/' element={<Home />} />
        <Route path='editor' element={<Editor />} />
        <Route path='admin' element={<Admin />} />
        <Route path='lounge' element={<Lounge />} />

        <Route path='*' element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
