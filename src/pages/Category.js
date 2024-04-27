import { data } from '../assets/Data'
import { useParams , Link} from 'react-router-dom'

import '../styles/Category.css'



function Category() {
    const { category } = useParams();
    const filteredBlogs = category === 'All Blogs' ? data : data.filter(blog => blog.category === category);


    return (
        <div className='category'>
            <h1>{category}</h1>
            <div className="blogList">
                {filteredBlogs.map(blog => (
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

export default Category
