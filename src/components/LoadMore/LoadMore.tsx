import s from "./LoadMore.module.css";
import { LoadMoreProps } from "./LoadMore.types";

export default function LoadMore({ onLoad }: LoadMoreProps): JSX.Element {
  return (
    <div>
      <button className={s.btn} type="button" onClick={onLoad}>
        Load More
      </button>
    </div>
  );
}
