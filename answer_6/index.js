
import { useEffect, useState } from "react";

const HomePage = ({ variant }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (variant === "A") {
      setContent("This is variant A");
    } else if (variant === "B") {
      setContent("This is variant B");
    }
  }, [variant]);

  return (
    <div>
      <h1>Welcome to A/B Testing</h1>
      <p>{content}</p>
    </div>
  );
};

export async function getServerSideProps({ req }) {
  const cookies = req.headers.cookie || "";
  const abTestCookie = cookies
    .split("; ")
    .find((row) => row.startsWith("ab_test_variant="));
  const variant = abTestCookie ? abTestCookie.split("=")[1] : null;

  return {
    props: {
      variant: variant || "A", 
    },
  };
}

export default HomePage;
