from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime
from .models import TaskStatus, TaskPriority

class UserBase(BaseModel):
    username: str
    email: EmailStr

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    is_active: bool
    created_at: datetime

    class Config:
        orm_mode = True

class TaskBase(BaseModel):
    title: str
    description: Optional[str] = None
    status: TaskStatus = TaskStatus.TODO
    priority: TaskPriority = TaskPriority.MEDIUM
    due_date: Optional[datetime] = None

class TaskCreate(TaskBase):
    assignee_id: Optional[int] = None

class Task(TaskBase):
    id: int
    created_at: datetime
    updated_at: datetime
    owner_id: int
    assignee_id: Optional[int] = None

    class Config:
        orm_mode = True

class CommentBase(BaseModel):
    content: str

class CommentCreate(CommentBase):
    pass

class Comment(CommentBase):
    id: int
    created_at: datetime
    task_id: int
    user_id: int

    class Config:
        orm_mode = True

class TaskWithDetails(Task):
    owner: User
    assignee: Optional[User]
    comments: List[Comment]

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None 