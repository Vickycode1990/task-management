export enum TaskStatus {
    TODO = "todo",
    IN_PROGRESS = "in_progress",
    COMPLETED = "completed",
    ARCHIVED = "archived"
}

export enum TaskPriority {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high",
    URGENT = "urgent"
}

export interface User {
    id: number;
    username: string;
    email: string;
    is_active: boolean;
    created_at: string;
}

export interface Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    due_date: string;
    created_at: string;
    updated_at: string;
    owner_id: number;
    assignee_id?: number;
    owner: User;
    assignee?: User;
    comments: Comment[];
}

export interface Comment {
    id: number;
    content: string;
    created_at: string;
    task_id: number;
    user_id: number;
    user: User;
} 