import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageBanner } from "@/components/layout/PageBanner";
import { BlogSidebar } from "@/components/BlogSidebar";
import { getPost } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.title ?? "Blog"} – Jettyland Investments` }],
  }),
  component: BlogPostPage,
});

function BlogPostPage() {
  const post = Route.useLoaderData();
  return (
    <>
      <PageBanner
        title={post.title}
        crumbs={[{ label: "Blog", href: "/blog" }, { label: "Property" }, { label: post.title }]}
      />
      <section className="container-page grid gap-12 py-16 lg:grid-cols-[1fr_20rem]">
        <article>
          <img src={post.image} alt="" className="mb-8 h-80 w-full object-cover" />
          <p className="text-sm text-muted">
            by {post.author} · {post.date} · {post.category}
          </p>
          <div className="mt-6 space-y-4">
            {post.body.map((block, i) => {
              if (block.type === "h3") {
                return (
                  <h2 key={i} className="pt-4 font-display text-2xl font-bold text-ink">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "callout") {
                return (
                  <p key={i} className="border-l-4 border-primary bg-primary-soft px-4 py-3 text-sm">
                    <strong className="text-ink">{block.label}:</strong> {block.text}
                  </p>
                );
              }
              return <p key={i}>{block.text}</p>;
            })}
          </div>
        </article>
        <BlogSidebar />
      </section>
    </>
  );
}
