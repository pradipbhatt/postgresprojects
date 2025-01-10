import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa'; // Importing the icon for "create"
import { MdClose } from 'react-icons/md'; // Close icon

const Articles = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [authorId, setAuthorId] = useState(1); // Default authorId as 1
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState<any[]>([]); // State to store fetched articles
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility
  const navigate = useNavigate();

  // Fetch all articles when the component mounts
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/articles/');
        if (response.ok) {
          const data = await response.json();
          setArticles(data.articles); // Store the fetched articles in the state
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
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 bg-gray-50">
      {/* Button to open the modal */}
      <div className="text-center mb-8">
        <button
          onClick={openModal}
          className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition duration-300 transform hover:scale-110"
        >
          <FaPlusCircle size={24} />
        </button>
        <h2 className="text-2xl font-semibold text-primary mt-4">Create Article ✨</h2>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-lg">
          <div className="bg-white p-6 rounded-2xl shadow-xl space-y-6 w-full max-w-sm">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-primary">Create Article 📝</h2>
              <button
                onClick={closeModal}
                className="text-xl text-gray-600 hover:text-primary transition duration-200"
              >
                <MdClose />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="mb-4">
                <label htmlFor="title" className="block text-lg font-medium text-[#1e1d22] mb-2">
                  Title 🏷️
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="content" className="block text-lg font-medium text-[#1e1d22] mb-2">
                  Content 📄
                </label>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="category" className="block text-lg font-medium text-[#1e1d22] mb-2">
                  Category 🗂️
                </label>
                <input
                  type="text"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="authorId" className="block text-lg font-medium text-[#1e1d22] mb-2">
                  Author ID 👤
                </label>
                <input
                  type="number"
                  id="authorId"
                  value={authorId}
                  onChange={(e) => setAuthorId(Number(e.target.value))}
                  required
                  min={1}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-white py-2 rounded-xl hover:bg-primary-dark disabled:bg-gray-400 transition duration-300 transform hover:scale-105"
              >
                {isLoading ? (
                  <span className="flex justify-center items-center">
                    <div className="w-5 h-5 border-4 border-t-transparent border-primary rounded-full animate-spin"></div>
                  </span>
                ) : (
                  'Submit Article 🚀'
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Display Articles */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-center text-primary mb-8">📚 All Articles</h2>
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-[#e5ecfc] p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105"
              >
                <h3 className="text-2xl font-semibold text-[#1e1d22] mb-3">{article.title} ✨</h3>
                <p className="text-[#1e1d22] mb-4">{article.content}</p>
                <p className="text-[#1e1d22] font-medium">
                  <strong>Category:</strong> {article.category} 📂
                </p>
                <p className="text-[#1e1d22] font-medium">
                  <strong>Author:</strong> {article.User.name} ({article.User.email}) 👤
                </p>
                <p className="text-[#1e1d22] font-medium">
                  <strong>Author ID:</strong> {article.authorId}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-[#1e1d22]">No articles available 🧐</p>
        )}
      </div>
    </div>
  );
};

export default Articles;
