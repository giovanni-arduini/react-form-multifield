import Card from "../posts/Card";
import { posts as initialPosts } from "../../posts";
import style from "./Main.module.css";
import { useState } from "react";

export default function Main() {
  // console.log("Render Main");

  const [posts, setPosts] = useState(initialPosts);
  const publishedPost = posts.filter((post) => post.published === true);
  const tags = [];

  posts.forEach((post) => {
    const postTags = post.tags;
    postTags.forEach((tag) => !tags.includes(tag) && tags.push(tag));
    // console.log(`tags is ${tags}`);
  });

  const [postName, setPostName] = useState("");

  const initialFormData = {
    title: "",
    image: "",
    content: "",
    tags: [],
    published: true,
  };

  const [formData, setFormData] = useState(initialFormData);

  function handleFormData(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormData((formData) => ({
      ...formData,
      [e.target.name]: value,
    }));
    console.log("change");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setPosts((newPost) => [...posts, { id: Date.now(), ...formData }]);
    setFormData(initialFormData);
    console.log(formData);
  }

  function addPost(e) {
    e.preventDefault();
    const newPostName = formData.title.trim();
    if (newPostName === "") return;

    const { title, image, content, tags, published } = formData;
    console.log("Aggiungo post!");

    const newPost = {
      id: Date.now(),
      title: newPostName,
      image: image,
      content: content,
      tags: [tags],
      published: published,
    };

    setPosts([...posts, newPost]);
    setPostName("");
  }

  return (
    <main className="page-main">
      <section>
        <div className="container">
          <form onSubmit={handleSubmit} action="">
            <input
              type="text"
              name="title"
              onChange={handleFormData}
              placeholder="Inserisci il titolo del nuovo post"
              value={formData.title}
            />
            <input
              type="text"
              name="image"
              onChange={handleFormData}
              value={formData.image}
            />
            <ul className="tagList">
              <li>
                <input
                  type="checkbox"
                  onChange={handleFormData}
                  name="tags"
                  checked={formData.tags}
                />
              </li>
              <li>
                <input
                  type="checkbox"
                  onChange={handleFormData}
                  name="tags"
                  checked={formData.tags}
                />
              </li>
              <li>
                <input
                  type="checkbox"
                  onChange={handleFormData}
                  name="tags"
                  checked={formData.tags}
                />
              </li>
              <li>
                <input
                  type="checkbox"
                  onChange={handleFormData}
                  name="tags"
                  checked={formData.tags}
                />
              </li>
            </ul>

            <input
              type="text"
              name="content"
              onChange={handleFormData}
              value={formData.content}
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
