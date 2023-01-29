import Header from "./component/Header";
import Card from "./component/Card";
import "./App.css";
const dummy=[
  {id:1,
   name:'burger',
   price:100
  },
  {id:2,
    name:'pizza',
    price:122
  },
  {id:3,
    name:'watee',
    price:20
  },
  {id:3,
    name:'watee',
    price:20
  },
  {id:3,
    name:'watee',
    price:20
  },
  {id:3,
    name:'watee',
    price:20
  },
  {id:3,
    name:'watee',
    price:20
  },
  {id:3,
    name:'watee',
    price:20
  },
  {id:3,
    name:'watee',
    price:20
  },
]
function App() {
  return (
    <div>
        <Header/>
        <Card order={dummy}/>
  
        

    </div>
  );
}

export default App;
