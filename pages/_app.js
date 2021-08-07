import '../styles/globals.css'
import { Provider } from 'next-auth/client'
import { StateProvider } from '../StateProvider'
import reducer, { initialState } from '../reducer'

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Component {...pageProps} />
    </StateProvider>

  )
}

export default MyApp
