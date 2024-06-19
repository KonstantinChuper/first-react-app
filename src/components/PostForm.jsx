import React, { useState } from "react";
import styles from "../styles/PostForm.module.css";
import profileIcon from "../assets/profileIcon.svg";
import { useForm } from "react-hook-form";
import { API_URL } from "../utils/utils";
import axios from "axios";

export default function PostForm({ addNewPost }) {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function addPost(data) {
    try {
      const response = await axios.post(API_URL, {
        title: data.title,
        text: data.text,
      });
      if (response.status === 201) {
        setSuccess("Ваш пост был создан");
        setError(null);
        addNewPost(response.data);
        setTimeout(() => {
          setSuccess(null);
        }, 5000);
      } else {
        console.error(response);
        setError("Что-то пошло не так, попробуйте еще раз");
      }
    } catch (error) {
      setError("Что-то пошло не так, попробуйте еще раз");
      console.error(error);
    } finally {
      reset();
    }
  }

  return (
    <div className={styles.postList}>
      <h2 className={styles.header}>Написать пост</h2>
      <form className={styles.form} onSubmit={handleSubmit(addPost)}>
        <img src={profileIcon} alt="Profile" className={styles.logo} />
        <div className={styles.formContainer}>
          <div className={styles.formGroup}>
            <div className={styles.formInput}>
              <label htmlFor="postTitle">Заголовок</label>
              <input
                type="text"
                id="postTitle"
                placeholder="Заголовок"
                {...register("title", {
                  required: "Поле обязательно",
                })}
              />
              {errors.title && <p className={styles.postFormError}>{errors.title.message}</p>}
            </div>
            <div className={styles.formInput}>
              <label htmlFor="postText">Текст поста</label>
              <textarea
                type="text"
                id="postText"
                placeholder="Введите текст..."
                {...register("text", {
                  required: "Поле обязательно",
                  minLength: {
                    value: 10,
                    message: "Нужно как минимум 10 символов",
                  },
                })}
              />
              {errors.text && <p className={styles.postFormError}>{errors.text.message}</p>}
            </div>
          </div>
          {success && <p className={styles.postFormSuccess}>{success}</p>}
          {error && <p className={styles.postFormError}>{error}</p>}
          <button className={styles.postFormButton}>Публикация</button>
        </div>
      </form>
    </div>
  );
}
