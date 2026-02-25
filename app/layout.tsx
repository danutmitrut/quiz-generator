export const metadata = {
  title: "TeacherTest Pro",
  description: "Generează teste grilă din text sau imagine cu AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
