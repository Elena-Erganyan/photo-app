import React from "react";
import "./CommentsForm.scss";
import { useForm } from "react-hook-form";



const CommentsForm = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {

        let commentId;

        if (props.comments.length) {
            let lastComment = props.comments.length - 1;
            let lastCommentId = props.comments[lastComment]["id"];
            commentId = ++lastCommentId;
        } else {
            commentId = 1;
        }
        props.postComment(props.photoId, props.comments, data.name, data.comment, commentId, Date.now());
        e.target.reset();
    };

    return <form onSubmit={handleSubmit(onSubmit)} className="commentsForm">
        <input className="commentsForm__name" name="name" placeholder="Your name" {...register("name", { required: true })} />
        {errors.name && <div className="error">The name is required</div>}
        <input className="commentsForm__comment" name="comment" placeholder="Your comment" {...register("comment", { required: true })} />
        {errors.comment && <div className="error">The comment is required</div>}
        <button className="commentsForm__btn btn" type="submit">Leave your comment</button>
    </form>
};

export default CommentsForm;