import React from 'react';

const Home10 = () => {
  const posts = [
    {
      tag: 'Workplace',
      title: 'Services That Printing At You Is Important',
      image:
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
      author: 'Admin',
      date: 'Sep 30, 2024'
    },
    {
      tag: 'Coding',
      title: 'A Checklist To Improve Your Daily Routine',
      image:
        'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=900&q=80',
      author: 'Admin',
      date: 'Sep 30, 2024'
    },
    {
      tag: 'Technology',
      title: 'That Will Help You Get 1% Better Every Day',
      image:
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
      author: 'Admin',
      date: 'Sep 30, 2024'
    }
  ];

  return (
    <section className="home10-section">
      <div className="home10-container">
        <div className="home10-header">
          <span className="home10-pill">Our Blog <span className="home10-pill-emoji">🔥</span></span>
          <h2 className="home10-title">Recent Articles And Latest Blog</h2>
        </div>

        <div className="home10-grid">
          {posts.map((post, index) => (
            <article className="home10-card" key={index}>
              <div className="home10-image-wrap">
                <img src={post.image} alt={post.title} />
                <span className="home10-tag">
                  <span className="home10-tag-dot" />
                  {post.tag}
                </span>
              </div>
              <div className="home10-card-body">
                <h3>{post.title}</h3>
                <div className="home10-divider" />
                <div className="home10-meta">
                  <span className="home10-meta-item">
                    <span className="home10-meta-dot" /> By {post.author}
                  </span>
                  <span className="home10-meta-sep" />
                  <span className="home10-meta-item">
                    <span className="home10-meta-cal" /> {post.date}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home10;
