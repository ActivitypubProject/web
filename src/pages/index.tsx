import { useRouter } from "next/router";
import { useEffect } from "react";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    const accessToken = router.query.access_token;
    if (accessToken) {
      document.cookie = `access_token=${accessToken};path=/;max-age=3600`;
    }
  }, [router])
  return <div>123</div>
}



export default Index;