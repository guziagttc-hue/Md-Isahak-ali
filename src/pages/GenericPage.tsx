export default function GenericPage({ title }: { title: string }) {
  return (
    <div className="py-20 px-6 text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-4">This is the {title} page.</p>
    </div>
  );
}
