import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import "./index.css"
import App from './App'
import { store } from '@/redux/store/store'
import { ThemeProvider } from "@/Providers/themeProvider"

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)

  root.render(
    <Provider store={store}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
    </Provider>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}