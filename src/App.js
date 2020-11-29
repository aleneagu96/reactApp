import './App.css';
import ContactList from './components/contact-list/ContactList';


function App() {
  // function doSomethingWithSearchData(data) { 
  //   console.log("in parent value: ", data)
  // }
  return (
    <div className="App">
        {/* <SearchBar onUserInput={(data) => doSomethingWithSearchData(data)} filterText={"Sometext"}/>

        <ContactCard firstName= " - John " lastName= "Doe " age= {21} imageUrl="https://ak.picdn.net/shutterstock/videos/34420111/thumb/1.jpg" email=" johndoe@gmail.com"/>
        <ContactCard firstName= " - Jane " lastName= "Doe " age= {29} imageUrl="https://previews.123rf.com/images/tifani1/tifani12005/tifani1200500139/147628075-girl-avatar-on-black-background-cute-cartoon-character-flat-vector-illustration.jpg" email=" janedoe@gmail.com"/>
        <ContactCard firstName= " - Jack " lastName= "Doe " age= {24} imageUrl="https://media.istockphoto.com/photos/cute-little-alien-cartoon-character-is-waving-his-hand-picture-id924771808" email=" jackdoe@gmail.com" /> */}
        <ContactList/>
    </div>
  );
}

export default App;
