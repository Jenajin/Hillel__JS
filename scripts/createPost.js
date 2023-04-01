export const createPost = (post) => {
    const postContainer = document.querySelector('.post')
    const postDescription = document.querySelector('.post-description')
    postDescription.innerHTML = `` 

    const postTitle = document.createElement('h2')
    postTitle.classList.add('post-title')
    postTitle.innerHTML = `${post.title}`
    postDescription.appendChild(postTitle)

    const btn = document.createElement('button')
    btn.classList.add('post-btn__more')
    btn.innerHTML = `Показати увесь пост`
    postContainer.appendChild(btn)

    function createBodyPost() {
        const bodyPost = document.createElement('p')
        bodyPost.classList.add('post-body')
        bodyPost.innerHTML = `<p>${post.body}</p>`
        postDescription.appendChild(bodyPost)
        postContainer.removeChild(btn)
    }

    btn.addEventListener('click', createBodyPost)
}