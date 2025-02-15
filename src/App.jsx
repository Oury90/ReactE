import { useState } from 'react'
import './App.css'
import {add, multiply, subtract, divide} from "./component/Calculate"
import Header from './component/Header'
import ContactCard from './component/ContactCard'
import contacts from './data'

const time = new Date().getHours()
const  mycolors = {
  color: ""
}
let greating 
if (time < 12){
  greating = "Good mornig"
  mycolors.color = "red"
}else if (time < 18 ){
  greating= "Good afternoon"
  mycolors.color = "green"
}else{
  greating = "Good evening"
  mycolors.color = "blue"
}

function creatCard(contact){
  return <ContactCard
    key={contact.id}
    name={contact.name}
    img={contact.imgUrl}
    tel={contact.telphone}
    email={contact.email}
  />
}


function App() {

  return (
    <>
    <h1 style={mycolors}>{greating} {time}</h1>
    <ul>
      <li>{add(2,4)}</li>
      <li>{subtract(8,3)}</li>
      <li>{multiply(4,5)}</li>
      <li>{divide(6,2)}</li>
    </ul>
    <Header/>

    <div className='container-box'>
      {contacts.map(creatCard)}
      {/* {contacts.map((contact, index) =>(
        <ContactCard
          key={index}
          name={contact.name}
          img={contact.imgUrl}
          tel={contact.telphone}
          email={contact.email}
        />
      ))} */}
      {/* <ContactCard 
      name="Oury" 
      img="https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg" 
      tel="+98765434567" 
      email="oury@gmail.com"/> */}
    </div>
    {/* <ContactCard name="Diallo" img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/640px-Cat_November_2010-1a.jpg" tel="+9865434567" email="oury@hotmail.com"/> */}

    </>
  )
}

export default App
