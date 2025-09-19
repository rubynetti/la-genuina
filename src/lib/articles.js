import fs from 'fs';
import path from 'path';

/**
 * Parse frontmatter from markdown content
 */
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n(.*?)\n---\s*\n(.*)/s;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { metadata: {}, content };
  }

  const frontmatter = match[1];
  const markdownContent = match[2];

  const metadata = {};
  frontmatter.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim().replace(/^["']|["']$/g, '');
      metadata[key] = value;
    }
  });

  return { metadata, content: markdownContent };
}

/**
 * Get all articles from the content directory
 */
export async function getArticles() {
  try {
    // Use process.cwd() to get the root directory
    const articlesDir = path.join(process.cwd(), 'src/content/articles');

    if (!fs.existsSync(articlesDir)) {
      return [];
    }

    const files = fs.readdirSync(articlesDir).filter(file => file.endsWith('.md'));

    const articles = files.map(file => {
      const filePath = path.join(articlesDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const { metadata, content: markdownContent } = parseFrontmatter(content);

      return {
        slug: metadata.slug || file.replace('.md', ''),
        title: metadata.title || 'Untitled',
        author: metadata.author || 'Unknown',
        date: metadata.date || new Date().toISOString().split('T')[0],
        corner: metadata.corner || 'News',
        image: metadata.image || '/default-image.jpg',
        excerpt: metadata.excerpt || '',
        content: markdownContent
      };
    });

    // Sort by date (most recent first)
    return articles.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    return [];
  }
}

/**
 * Get a single article by slug
 */
export async function getArticleBySlug(slug) {
  const articles = await getArticles();
  return articles.find(article => article.slug === slug);
}
