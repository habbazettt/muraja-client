import { Routes, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/auth/LoginPage';
import NotFound from './pages/NotFound';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import DailyLogDashboardPage from './pages/user/DailyLogDashboardPage';
import RekomendasiPage from './pages/rekomendasi/RekomendasiPage';
import AddJadwalPage from './pages/data-murojaah/AddJadwalPage';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<WelcomePage />} />

      <Route path='/auth/login' element={<LoginPage />} />
      <Route path='/auth/register' element={<RegisterPage />} />
      <Route path='/auth/forgot-password' element={<ForgotPasswordPage />} />
      <Route path='/dashboard/user/murojaah-harian' element={<DailyLogDashboardPage />} />
      <Route path='/dashboard/user/ai-rekomendasi' element={<RekomendasiPage />} />
      <Route path='/dashboard/user/data-murojaah/add' element={<AddJadwalPage />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}