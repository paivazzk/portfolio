// components/ProjectCard.tsx
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
}: ProjectCardProps) {
  return (
    <div className="group cursor-pointer">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition duration-500" />
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>

        <p className="text-gray-400 font-sans mt-2 text-sm leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 border border-zinc-700 text-zinc-400 rounded-md cursor-pointer hover:bg-red-600 hover:text-white transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}