import Posts from '../Post/Posts';

export default function RecentWork() {
  return (
    <section id="Work" className="bg-white py-12 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mt-6">
          <Posts />
        </div>
      </div>
    </section>
  );
}
