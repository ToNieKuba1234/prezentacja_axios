export default function Slide({ title, content, isCentered }: { title: string; content: string; isCentered: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      <h2 className="text-5xl font-bold mb-2">{title}</h2>
      <p className={`text-3xl text-gray-700 max-w-7xl whitespace-pre ${isCentered ? "text-center" : "text-left"}`}>{content}</p>
    </div>
  );
}