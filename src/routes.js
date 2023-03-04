import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationMenu from 'components/NavigationMenu';
import HeaderMenu from 'components/HeaderMenu';
import Home from 'pages/Home';
import Menu from 'pages/Menu';
import About from 'pages/About';
import NotFound from 'pages/NotFound';
import Dish from 'pages/Dish';
import Footer from 'components/Footer';

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <NavigationMenu />

        <Routes>
          <Route path="/" element={<HeaderMenu />}>
            <Route index element={<Home />} />

            <Route path="cardapio" element={<Menu />} />

            <Route path="sobre" element={<About />} />
          </Route>
          <Route path="*" element={<NotFound />} />

          <Route path="prato/:id" element={<Dish />} />
        </Routes>

        <Footer />
      </Router>
    </main>
  );
}
