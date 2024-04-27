import '../styles/Preview.css'

import { useParams } from 'react-router-dom'
import {data} from '../assets/Data'

function Preview() {

  const { id } = useParams();
  const selectedBlog = data.find(blog => blog.id === parseInt(id));

  return (
    <div className='preview'>
      <div className="blog">
        <h1>{selectedBlog.title}</h1>
        <p>{selectedBlog.body}</p>
      </div>
    </div>
  )
}

export default Preview
