import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing | Prem Palhade",
};

interface BlogMetadata {
  title: string;
  date: string;
  slug: string;
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
      date: matterResult.data.date,
      slug: filename.replace(".md", ""),
    };
  });
}

const cleanDate = (dateString: string) =>
  new Date(dateString.replace(/(\d+)(st|nd|rd|th)/, "$1"));

export default function WritingPage() {
  const blogs = getBlogsMetadata().sort(
    (a, b) => cleanDate(b.date).getTime() - cleanDate(a.date).getTime()
  );

  return (
    <ul className="divide-y divide-neutral-200">
      {blogs.map((blog) => (
        <li key={blog.slug} className="py-4">
          <Link
            href={`/writing/${blog.slug}`}
            className="flex justify-between items-baseline transition-colors hover:text-black"
          >
            <p className="text-sm font-medium">{blog.title}</p>
            <span className="text-xs text-neutral-400">
              {blog.date}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
