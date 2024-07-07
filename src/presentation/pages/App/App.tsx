import { RouterConfig } from 'application/routes/routersConfig'
import { LayoutPage } from 'presentation/components/Layout/Layout'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <LayoutPage>
        <RouterConfig />
      </LayoutPage>
    </BrowserRouter>
  )
}

export default App
