export interface Task {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  category?: string;
  dueDate?: string;
  priority?: string;
}
