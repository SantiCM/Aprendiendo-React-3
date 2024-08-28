import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const client = new QueryClient({
  defaultOptions: { queries: { retry: 5, retryDelay: 100 } }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <ReactQueryDevtools />
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
