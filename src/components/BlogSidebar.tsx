import { Link } from "@tanstack/react-router";
import { posts } from "@/lib/blog";

export function BlogSidebar() {
  return (
    <aside className="space-y-8">
      <div className="border border-line p-6">
        <h3 className="font-display text-lg font-bold text-ink">Categories</h3>
        <p className="mt-4 flex items-center justify-between text-sm">
          <span>Property</span>
          <span className="text-muted">({posts.length})</span>
        </p>
      </div>
      <div className="border border-line p-6">
        <h3 className="font-display text-lg font-bold text-ink">Recent Posts</h3>
        <ul className="mt-4 space-y-4">
          {posts.map((post) => (
            <li key={post.slug} className="flex gap-3">
              <img src={post.image} alt="" className="size-16 shrink-0 object-cover" />
              <div>
                <p className="text-xs text-muted">{post.date}</p>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="font-display text-sm font-semibold text-ink hover:text-primary"
                >
                  {post.title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="border border-line p-6">
        <h3 className="font-display text-lg font-bold text-ink">Tags</h3>
        <span className="mt-4 inline-block bg-fog px-3 py-1 text-sm">Property</span>
      </div>
    </aside>
  );
}
