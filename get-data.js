import axios from "axios";

const getData = async (Number) => {
  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/${Number.toString()}`
  );
  const { data: post } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${Number.toString()}`
  );
  return { ...user, posts: [...post] };
};
export default getData;
