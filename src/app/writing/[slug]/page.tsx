import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Metadata } from "next";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogMetadata {
  title: string;
  subtitle: string;
  date: string;
  slug: string;
}

interface BlogContent {
  title: string;
  date: string;
  content: string;
  [key: string]: unknown;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

function getBlogsMetadata(): BlogMetadata[] {
  const blogsDirectory = path.join(process.cwd(), "src/content/blogs");
  const filenames = fs.readdirSync(blogsDirectory);
  const markdownBlogs = filenames.filter((file) => file.endsWith(".md"));

  return markdownBlogs.map((filename) => {
    const filePath = path.join(blogsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      date: matterResult.data.date,
      slug: filename.replace(".md", ""),
    };
  });
}

function timeAgo(dateString: string): string {
  const cleanDateString = dateString.replace(/(\d+)(st|nd|rd|th)/, "$1");
  const date = new Date(cleanDateString);
  const now = new Date();

  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays < 30) {
    return `${diffInDays}d ago`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths}mo ago`;
  }

  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears}y ago`;
}

function getBlogContent(slug: string): BlogContent | null {
  const filePath = `src/content/blogs/${slug}.md`;

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    ...data,
    title: data.title,
    date: data.date,
    content,
  };
}

export async function generateStaticParams() {
  const blogs = getBlogsMetadata();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogContent(slug);
  const title = post?.title ? `${post.title}` : "Writing";

  return {
    title: `${title} | Prem Palhade`,
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogContent(slug);

  if (!post) {
    notFound();
  }

  const timeAgoString = timeAgo(post.date);

  const formatting = {
    overrides: {
      h1: {
        props: {
          className: "blog-h1",
        },
      },
      h2: {
        props: {
          className: "blog-h2",
        },
      },
      p: {
        props: {
          className: "blog-text",
        },
      },
      a: {
        component: Link,
        props: {
          className: "blog-a",
        },
      },
      img: {
        component: ({ src, alt }: { src?: string; alt?: string }) => {
          if (!src) return null;
          return (
            <div className="my-8 flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt || ""}
                className="h-auto w-full max-w-md object-contain"
              />
            </div>
          );
        },
      },
    },
  };

  return (
    <article className="space-y-6">
      <Link href="/writing" className="text-xs text-neutral-400">
        ← Back to Writing
      </Link>
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold leading-snug">{post.title}</h1>
        <p className="text-sm text-neutral-500">
          {post.date} · {timeAgoString}
        </p>
      </div>
      <Markdown options={formatting}>{post.content}</Markdown>
    </article>
  );
}
