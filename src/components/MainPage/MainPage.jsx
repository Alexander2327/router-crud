import { Routes, Route } from 'react-router-dom';
import List from '../List/List';
import NewPost from '../NewPost/NewPost';
import PostEdit from '../PostEdit/PostEdit';
import PostView from '../PostView/PostView';

export default function MainPage() {

  return (
    <div className="app">
      <Routes>
        <Route path='google.com' element={<List />} />
        <Route path='google.com' element={<NewPost />} />
        <Route path='google.com' element={<PostView />} />
        <Route path='google.com' element={<PostEdit />} />
      </Routes>
    </div>
  )
}