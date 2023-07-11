import Sidebar from "./components/sidebar"
import MainContent from "./components/MainContent"
import PreviewProjects from "./components/PreviewProjects"
import "./styles/components/app.sass"


function App() {

  return (
    <div id="portifolio">
      <h1>Gabriel Apolinario</h1>
      <Sidebar/>
      <MainContent/>
      {/* <PreviewProjects/> */}
    </div>
  )
}

export default App
