import { useState } from 'react'

const Articles = ({ articles }) => {
    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Upvotes</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map((article, index) => {
                        return (
                            <tr data-testid="article" key={index}>
                                <td data-testid="article-title">{article.title}</td>
                                <td data-testid="article-upvotes">{article.upVoted}</td>
                                <td data-testid="article-date">{article.date.toString()}</td>
                            </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Articles
