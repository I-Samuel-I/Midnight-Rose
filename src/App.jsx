import Main from "./assets/global"
import { GlobalStyle } from "./assets/global/global-style"
import { Analytics } from "@vercel/analytics/next"
function App() {
  
  return (
    <>
    <GlobalStyle/>
    <Analytics />
    <Main/>
    </>
  )
}

export default App
