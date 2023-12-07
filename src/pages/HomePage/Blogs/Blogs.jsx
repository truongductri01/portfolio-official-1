import React, { useEffect, useState } from "react";

function Blogs({ posts, setPosts }) {
  const [waiting, setWaiting] = useState(false);
  useEffect(() => {
    if (posts.length === 0) {
      getPosts();
    }
    // eslint-disable-next-line
  }, [posts]);

  const getPosts = async () => {
    setWaiting(true);
    try {
      const response = await fetch(
        "https://dev.to/api/articles?username=truongductri01&per_page=10"
      );
      const json = await response.json();
      setTimeout(() => setPosts(json), 1000);
    } catch (error) {
      console.log("error", error);
    } finally {
      setTimeout(() => setWaiting(false), 1000);
    }
  };
  return (
    <div className="flex flex-col w-full">
      {(waiting || posts.length === 0) && (
        <div className="w-full flex flex-col justify-center items-center desc text-normal">
          {waiting ? <p>Loading blogs...</p> : <p>No blogs loaded yet</p>}
          <p>
            Visit:{" "}
            <a
              className="underline text-blue-700"
              href="https://dev.to/truongductri01"
              target="_blank"
              rel="noreferrer"
            >
              Tri's Blog
            </a>{" "}
            to read more
          </p>
        </div>
      )}
      {posts.length > 0 && !waiting && (
        <div className="w-full flex flex-col desc">
          <div className="w-full flex items-center justify-between mb-5">
            <p className="text-normal text-center">
              Visit:{" "}
              <a
                className="underline text-blue-700"
                href="https://dev.to/truongductri01"
                target="_blank"
                rel="noreferrer"
              >
                Tri's Blog
              </a>{" "}
              to read more
            </p>
            <i
              class="fa fa-solid fa-rotate-right text-normal cursor-pointer"
              onClick={() => getPosts()}
            ></i>
          </div>
          {posts.map((post) => (
            <BlogPost post={post} key={post.id} />
          ))}
        </div>
      )}
    </div>
  );
}

const BlogPost = ({ post }) => {
  return (
    <div
      className="w-full mb-3 last:mb-0 border-2 border-blue-200 p-3 rounded-lg cursor-pointer hover:bg-blue-50 max-w-full"
      onClick={() => {
        window.open(post.url, "_blank");
      }}
    >
      <p className="desc text-normal mb-1 text-blue-700">{post.title}</p>
      <p className="desc text-[1rem]">
        Published: {post.readable_publish_date}
      </p>
      <div className="flex gap-2">
        {post.tag_list.map((tag, index) => (
          <p key={index}>#{tag}</p>
        ))}
      </div>
      {/* <img src={post.social_image} alt="" /> */}
    </div>
  );
};

export default Blogs;
