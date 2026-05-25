import matter from 'gray-matter';
import { marked } from 'marked';

export function parseMarkdownFiles(files) {
  return Object.entries(files).map(([path, raw]) => {
    const slug = path.split('/').pop().replace(/\.md$/, '');
    const { data, content } = matter(raw);
    const trimmed = content.trim();
    return {
      slug,
      ...data,
      body: trimmed ? marked.parse(trimmed) : '',
    };
  });
}
