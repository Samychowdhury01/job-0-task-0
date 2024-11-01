// contexts/TodoContext.tsx

import { createContext, useContext, useState, ReactNode } from 'react';

interface TodoContextType {
  refreshTrigger: boolean;
  setRefreshTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: ReactNode }) => {

  const [refreshTrigger, setRefreshTrigger] = useState(true);

  return (
    <TodoContext.Provider value={{ refreshTrigger, setRefreshTrigger }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};
