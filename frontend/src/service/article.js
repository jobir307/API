import axios from "axios";

const ArticleService = {
    articles() {
        return axios.get('articles')
    },
    articleDetails(id) {
        return axios.get(`article-details/${id}`)
    }
}

export default ArticleService