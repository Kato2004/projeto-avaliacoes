export default interface ContextProps {
  author: string;
  setAuthor: React.Dispatch<React.SetStateAction<string>>;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  stars: number;
  setStars: React.Dispatch<React.SetStateAction<number>>;
}
