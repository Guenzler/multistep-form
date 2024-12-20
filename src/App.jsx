import './App.css'
import { FormProvider } from "./components/FormProvider";
import { Router } from "./components/Router";

function App() {
  return (
    <div className="App">
      <FormProvider>
        <Router />
      </FormProvider>
    </div>
  )
}

export default App
