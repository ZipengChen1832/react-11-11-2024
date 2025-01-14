import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      title: "",
      body: "",
    },
    onSubmit: async (values) => {
      const { data } = await axios.post<Post>(
        "https://jsonplaceholder.typicode.com/posts",
        {
          userId: 1,
          ...values,
        }
      );
      setPosts((prev) => [...prev, data]);
    },
  });

  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data: Post[] = await res.json();
      setPosts(data.slice(0, 3));
    })();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newPostTitle">New Post Title</label>
        <input
          id="newPostTitle"
          name="title"
          value={values.title}
          onChange={handleChange}
        />
        <label htmlFor="newPostBody">New Post Body</label>
        <input
          id="newPostBody"
          name="body"
          value={values.body}
          onChange={handleChange}
        />
        <button type="submit">Add new Post</button>
      </form>
      <ul>
        {posts.map((post) => {
          const { id, body, title } = post;

          return (
            <li key={id}>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
