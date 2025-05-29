// src/components/ApiPosts.js
import React, { useState, useEffect } from 'react';
import '../styles/_api-posts.sass';

const API_URL = 'https://www.crmcarecloud.com/wp-json/wp/v2';

const ApiPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const postsPerPage = 10;

    // Načtení příspěvků z API
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(
                    `${API_URL}/posts?per_page=${postsPerPage}&page=${currentPage}`
                );

                if (!response.ok) throw new Error('Nepodařilo se načíst články');

                // Získání celkového počtu stránek z hlaviček
                const total = response.headers.get('X-WP-TotalPages');
                setTotalPages(parseInt(total) || 1);

                const data = await response.json();
                setPosts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [currentPage]);

    // Formátování data
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('cs-CZ');
    };

    // Generování tlačítek pro stránkování
    const renderPagination = () => {
        const pages = [];
        const maxVisiblePages = 5;
        let startPage, endPage;

        if (totalPages <= maxVisiblePages) {
            startPage = 1;
            endPage = totalPages;
        } else {
            const half = Math.floor(maxVisiblePages / 2);
            if (currentPage <= half) {
                startPage = 1;
                endPage = maxVisiblePages;
            } else if (currentPage + half >= totalPages) {
                startPage = totalPages - maxVisiblePages + 1;
                endPage = totalPages;
            } else {
                startPage = currentPage - half;
                endPage = currentPage + half;
            }
        }

        // Tlačítko "Předchozí"
        pages.push(
            <button
                key="prev"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="pagination-button"
            >
                &lt;
            </button>
        );

        // Číselná tlačítka
        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    disabled={i === currentPage}
                    className={`pagination-button ${i === currentPage ? 'active' : ''}`}
                >
                    {i}
                </button>
            );
        }

        // Tlačítko "Další"
        pages.push(
            <button
                key="next"
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="pagination-button"
            >
                &gt;
            </button>
        );

        return pages;
    };

    if (loading) return <div className="loading">Načítání článků...</div>;
    if (error) return <div className="error">Chyba: {error}</div>;

    return (
        <div className="posts-container">
            <h1>Články</h1>

            <ul className="posts-list">
                {posts.map(post => (
                    <li key={post.id} className="post-item">
                        <div className="post-content">
                            <h2>
                                <a
                                    href="https://www.crmcarecloud.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {post.title?.rendered ? (
                                        <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                    ) : (
                                        post.title
                                    )}
                                </a>
                            </h2>

                            <div className="post-meta">
                                {post.date && (
                                    <span className="post-date">{formatDate(post.date)}</span>
                                )}
                                {post._embedded?.author?.[0]?.name && (
                                    <span className="post-author">, {post._embedded.author[0].name}</span>
                                )}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="pagination">
                {renderPagination()}
            </div>
        </div>
    );
};

export default ApiPosts;