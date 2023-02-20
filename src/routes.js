import HeaderMenu from 'components/HeaderMenu';
import NavigationMenu from 'components/NavigationMenu';
import Menu from 'pages/Menu';
import Start from 'pages/Start';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <NavigationMenu />

        <Routes>
          <Route path="/" element={<HeaderMenu />}>
            <Route index element={<Start />} />

            <Route path="cardapio" element={<Menu />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}
