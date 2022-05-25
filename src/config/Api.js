import axios from "axios";

//Get List API
export const getList = async (data, cb) => {
  console.log("data", data);
  let url = ` https://api.github.com/users/${data.name}/repos?allow_forking=${data.fork}`;
  try {
    const res = await axios.get(url, {
      headers: {
        "content-type": "application/vnd.github.v3+json",
      },
    });
    console.log("data", res);
    return cb(res.data);
  } catch (error) {
    return cb(null, error);
  }
};
