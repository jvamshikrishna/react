import Chai from "./chai"

function App() {

  const username = "chai aur code"


  return (
    <> {/*only 1 tag to be returned so, instead of using div tag , we can create a fragment empty tag*/}
    <Chai/>
    <h1>vamshi {username}</h1>
    </>
      
    
  )
}

export default App
