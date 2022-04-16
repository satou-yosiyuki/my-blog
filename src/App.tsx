import { useState } from "react";
import "./App.css";
import { client } from "../libs/client";
import { Link } from "react-router-dom";

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};

function App({ blog }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
