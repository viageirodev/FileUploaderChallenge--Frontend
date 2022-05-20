import GlobalStyles, { AppWrapper } from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import lightTheme from './themes/lightTheme'

import ImageUploadContextProvider from './context/ImageUploadContext'
import UploadImagePage from './pages/UploadImagePage'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <AppWrapper>
        <ImageUploadContextProvider>
          <UploadImagePage />
        </ImageUploadContextProvider>
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
