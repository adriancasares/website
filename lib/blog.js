import fs from 'fs'
import matter from 'gray-matter'

const postsDirectory = './content/posts/';

export const getBlogPostFiles = () => {
    return fs.readdirSync(postsDirectory).map(post => {
        return post.substr(0, post.lastIndexOf('.'))
    })
}

export const getBlogPosts = () => {
    return getBlogPostFiles().map(post => {
        const content = fs.readFileSync(postsDirectory + post + '.md', 'utf-8')
        const front = matter(content)
        return {
            "id": post,
            "name": front.data.name,
            "date": front.data.date,
            "thumbnail": front.data.thumbnail,
            "content": front.content
        }
    })
}