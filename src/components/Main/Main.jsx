import Card from "../posts/Card";
import { posts as initialPosts } from "../../posts";
import style from "./Main.module.css";
import { useState } from "react";

export default function Main() {
  console.log("Render Main");

  const [posts, setPosts] = useState(initialPosts);
  const publishedPost = posts.filter((post) => post.published === true);
  const tags = [];

  posts.forEach((post) => {
    const postTags = post.tags;
    postTags.forEach((tag) => !tags.includes(tag) && tags.push(tag));
    // console.log(`tags is ${tags}`);
  });

  const [postName, setPostName] = useState("");

  function addPost(e) {
    e.preventDefault();
    const newPostName = postName.trim();
    if (newPostName === "") return;

    console.log("Aggiungo post!");

    const newPost = {
      id: Date.now(),
      title: newPostName,
      image: undefined,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
      tags: [],
      published: true,
    };

    setPosts([...posts, newPost]);
    setPostName("");
  }

  return (
    <main className="page-main">
      <section>
        <div className="container">
          <form onSubmit={addPost} action=" ">
            <input
              type="text"
              onChange={(e) => setPostName(e.target.value)}
              placeholder="Inserisci il titolo del nuovo post"
              value={postName}
            />
            <input type="submit" value="Aggiungi un nuovo post" />
          </form>
        </div>

        <div className="container">
          <div className="row">
            {publishedPost.map((post) => (
              <div key={post.id} className="col-6">
                <Card
                  id={post.id}
                  title={post.title}
                  description={post.content}
                  image={post.image}
                  tags={post.tags}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
