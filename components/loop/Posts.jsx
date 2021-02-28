import PropTypes from "prop-types";

const LoopPosts = ({ posts, grid }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        {posts.length > 0 ? (
          <ul className={grid.reduce((a, c) => (a += c + " "), "")}>
            {posts.map((post, key) => (
              <li key={key}>
                <div className="p-4 h-full bg-white shadow-md">
                  <h3 className="text-2xl text-gray-700">
                    {post.title.rendered}
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="w-full font-large text-gray-300 justify-center text-center p-4">
            No hay artículos para mostrar.
          </p>
        )}
      </div>
    </div>
  );
};

LoopPosts.propTypes = {
  posts: PropTypes.array,
  grid: PropTypes.array,
};

LoopPosts.defaultProps = {
  posts: [],
  grid: [
    "grid",
    "grid-cols-1",
    "md:grid-cols-2",
    "lg:grid-cols-3",
    "xl:grid-cols-4",
    "gap-8",
    "place-content-stretch",
  ],
};

export default LoopPosts;
