
import './App.css'
import data from "./data.json";
import { Section } from './components/section/Section';
import { Title } from './components/Title/Title';
import { CardList } from './components/CardList/CardList';
// import data from "./data.json"



const title = "hello world"
const qwe = "Заголовок секції"

function App() {
  // const {name, age, city} = data

  return (
    // <>
    // <h1>{title}</h1>
    // <p>{text}</p>
    // <div>
    //   <h2>Name: {name}</h2>
    //   <p>Age: {age}</p>
    //   <p>Sity: {city}</p>
    // </div>
    // </>
    

    <>
    <Section>
      <Title qwe={text}/>
      <CardList data={data}/>
    </Section>
    </>
  )
}

export default App
