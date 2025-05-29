// src/pages/ApiPostsPage.jsx
import React, { useState, useEffect } from 'react';
import ApiPosts from '../components/ApiPosts';

const ApiPostsPage = ({ apiUrl, title }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error(`Nepodařilo se načíst data (HTTP ${response.status})`);
                }
                const data = await response.json();
                setPosts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [apiUrl]);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('cs-CZ', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    return (
        <div className="api-posts-page">
            <ApiPosts
                posts={posts}
                loading={loading}
                error={error}
                title={title}
                formatDate={formatDate}
            />
        </div>
    );
};

export default ApiPostsPage;