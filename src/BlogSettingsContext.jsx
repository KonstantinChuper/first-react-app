// 1. Создать контекст с помощью createContext
import { createContext, useContext } from "react";

const BlogSettingsContext = createContext();
export default BlogSettingsContext;

// Создать свой хук useBlogSettingsContext
export const useBlogSettingsContext = () => {
  const context = useContext(BlogSettingsContext);
  return context;
};
