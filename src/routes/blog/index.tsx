import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageBanner } from "@/components/layout/PageBanner";
import { BlogSidebar } from "@/components/BlogSidebar";
import { posts } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({ meta: [{ title: "Blog – Jettyland Investments" }] }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <PageBanner title="Blog" />
      <section className="container-page grid gap-12 py-16 lg:grid-cols-[1fr_20rem]">
        <div className="space-y-10">
          {posts.map((post) => (
            <article key={post.slug} className="overflow-hidden border border-line bg-paper">
              <Link to="/blog/$slug" params={{ slug: post.slug }}>
                <img src={post.image} alt="" className="h-72 w-full object-cover" />
              </Link>
              <div className="p-6 md:p-8">
                <p className="text-sm text-muted">
                  by {post.author} · {post.date}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-ink">
                  <Link to="/blog/$slug" params={{ slug: post.slug }} className="hover:text-primary">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3">{post.excerpt}…</p>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="mt-5 inline-flex items-center gap-1 font-display text-sm font-bold text-primary"
                >
                  READ MORE
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <BlogSidebar />
      </section>
    </>
  );
}
