import './App.css'
import Input from './components/util/Input'
import Textarea from './components/util/Textarea'

function App() {
  return (
    <>
      <Input
        labelText='Name'
        type={'text'}
        placeholder='Enter your name'
        value={''} />

      <Textarea
        labelText='Address'
        placeholder='Enter your address'
        rows={5} />

      <Input
        type={'file'}
        value={''} />
    </>
  )
}

export default App
