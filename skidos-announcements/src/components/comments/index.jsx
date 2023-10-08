import { useEffect, useState } from "react";
import "./index.css";

/*This is a comment component I used the api to show the comments acording to the each post and shown it below announcement content.
 When any user tried to comment he or she can do it easily. I used uploadMyComment to add my comment in the existing comment array and shown it on UI.*/

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [commentsByMe, setCommentsByMe] = useState("");

  const getDummyData = async () => {
    const getData = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    const data = await getData.json();
    setComments(data);
    return data;
  };
  useEffect(() => {
    getDummyData();
  }, []);

  const getMyCommentInput = (e) => {
    setCommentsByMe(e.target.value);
  };

  const uploadMyComment = () => {
    const newComment = { name: commentsByMe, email: "Me" };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    setCommentsByMe("");
  };


  return (
    <>
      <h3>Comments</h3>
      {comments.map((item, index) => (
        <div key={item.name + index} className="comments-text">
          {item.email}: {item.name}
        </div>
      ))}
      <div>
        <input
          type="text"
          className="comments-input"
          value={commentsByMe}
          onChange={getMyCommentInput}
        />
        <button className="send-button" onClick={uploadMyComment}>
          Send
        </button>
      </div>
    </>
  );
};
export default Comments;
