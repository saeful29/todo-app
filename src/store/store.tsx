import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
type State = {
  todos: { id: string; title: string; isCompleted: boolean }[];
};

type Action = {
  addTodos: (value: string) => void;
  removeTodo: (id: string) => void;
  updateTodo: (id: string, value: string) => void;
};

export const useStore = create<State & Action>()(
  devtools(
    persist(
      (set) => ({
        todos: [],
        addTodos: (value) =>
          set((state: any) => ({
            todos: [
              ...state.todos,
              {
                id: uuidv4(),
                title: value,
                isCompleted: false,
              },
            ],
          })),
        removeTodo: (id) =>
          set((state) => ({
            todos: state.todos.filter((item) => item.id !== id),
          })),
        updateTodo: (id, value) =>
          set((state) => ({
            todos: state.todos.map((item) =>
              item.id === id ? { ...item, title: value } : item
            ),
          })),
      }),
      {
        name: "todos",
      }
    )
  )
);
