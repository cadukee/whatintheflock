import './Layout.css';
import Map from '../Map/Map';

function Layout() {
    return (
        <div className="layout">
            <header className="layout-header">
                <h1></h1>
            </header>
            <main className="layout-main">
                <Map />
            </main>
        </div>
    );
}

export default Layout;