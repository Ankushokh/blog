import React, { useEffect, useState } from 'react'
import './blog.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlogsAction, listBlogs } from '../redux/action';
function Blog({search}) {
    const dispatch = useDispatch();
    const blogsList = useSelector((state) => state.blogList);
    const blogDelete = useSelector((state) => state.blogDelete);
    const [keyword, setKeyword] = useState("");
    const { loading, error, blogs } = blogsList;
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
      } = blogDelete;
    useEffect(() => 
    { dispatch(listBlogs());
    
    }, [])
    const deleteHandler = (id) => {

        if (window.confirm("Are you sure?")) {
          dispatch(deleteBlogsAction(id))
        }
    };
    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
           window.location.href=`https://jsonplaceholder.typicode.com/posts/${keyword}`
        } else {
            window.location.href=`/posts/${keyword}`
        }
      };
  return (
    <div>
          <h2>
              
              blog app...
      </h2><div class="container">
  <form action="https://jsonplaceholder.typicode.com/posts">
    <div class="row">
      <div class="col-25">
        <label for="title">
        Title</label>
      </div>
      <div class="col-75">
        <input type="text" id="Title" name="title" placeholder="Your Tilte.."/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="text">text</label>
      </div>
           <div class="col-75">
        <input type="text" id="text" name="text" placeholder="Your text.."/>
      </div>
    </div>
       <br/>
    <div class="row">
      <input type="submit" value="create"/>
    </div>
  </form>
</div>
          <div className='Header'>
          <form class="example" onSubmit={searchSubmitHandler} style={{maxWidth:"30%",margin:"auto"}}>
  <input type="text" placeholder="Search.."  onChange={(e) => setKeyword(e.target.value)}/>
  <button type="submit">Search</button>
</form>
          </div>
          <div class="row">
          {blogs &&
              blogs.map((data) => (
                  
                  
  <div class="column">
    <div class="card" key={data.id}>
    <button class="button button3" onClick={deleteHandler}>delete</button> <h4>{data.title}</h4>
                          <p>~ { data.body}...</p>
      
    </div>
       
            



        </div>
              ))}
          </div>

     
    </div>
  )
}

export default Blog
