import { TextTyper } from "./components/TextTyper";

function App() {
  const list = [
    'one', 'two', 'three', 'four', 'five', 'six'
  ]

  return (
    <>
      <TextTyper
        textList={list}
        textDelay={100}
        wrapper='h1'
        className=''
        showsCursor
      />
    </>
  );
}

export default App;
