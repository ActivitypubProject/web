import { getAuthUrl } from "@/utils/Auth";
import { useRouter } from "next/router";
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { useEffect, useState } from "react";

const Index: React.FC = (demo: any) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => setData(data.username))
  })



  const router = useRouter();
  console.log(demo);
  const clickHandler = () => {
    router.push("/api/auth");
  }



  return (
    <div>

      <h1 className="text-3xl font-bold underline">Index</h1>
      {data}
      <button onClick={clickHandler}>登陆</button>
    </div>
  );
};

export default Index;



