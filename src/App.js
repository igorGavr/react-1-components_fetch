
import './App.css';

import Posts from "./components/Posts";
import Users from "./components/Users";
import Comments from "./components/Comments";

function App() {


    return (
        <div className="App">
            <div className={'users'}>
                <Users/>
            </div>
            <hr/>
            <div className={'posts'}>
                <Posts/>
            </div>
            <hr/>
            <div className={'comments'}>
                <Comments/>
            </div>
        </div>
    );
}

export default App;
