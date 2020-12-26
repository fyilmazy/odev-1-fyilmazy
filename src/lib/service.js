import axios from "axios";

const ENDPOINT = "https://jsonplaceholder.typicode.com";

// userId: number
// todo: this async function takes a userId as a parameter and awaiting to fetch results from the web
async function getData(userId) {
  try {
    const { data: user } = await axios.get(`${ENDPOINT}/users/${userId}`);
    const { data: posts } = await axios.get(
      `${ENDPOINT}/posts?userId=${userId}`
    );

    return { ...user, posts };
  } catch (error) {
    // catches error if any
    console.error(error);
  }
}
// exports the function as default
export default getData;
