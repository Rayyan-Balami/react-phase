import Form from "./components/Form";
import SideInfo from "./components/SideInfo";
import { FormProvider } from "./contexts/Form";
import { useForm } from "./contexts/Form";

function App() {

  return (
    <div className="p-12 bg-gray-900">
    <div className="w-fit mx-auto flex gap-4 bg-gray-800 text-gray-300 font-mono transition-all duration-500">
      <FormProvider>
      <Form />
      <SideInfo />
      </FormProvider>
    </div>
  </div>
    )
}

export default App;
