import '../styles/Admin.css'
import { data } from '../assets/Data'
import { Link } from 'react-router-dom';

function Admin() {
  return (
    <div className='admin'>
        <div className="blogList">
        {data.map(blog => (
          <Link to={`/preview/${blog.id}`} key={blog.id}>
            <div className='blog'>
              <h2 className='blog-title'>{blog.title}</h2>
              <p className='blog-subtitle'>{blog.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
      
    </div>
  )
}

export default Admin
