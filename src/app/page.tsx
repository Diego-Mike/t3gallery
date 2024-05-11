const mockUrls = [
  "https://utfs.io/f/f417c1d8-8195-40e1-a321-a6e735110aea-dv2ytw.jpeg",
  "https://utfs.io/f/14cf8a58-be91-45f9-90be-9f79349322f4-uksis8.png",
  "https://utfs.io/f/a961ee72-fe80-4524-898c-580322188228-1tafh.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
