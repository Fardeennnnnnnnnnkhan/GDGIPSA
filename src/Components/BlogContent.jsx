import React  ,{useState} from 'react'
import { motion } from "framer-motion";
import { useTheme } from '../Context/ThemeContext';
import { Link } from 'react-router-dom';
const BlogContent = () => {

  const blogs = [
    {
      id: 1,
      title: "Solution Challenge",
      author: "Trisha Mishra",
      date: "18 Jan 2025",
      description:
        "The Solution Challenge gives you a great chance to make that idea come truehis year’s theme isn’t just another contest — it’s asking innovators, problem-solvers, and dreamers to step up.Imagine making an app that has a big impact on healthcare in areas with little access, or building a platform to fight climate change head-on.These aren’t just wild ideas; they’re the kind of projects that can make a difference, which the Solution Challenge wants to see.",
      tags: ["AI For Better Tomorrow"],
      source: "https://medium.com/@gdgipsa/understanding-the-theme-aa4b52299ad8",
      image:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/1*eiC7078DdAVMYaQam39sDg.png",
      relatedImages: [
        "https://images.unsplash.com/photo-1517817748499-49ec8b66f81c?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504151932400-72d4384f04b3?q=80&w=2070&auto=format&fit=crop",
      ],
    },
    {
      id: 2,
      title: "Join the GDGOC Solutions Challenge 2025: Innovate for a Better Tomorrow",
      author: "Chhavi Sharma",
      date: "15 jan 2025",
      description:
        "The GDGOC Solutions Challenge 2025 is here, offering student developers across India a platform to combine creativity and technology to solve real-world problems. Organized by Google Developer Groups On Campus (GDGOC) in collaboration with Hack2Skill, this challenge is your chance to address pressing global issues like education, healthcare, sustainability, and more using cutting-edge Google Developer technologies.",
      tags: ["Productivity", "Tools"],
      source: "https://medium.com/@gdgipsa/join-the-gdgoc-solutions-challenge-2025-innovate-for-a-better-tomorrow-cd4cde30a9de",
      image:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/1*uDv47A6Wdrh7-T9iXyC8ew.png",
      relatedImages: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1573164574235-9281b2e8934e?q=80&w=2070&auto=format&fit=crop",
      ],
    },
    {id:3,
      title: "2025, the year of AI Agents!",
      description:
        "I’m sure we all remember the release of ChatGPT and how it took the world by storm. Since that day life has been made easier for a whole bunch of people, from writing essays to finishing code. It gave us a glimpse at imagining how a futuristic world should be like.Then came Devin, the fear-inducing maniac for developers who were sure it would take their jobs. All companies rushing to try it out and developers getting anxiety attacks (heck even I was one of them!).Luckily, Devin turned out to be a flop, and returned the life and hope back into our bodies. ",
      tag: "Software Engineering",
        link: "https://medium.com/@chics-den/2025-the-year-of-ai-agents-7063ca58e44f",
      author: "Abhivyakt Bhati",
      authorImg: "https://4kfaces.com/images/male5.png",
      source: "https://medium.com/@chics-den",
      date: "13 Jan 2022",
      image: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*U92xafGniV1vXwo7.png",
      relatedImages: "https://images.unsplash.com/photo-1559757171-f6ecf56f05d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    
    
  ];
  
  const [visibleBlogs, setVisibleBlogs] = useState(4);

  const loadMoreBlogs = () => {
    setVisibleBlogs(visibleBlogs + 2);
  };
  const { theme, toggleTheme } = useTheme(); // Hook to get theme and toggle function

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} min-h-screen`}>
      <main className="w-full px-6 py-12">
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Recent Blog Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
               {
                id: 1,
                title: "Solution Challenge",
                author: "Trisha Mishra",
                date: "18 Jan 2025",
                description:
                  "The Solution Challenge gives you a great chance to make that idea come truehis year’s theme isn’t just another contest — it’s asking innovators, problem-solvers, and dreamers to step up.Imagine making an app that has a big impact on healthcare in areas with little access, or building a platform to fight climate change head-on.These aren’t just wild ideas; they’re the kind of projects that can make a difference, which the Solution Challenge wants to see.",
                tags: ["AI For Better Tomorrow"],
                source: "https://medium.com/@gdgipsa/understanding-the-theme-aa4b52299ad8",
                authorImg: "https://4kfaces.com/images/male5.png",

                img:
                  "https://miro.medium.com/v2/resize:fit:828/format:webp/1*eiC7078DdAVMYaQam39sDg.png",
                relatedImages: [
                  "https://images.unsplash.com/photo-1517817748499-49ec8b66f81c?q=80&w=2070&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1504151932400-72d4384f04b3?q=80&w=2070&auto=format&fit=crop",
                ],
              },
              {
                title: "2025, the year of AI Agents!",
                description:
                  "I’m sure we all remember the release of ChatGPT and how it took the world by storm. Since that day life has been made easier for a whole bunch of people, from writing essays to finishing code. It gave us a glimpse at imagining how a futuristic world should be like.Then came Devin, the fear-inducing maniac for developers who were sure it would take their jobs. All companies rushing to try it out and developers getting anxiety attacks (heck even I was one of them!).Luckily, Devin turned out to be a flop, and returned the life and hope back into our bodies. ",
                tag: "Software Engineering",
                  link: "https://medium.com/@chics-den/2025-the-year-of-ai-agents-7063ca58e44f",
                author: "Abhivyakt Bhati",
                authorImg: "https://4kfaces.com/images/male5.png",
                date: "13 Jan 2022",
                img: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*U92xafGniV1vXwo7.png",
                relatedImg: "https://images.unsplash.com/photo-1559757171-f6ecf56f05d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
              },
              {
                id: 2,
                title: "Join the GDGOC Solutions Challenge 2025: Innovate for a Better Tomorrow",
                author: "Chhavi Sharma",
                date: "15 jan 2025",
                description:
                  "The GDGOC Solutions Challenge 2025 is here, offering student developers across India a platform to combine creativity and technology to solve real-world problems. Organized by Google Developer Groups On Campus (GDGOC) in collaboration with Hack2Skill, this challenge is your chance to address pressing global issues like education, healthcare, sustainability, and more using cutting-edge Google Developer technologies.",
                tags: ["Productivity", "Tools"],
                source: "https://medium.com/@gdgipsa/join-the-gdgoc-solutions-challenge-2025-innovate-for-a-better-tomorrow-cd4cde30a9de",
                authorImg: "https://4kfaces.com/images/male5.png",

                img:
                  "https://miro.medium.com/v2/resize:fit:828/format:webp/1*uDv47A6Wdrh7-T9iXyC8ew.png",
                relatedImages: [
                  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1573164574235-9281b2e8934e?q=80&w=2070&auto=format&fit=crop",
                ],
              },
             
            ].map((post, index) => (
              <motion.div
                key={index}
                className={`border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} p-4 rounded-lg transition-shadow duration-300`}
                whileHover={{
                  scale: 1.1,
                  backdropFilter: "blur(10px)",
                  background: theme === 'dark' ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.8)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-48 object-contain rounded-md mb-4"
                />
                <span className={`text-${theme === 'dark' ? 'purple-400' : 'purple-600'} text-sm font-semibold mb-2 block`}>
                  {post.tag}
                </span>
                <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{post.title}</h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} mb-4`}>{post.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="mr-2">
                    <img
                      src={post.authorImg}
                      alt={post.author}
                      className="w-8 h-8  rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{post.author}</p>
                    <p>{post.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
  
        <section className="mb-16 px-4 sm:px-8 lg:px-16">
          <h2 className="text-4xl font-bold mb-8 text-center">
            All Blog Posts
          </h2>
          <div className="flex flex-col gap-8">
            {blogs.slice(0, visibleBlogs).map((post) => (
              <div
                key={post.id}
                className={`w-full border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300`}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-96 object-contain"
                />
                <div className="p-6">
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} mb-2`}>
                    <span className="font-medium text-gray-800">{post.author}</span> · {post.date}
                  </div>
                  <h3 className={`text-xl font-bold mb-4 hover:underline cursor-pointer ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    {post.title}
                  </h3>
                  
                  
                  <p className={`text-gray-600 mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{post.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {/* {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`bg-${theme === 'dark' ? 'purple-600' : 'purple-100'} text-${theme === 'dark' ? 'purple-100' : 'purple-600'} text-xs font-medium px-2 py-1 rounded-full`}
                      >
                        {tag}
                      </span>
                    ))} */}
                    <Link className={`bg-${theme === 'dark' ? 'purple-600' : 'purple-100'} text-${theme === 'dark' ? 'purple-100' : 'purple-600'} text-md font-large px-2 py-1 rounded-full`} to={post.source}>
                      View
                  </Link>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
          {visibleBlogs < blogs.length && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={loadMoreBlogs}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Load More
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
  
}

export default BlogContent
