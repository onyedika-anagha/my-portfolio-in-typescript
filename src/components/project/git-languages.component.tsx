import { Badge } from "flowbite-react";
import { useEffect, useState } from "react";

const GitLanguages = ({ url }: { url: string }) => {
  const [tags, setTags] = useState<string[] | null>(null);
  const getTags = async (url: string) => {
    try {
      const result = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }),
        res = await result.json();
      if (res != null) {
        const result = Object.entries(res).map((entry) => entry[0]);
        // console.log(result);

        setTags(result);
      }
    } catch (error) {
      console.log(error as Error);
    }
  };
  useEffect(() => {
    getTags(url);
  }, [url]);
  return (
    <div className="flex flex-wrap">
      {tags != null ? (
        <>
          {tags.map((item, i) => (
            <Badge
              key={i}
              color="purple"
              className="m-1">
              {item}
            </Badge>
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default GitLanguages;
