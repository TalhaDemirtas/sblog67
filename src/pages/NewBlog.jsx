import { useState } from 'react';
import BlogForm from '../components/BlogForm';
import { AddBlog } from '../helpers/firebase';

const initialValues = { title: '', imgurl: '', content: '' };

function NewBlog() {
  const [blog, setBlog] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    AddBlog(blog);
  };

  return (
    <div>
      <BlogForm blog={blog} setBlog={setBlog} handleSubmit={handleSubmit} />
    </div>
  );
}

export default NewBlog;
