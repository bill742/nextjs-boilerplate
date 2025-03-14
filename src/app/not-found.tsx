import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-16">
        <h1 className="text-3xl font-bold">404 - Not Found</h1>
        <p className="text-xl">This page could not be found.</p>
        <Link href="/" className="text-xl underline">
          Return Home
        </Link>
      </main>
    </div>
  );
}
