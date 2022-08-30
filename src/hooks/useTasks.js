import { useMemo } from 'react';

export const useSortedTasks = (todos, sort) => {
   const sortedTasks = useMemo(() => {
      if (sort === 'all' || sort.length === 0) {
         return todos;
      } else {
         return [...todos].filter((item) => item.complete === sort);
      }
   }, [sort, todos]);
   // console.log(sortedTasks);
   return sortedTasks;
};

export const useTasks = (todos, sort, query) => {
   const sortedTasks = useSortedTasks(todos, sort);
   const sortedAndSearchedTasks = useMemo(() => {
      return sortedTasks.filter((task) =>
         task.value.toLowerCase().includes(query.toLowerCase())
      );
   }, [query, sortedTasks]);
   // console.log(sortedAndSearchedTasks);
   return sortedAndSearchedTasks;
};
