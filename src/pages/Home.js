import '../styles/Home.css'
import { data } from '../assets/Data'
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div className='home'>
      <h1>All Blogs</h1>
      <div className="blogList">
        {data.map(blog => (
          <Link to={`/preview/${blog.id}`} key={blog.id}>
            <div className='blog'>
              <h2 className='blog-title'>{blog.title}</h2>
              <p className='blog-subtitle'>{blog.subtitle}</p>
              {/* <p className='blog-body'>{blog.body}</p> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home



//   const { category } = useParams();
//   const filteredBlogs = category === 'All Blogs' ? data : data.filter(blog => blog.category === category);


//   return (

//     <div className="home">
//       <h1>{category}</h1>
//       <div className="blogList">
//         {filteredBlogs.map(blog => (
//           <Link to={`/preview/${blog.id}`} key={blog.id}>
//             <div className="blog">
//               <h2 className='blog-title'>{blog.title}</h2>
//               <p className='blog-subtitle'>{blog.subtitle}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>

//   )
// }




