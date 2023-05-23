import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import LessonsPage from '../pages/LessonsPage';
import TestsPage from '../pages/TestsPage';
import ArticlesPage from '../pages/ArticlesPage';
import ContactsPage from '../pages/ContactsPage';
import NotFoundPage from '../pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/lessons" element={<LessonsPage />} />
        <Route path="/tests" element={<TestsPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
