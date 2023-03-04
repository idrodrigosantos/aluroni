import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DefaultPage } from 'components/DefaultPage';
import { Footer } from 'components/Footer';
import { NavigationMenu } from 'components/NavigationMenu';
import { About } from 'pages/About';
import { Dish } from 'pages/Dish';
import { Home } from 'pages/Home';
import { Menu } from 'pages/Menu';
import { NotFound } from 'pages/NotFound';

export function AppRouter() {
  return (
    <main className="container">
      <Router>
        <NavigationMenu />

        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />

            <Route path="cardapio" element={<Menu />} />

            <Route path="sobre" element={<About />} />
          </Route>
          <Route path="prato/:id" element={<Dish />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </main>
  );
}
