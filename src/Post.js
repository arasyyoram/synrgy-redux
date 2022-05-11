import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostAsync } from "./action";

const Post = () => {
  // const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchPostAsync()); // redux thunk middleware
  }, [dispatch]);

  return (
    <div>
      <h2>Post</h2>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <ol>
          {list.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ol>
      )}
      {error && <div>Unexpected Error</div>}
    </div>
  );
};

export default Post;
