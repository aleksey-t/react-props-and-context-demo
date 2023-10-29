import './App.css';
import Menu from "./components/Menu";

const list = [
    {
        text: "Contacts",
        id: 1,
        subItems: [
            {
                text: "Email",
                id: 2,
            },
            {
                text: "Address",
                id: 3,
            },
        ]
    },
    {
        text: "Products",
        id: 4,
        subItems: [
            {
                text: "Strawberry",
                id: 5,
            },
            {
                text: "Pineapple",
                id: 6,
            },
        ]
    }
];

function App() {
    return <div className="App">
        <Menu list={list}/>
    </div>;
}

export default App;
