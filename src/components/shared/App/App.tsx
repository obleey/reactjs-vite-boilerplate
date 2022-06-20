import { Avatar, Button, Spinner } from 'components/shared/shared'
import { Footer, Header } from 'components/partials/partials'
import { Router } from '@tanstack/react-location'
import { routes, location } from 'routes/Routes'

function App() {
  return (
    <div className="bg-white">
      <Router routes={routes} location={location}>
        <Header />
        <Avatar size="small" />
        <Button>Button</Button>
        <Spinner />
        <Footer />
      </Router>
    </div>
  )
}

export default App
