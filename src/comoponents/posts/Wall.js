import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {fetchPosts} from "../../actions";

const Wall = ({posts, fetchPosts}) => {
    useEffect(()=>{
        fetchPosts();
    },[fetchPosts]);

    console.log(posts);

    return (
        <div style={{minHeight: "89vh"}}>
            So much going around 😎
        </div>
    );
}

const mapStateToProps = state => {
  return {posts: state.posts.all};
}

export default connect(mapStateToProps, {fetchPosts})(Wall);