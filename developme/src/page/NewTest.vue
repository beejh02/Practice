<template>
    <div>
    <h1>게시판</h1>
    <form class= "formclass" @submit.prevent="addPost">
        <input v-model="newPost.title" placeholder="제목" required />
        <textarea v-model="newPost.content" placeholder="내용" required></textarea>
        <button type="submit">게시글 추가</button>
    </form>
    <ul>
        <li v-for="(post, index) in posts" :key="index">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
        <button @click="deletePost(index)">삭제</button>
        </li>
    </ul>
    </div>
</template>

<script>
export default {
    data() {
    return {
        newPost: {
        title: '',
        content: '',
        },
        posts: [],
    };
    },
    methods: {
    addPost() {
        if (this.newPost.title && this.newPost.content) {
        this.posts.push({ ...this.newPost });
        this.newPost.title = '';
        this.newPost.content = '';
        }
    },
    deletePost(index) {
        this.posts.splice(index, 1);
    },
    },
};
</script>



<style scoped src="./NewTest.css"></style>