import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import PostList from "./components/PostList";
import PostCreateForm from "./components/PostCreateForm";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<PostList />} />
                    <Route path="/create" element={<PostCreateForm />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
