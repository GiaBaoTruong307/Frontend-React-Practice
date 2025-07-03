import illustration from "../assets/images/illustration-article.svg";
import avatar from "../assets/images/image-avatar.webp";

type Props = {
  type: string;
  date: string;
  title: string;
  description: string;
  author: string;
};

const Card = ({ type, date, title, description, author }: Props) => {
  return (
    <article className="w-full max-w-[350px] p-5 shadow-[10px_10px_0_black] rounded-3xl border border-black bg-white">
      {/* Top illustration */}
      <img
        src={illustration}
        alt="illustration"
        className="w-full rounded-lg mb-5"
      />

      {/* Tag */}
      <span className="inline-block rounded-lg bg-yellow-300 py-1 px-3 mb-2 text-sm font-semibold text-black">
        {type}
      </span>

      {/* Date */}
      <time className="block text-sm text-gray-600 mb-3 font-bold">{date}</time>

      {/* Title */}
      <h2 className="font-bold text-2xl text-black mb-3">{title}</h2>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={author}
          className="w-8 h-8 rounded-full object-cover"
        />
        <p className="font-bold text-sm">{author}</p>
      </div>
    </article>
  );
};

export default Card;
