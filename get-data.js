import axios from "axios";

const getData = async (Number) => {
  const user = await axios(
    `https://jsonplaceholder.typicode.com/users/${Number.toString()}`
  ).catch((err) => console.log("User is not found"));
  const post = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${Number.toString()}`
  ).catch((err) => console.log("Post is not found"));
  return (
    user &&
    user.data && { ...user.data, posts: post && post.data && [...post.data] }
  );
};
export default getData;
