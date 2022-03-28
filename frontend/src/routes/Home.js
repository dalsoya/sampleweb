import { useEffect, useState } from "react";
import { axiosInstace } from "../util";

const Home = () => {

  useEffect(() => {
    const init = async () => {
      const res = await axiosInstace.get("/");

      setList(res.data.user)
    }

    init();
  }, [])

  const [list, setList] = useState([])

  return <div>
    <h1>home</h1>
    {
      list.map((item, index) => {
        console.log(item)
        return <div key={index}>
          <p>{item.username}</p>
          <p>{item.password}</p>
          <hr />
        </div>
      })
    }
  </div>
}

export default Home;