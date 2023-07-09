type RequireOnly<T,P extends keyof T>= Pick<T,P> & Partial<Omit<T,P>>
//how to use
//type DraftTask = RequireOnly<Task, 'title'>;
//type DraftTask = RequireOnly<Task, 'title' | 'id'>; //union

type Task = {
  id: string;
  title: string;
  user?: User[id];//The user property contains the id of the user
  column?: StatusColumn['id'];
};

type User = {
  id: string;
  realName: string;
  alterEgo: string;
  tasks: Task['id'][];
};

type StatusColumn = {
  id: string;
  tasks: Task['id'][];
  title: Status;
};

type Status =
  | 'Backburner'
  | 'Ready'
  | 'In Progress'
  | 'Verifying'
  | 'Waiting for Deployment'
  | 'Deployed';


//   The file name "global.d.ts" is commonly used in TypeScript
//    projects to define global type declarations. By convention, 
//    TypeScript looks for type declarations in files with the ".d.ts"
//     extension, and "global.d.ts" specifically is used for global 
//     scope declarations.

// When you name a file "global.d.ts" and place it in your project,
//  it becomes a global type declaration file that applies to the
//   entire project. Any type definitions or global declarations
//    specified in this file can be used across all other files
//     in your TypeScript project without the need for explicit imports.
