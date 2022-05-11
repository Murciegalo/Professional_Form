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
import RequireAuth from './authRoutes/ReguireAuth';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* Public */}
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='linkpage' element={<LinkPg />} />
        <Route path='unauthorized' element={<Unauthorized />} />

        <Route element={<RequireAuth allowedRoles={['user']} />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={['admin']} />}>
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={['editor']} />}>
          <Route path='editor' element={<Editor />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={['admin, editor']} />}>
          <Route path='lounge' element={<Lounge />} />
        </Route>
        <Route path='*' element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
