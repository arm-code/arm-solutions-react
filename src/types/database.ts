export interface LogEntry {
  id: string;
  created_at: string;
  title: string;
  slug: string;
  content: string;
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Database';
  tags: string[];
}
