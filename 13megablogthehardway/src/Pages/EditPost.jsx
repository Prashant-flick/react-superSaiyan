import React,{useState} from 'react'
import {Container, PostForm} from '../Components/index'
import appwriteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    console.log("hello");
    const [post, setPost] = useState(null)
    const navigate = useNavigate()
    const {slug} = useParams()
    console.log(post);
    React.useEffect(() => {
        if(slug){
            // console.log(slug);
            appwriteService.getPost(slug)
            .then((post) => {
                if(post){
                    setPost(post)
                }
            })
            .catch((error) => console.log(error))
        }else{
            navigate('/')
        }
    },[slug])

    // post.status = "inactive";

  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost