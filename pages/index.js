import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const LayoutComponent = dynamic(() => import("@/layout"));

export default function Main() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log("err => ", err));
  }, []);

  return (
    <>
      <LayoutComponent metaTitle="Home">
        {data.users.map((item) => (
          <ul>
            <li>
              {item.firstName} ({item?.gender})
            </li>
          </ul>
        ))}
      </LayoutComponent>
    </>
  );
}
