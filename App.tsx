import { AppProvider, useApp } from '@/context/AppContext';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import AIChatbot from '@/components/AIChatbot';
import LoginScreen from '@/screens/LoginScreen';
import StudentDashboard from '@/screens/StudentDashboard';
import NoticeBoard from '@/screens/NoticeBoard';
import CalendarScreen from '@/screens/CalendarScreen';
import NotificationsScreen from '@/screens/NotificationsScreen';
import FacultyDashboard from '@/screens/FacultyDashboard';
import CreateAnnouncement from '@/screens/CreateAnnouncement';
import MyAnnouncements from '@/screens/MyAnnouncements';
import AdminUsers from '@/screens/AdminUsers';
import AdminDepartments from '@/screens/AdminDepartments';
import AdminAnalytics from '@/screens/AdminAnalytics';

function AppContent() {
  const { isAuthenticated, role, screen } = useApp();

  if (!isAuthenticated) {
    return <LoginScreen />;
  }

  const renderScreen = () => {
    // Student screens
    if (role === 'student') {
      switch (screen) {
        case 'dashboard': return <StudentDashboard />;
        case 'noticeboard': return <NoticeBoard />;
        case 'calendar': return <CalendarScreen />;
        case 'notifications': return <NotificationsScreen />;
        default: return <StudentDashboard />;
      }
    }

    // Faculty screens
    if (role === 'faculty') {
      switch (screen) {
        case 'dashboard': return <FacultyDashboard />;
        case 'noticeboard': return <NoticeBoard />;
        case 'calendar': return <CalendarScreen />;
        case 'notifications': return <NotificationsScreen />;
        case 'faculty-create': return <CreateAnnouncement />;
        case 'faculty-my-announcements': return <MyAnnouncements />;
        default: return <FacultyDashboard />;
      }
    }

    // Admin screens
    if (role === 'admin') {
      switch (screen) {
        case 'dashboard': return <AdminAnalytics />;
        case 'noticeboard': return <NoticeBoard />;
        case 'calendar': return <CalendarScreen />;
        case 'notifications': return <NotificationsScreen />;
        case 'admin-users': return <AdminUsers />;
        case 'admin-departments': return <AdminDepartments />;
        case 'admin-analytics': return <AdminAnalytics />;
        default: return <AdminAnalytics />;
      }
    }

    return <StudentDashboard />;
  };

  return (
    <div className="min-h-screen flex bg-navy-50">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />
        <main className="flex-1 p-4 lg:p-6 overflow-x-hidden">
          <div className="max-w-7xl mx-auto">
            {renderScreen()}
          </div>
        </main>
      </div>
      <AIChatbot />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
