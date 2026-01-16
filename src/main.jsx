import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes.jsx'
import { AnimatePresence } from 'framer-motion'
import Preloader from './components/Preloader'
import { ThemeProvider } from './context/ThemeContext'
import ErrorBoundary from './components/ErrorBoundary'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Wait for actual page load instead of fixed timeout
    const handleLoad = () => {
      // Minimum display time for preloader (500ms) + actual load
      const minDisplayTime = 500
      const startTime = performance.now()

      const finishLoading = () => {
        const elapsed = performance.now() - startTime
        const remaining = Math.max(0, minDisplayTime - elapsed)
        setTimeout(() => setLoading(false), remaining)
      }

      if (document.readyState === 'complete') {
        finishLoading()
      } else {
        window.addEventListener('load', finishLoading, { once: true })
      }
    }

    handleLoad()
  }, [])

  return (
    <StrictMode>
      <ErrorBoundary>
        <ThemeProvider>
          <AnimatePresence mode="wait">
            {loading ? (
              <Preloader key="preloader" />
            ) : (
              <RouterProvider router={router} key="router" />
            )}
          </AnimatePresence>
        </ThemeProvider>
      </ErrorBoundary>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<App />)
