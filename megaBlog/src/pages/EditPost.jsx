import { Container } from "../components/container/Container";
import React from "react";
import PostForm from "../components/postForm/PostForm";
import { post as postService } from "../appwrite/post";


function EditPost() {
  const [post, setPosts] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      postService.getPostById(id).then((post) => {
        if (post) {
          setPosts(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [id, navigate]);
  return post ? (
    <Container>
      <PostForm post={post} />
    </Container>
  ) : null;
}

export default EditPost;
