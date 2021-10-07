import axios  from "axios"


export const getNewsList = () => {
    const url = "https://newsapi.org/v2/everything?q=tesla&from=2021-09-07&sortBy=publishedAt&apiKey=7c20644e49d5418c88e417a34f55636a"
    const response = axios({
      url: url,
      method: "get",
    })
    return response
  }
