import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

function MainLayout() {
    return (
        <div className="main-layout">
            {/* Header */}
                <Header />
            {/* Content */}
                <Outlet />
            {/* Footer */}
                <Footer />
        </div>
    )
}

export default MainLayout;