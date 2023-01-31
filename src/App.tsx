import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <img className="App-logo" src="https://img.freepik.com/premium-vector/colorful-elephant-zentangle-arts-isolated-black-background_122297-2007.jpg"/>
        </header>
        <nav className="App-nav">
            <a href='#s'>Profile</a>
            <a href='#s'>Messages</a>
            <a href='#s'>News</a>
            <a href='#s'>Music</a>
            <a href='#s'>Settings</a>
        </nav>
        <main className="App-main">
            <img src="https://icocnews.ru/wp-content/uploads/2015/09/priroda.jpg"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5DoQQ33mnlPa6HKI8SCpdn4kd30birHgBqQ&usqp=CAU"/>
            <div>
                <h3>Svetlana N.</h3>
                <div>Date of Birth: 31 january</div>
                <div>City: Rybinsk</div>
                <div>Education: YGMU'13</div>
                <div>Web-site: none</div>
            </div>
            <div>
                <h3>My posts</h3>
                <input/>
                <button>Send</button>
            </div>
        </main>
    </div>
  );
}

export default App;
