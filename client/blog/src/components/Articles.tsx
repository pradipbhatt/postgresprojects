import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Articles = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [authorId, setAuthorId] = useState(1); // Default authorId as 1
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState<any[]>([]); // State to store fetched articles
  const navigate = useNavigate();

  // Fetch all articles when the component mounts
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/articles/');
        if (response.ok) {
          const data = await response.json();
          setArticles(data.articles); // Store the fetched articles in the state
          console.log('Fetched articles:', data.articles); // Log the fetched articles
        } else {
          console.error('Failed to fetch articles, status:', response.status);
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles(); // Call the function to fetch articles
  }, []); // Empty dependency array means this effect runs only once, when the component mounts

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Prepare the article data to be posted
    const articleData = {
      title,
      content,
      category,
      authorId,
    };

    console.log('Submitting article with data:', articleData);

    try {
      const response = await fetch('http://localhost:8080/api/articles/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(articleData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Article created successfully:', data);

        // Article created successfully, navigate to the articles page to view them
        navigate('/articles');
      } else {
        console.error('Failed to create the article, status:', response.status);
        alert('Failed to create the article');
      }
    } catch (error) {
      console.error('An error occurred while posting the article:', error);
      alert('An error occurred while posting the article');
    } finally {
      setIsLoading(false);
      console.log('Article submission process completed');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h2 className="text-2xl font-semibold text-center text-primary mb-4">Create Article</h2>
      
      <form onSubmit={handleSubmit} className="bg-[#e5ecfc] p-6 rounded-md shadow-md">
        <div className="mb-4">
          <label htmlFor="title" className="block text-[#1e1d22] font-medium mb-2">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-[#1e1d22] font-medium mb-2">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={4}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-[#1e1d22] font-medium mb-2">Category</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="authorId" className="block text-[#1e1d22] font-medium mb-2">Author ID</label>
          <input
            type="number"
            id="authorId"
            value={authorId}
            onChange={(e) => setAuthorId(Number(e.target.value))}
            required
            min={1}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark disabled:bg-gray-400"
        >
          {isLoading ? 'Submitting...' : 'Submit Article'}
        </button>
      </form>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-center text-primary mb-4">All Articles</h2>
        {articles.length > 0 ? (
          <div className="space-y-4">
            {articles.map((article) => (
              <div key={article.id} className="bg-white p-4 rounded-md shadow-md">
                <h3 className="text-xl font-semibold text-[#1e1d22]">{article.title}</h3>
                <p className="text-[#1e1d22]">{article.content}</p>
                <p className="text-[#1e1d22]"><strong>Category:</strong> {article.category}</p>
                <p className="text-[#1e1d22]"><strong>Author:</strong> {article.User.name} ({article.User.email})</p>
                <p className="text-[#1e1d22]"><strong>Author ID:</strong> {article.authorId}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-[#1e1d22]">No articles available</p>
        )}
      </div>
    </div>
  );
};

export default Articles;
