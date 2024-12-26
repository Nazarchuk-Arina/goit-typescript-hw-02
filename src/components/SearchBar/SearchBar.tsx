import { ChangeEvent, FormEvent, useState } from "react";
import s from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { SearchBarProps } from "./SearchBar.types";

export default function SearchBar({ onSubmit }: SearchBarProps): JSX.Element {
  const [query, setQuery] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void | string => {
    event.preventDefault();
    console.log("Submit handler triggered");
    if (!query.trim()) {
      console.log("no entry");
      return toast.error("Please enter a search query!", {
        duration: 4000,
        position: "top-right",
      });
    }

    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          placeholder="Search photos..."
          name="search"
          autoFocus
          value={query}
          onChange={handleChange}
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
    </header>
  );
}
