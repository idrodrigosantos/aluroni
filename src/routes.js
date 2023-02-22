import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationMenu from 'components/NavigationMenu';
import HeaderMenu from 'components/HeaderMenu';
import Home from 'pages/Home';
import Menu from 'pages/Menu';
import About from 'pages/About';
import Footer from 'components/Footer';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <NavigationMenu />

        <Routes>
          <Route path="/" element={<HeaderMenu />}>
            <Route index element={<Home />} />

            <Route path="cardapio" element={<Menu />} />

            <Route path="sobre" element={<About />} />
          </Route>
        </Routes>

        <Footer />
      </Router>
    </main>
  );
}
