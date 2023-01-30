import classes from "./Card.module.css";
import Track from "./Track";
import List from "./List";
import ListCard from "./ListCard";
import Addbutton from "./AddButton";
import PersonIcon from "./icon/PersonIcon";
import Bar from "./Bar";
import AddCard from "./AddCard";
import { useState, useEffect } from "react";
const Card = (props) => {
  const [Add, setAdd] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [perlist, setperlist] = useState(props.person);
  const [orlist, setorlist] = useState(props.order);
  const [addper, setaddper] = useState("");
  const [addor, setaddor] = useState("");
  const [addpr, setaddpr] = useState("");
  const greatestper =
    perlist.reduce((acc, obj) => (obj.id > acc ? obj.id : acc), 0) + 1;
const greatestor =
    orlist.reduce((acc, obj) => (obj.id > acc ? obj.id : acc), 0) + 1;
 
    const onClickAdd = () => {
    setAdd(true);
  };
  const onClicktoggle = () => {
    setToggle(!toggle);
  };
  const onClose = () => {
    setAdd(false);
  };
  const addperson = (event) => {
    console.log(event.target.value);
    setaddper(event.target.value);
  };
  const addorder = (event) => {
    console.log(event.target.value);
    setaddor(event.target.value);
  };
  const addprice = (event) => {
    console.log(event.target.value);
    setaddpr(event.target.value);
  };
 
 

  const submitaddperson = () => {
    const newperson = {
        id: greatestper,
        name: addper,
        cost: 999,
        person: 9,
      };
    
    console.log(newperson);
    setperlist([...perlist, newperson]);
    console.log(perlist);
    setaddper('')
  };
  const submitaddorder = () => {
    const neworder = {
        id: greatestor,
        name: addor,
        price: +addpr,
        person: 9,
      };
    
    console.log(neworder);
    setorlist([...orlist, neworder]);
    setaddor('')
    setaddpr('')
    console.log('sub,mit')
  };

  useEffect(()=>{console.log('update')},[perlist])
  const sum = orlist.reduce((acc, obj) => acc + obj.price, 0);
  const personNum = Object.keys(perlist).length;
  const orderNum = Object.keys(orlist).length;
  const orderlist = orlist.map((order) => (
    <ListCard
      key={order.id}
      id={order.id}
      name={order.name}
      price={order.price}
      person={order.person}
    />
  ));
  const personlist = perlist.map((order) => (
    <ListCard
      key={order.id}
      id={order.id}
      name={order.name}
      price={order.cost}
      person={order.person}
    />
  ));

  return (
    <section className={classes.summary}>
      {Add && (
        <AddCard
          addper={addper}
          onChange={addperson}
          onClick={submitaddperson}
          onClose={onClose}
          addor={addor}
          addpr={addpr}
          onChangeor={addorder}
          onChangepr={addprice}
          onClickor={submitaddorder}
          
        />
      )}
      <Track amount={orderNum} person={personNum} total={sum} />
      <Bar status={toggle} />
      <div className={classes.scroller}>{!toggle ? orderlist : personlist}</div>
      <div className={classes.butcon}>
        <div className={classes.but}>
          <Addbutton onClick={onClickAdd}>Add</Addbutton>
        </div>
        <div className={classes.but}>
          <Addbutton onClick={onClicktoggle}>Toggle</Addbutton>
        </div>
      </div>
    </section>
  );
};
export default Card;
