import './App.scss';
import { Header } from './components/header';
import { Editor } from './components/editor';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Editor />
    </div>
  );
}

export default App;
