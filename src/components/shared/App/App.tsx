import { Footer, Header } from 'components/partials/partials'
import { Outlet, Router } from '@tanstack/react-location'
import { routes, location } from 'routes/Routes'

function App() {
  return (
    <div className="bg-white">
      <Router routes={routes} location={location}>
        <Header />
        <Outlet />
        <Footer />
      </Router>
    </div>
  )
}

export default App
