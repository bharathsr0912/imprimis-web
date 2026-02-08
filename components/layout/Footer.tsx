export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-center">
        © {new Date().getFullYear()} Imprimisis. All rights reserved.
      </div>
    </footer>
  );
}
