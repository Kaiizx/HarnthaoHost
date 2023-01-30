import Header from "./component/Header";
import Card from "./component/Card";
import classes from "./App.css";
import AddCard from "./component/AddCard";
import { useState } from "react";
const dummy=[
  {id:1,
   name:'burger',
   price:100,
   person:2
  },
  {id:2,
    name:'pizza',
    price:122,
    person:2
  },
  {id:3,
    name:'watee',
    price:20,
    person:2
  },
  {id:4,
    name:'watee',
    price:20,
    person:2
  },
  {id:5,
    name:'watee',
    price:20,
    person:2
  },
  {id:6,
    name:'watee',
    price:20,
    person:2
  },
  {id:7,
    name:'watee',
    price:20,
    person:2,
    person:2
  },
  {id:8,
    name:'watee',
    price:20,
    person:2
  },
  {id:9,
    name:'watee',
    price:20,
    person:2
  },
]
const dummyperson=[
  {
    id:1,
    name:'Afnan',
    cost:200,
    piece:2
  },
  {
    id:2,
    name:'Afnan',
    cost:200,
    piece:2
  },
  {
    id:3,
    name:'Afnan',
    cost:200,
    piece:2
  },
  {
    id:4,
    name:'Afnan',
    cost:200,
    piece:2
  },
  {
    id:5,
    name:'Afnan',
    cost:200,
    piece:2
  },
  {
    id:6,
    name:'Afnan',
    cost:200,
    piece:2
  },
  {
    id:7,
    name:'Afnan',
    cost:200,
    piece:2
  },
  {
    id:8,
    name:'Afnan',
    cost:200,
    piece:2
  },
]

function App() {
  const orderAmount=Object.keys(dummy).length

  return (
    <div className={classes.App}>
        <Header/>
        <Card order={dummy} amount={orderAmount} person={dummyperson}/>
    </div>
  );
}

export default App;
