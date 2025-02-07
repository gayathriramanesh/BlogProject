import './App.css';
import PostsList from './components/PostsList';
import AddPosts from './components/AddForm';
function App() {
  return (
    <div className="App">
       <AddPosts/>
       <PostsList/>
    </div>
  );
}

export default App;
