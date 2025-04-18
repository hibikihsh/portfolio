export interface TagCategory {
  name: string;
  tags: string[];
}

export const tagCategories: TagCategory[] = [
  {
    name: "フロントエンド",
    tags: ["react", "vue", "astro", "tailwindcss", "typescript"],
  },
  {
    name: "バックエンド",
    tags: ["node", "python", "go", "postgresql", "nodejs", "openai"],
  },
  {
    name: "インフラ",
    tags: ["aws", "docker", "kubernetes"],
  },
  {
    name: "その他",
    tags: ["blog", "tutorial", "tips", "markdown"],
  },
];
