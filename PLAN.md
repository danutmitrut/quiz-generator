# TeacherTest Pro — Plan de construcție

## Ce e
Aplicație web pentru profesori: generează teste grilă din text sau imagine folosind AI, le distribuie elevilor printr-un link, colectează răspunsurile și afișează rezultatele în timp real.

## Stack
- **Frontend:** Un singur fișier HTML, Tailwind CSS (CDN), vanilla JS
- **Backend:** Supabase (PostgreSQL + Realtime)
- **AI:** Claude API (Sonnet) — generare întrebări + Vision (citire imagini)
- **Deploy:** Vercel (static file)

## Supabase
- **Proiect:** `quiz-generator` (oviuoapruuwyjhvstmzs)
- **URL:** https://oviuoapruuwyjhvstmzs.supabase.co
- **Anon key:** eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92aXVvYXBydXV3eWpodnN0bXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwMTE4NjcsImV4cCI6MjA4NzU4Nzg2N30.GxbWHmbllQ8sCrGoBxdf_koXla1gRSaHlPo0VPCKL3c
- **DB pass:** QuizGen2026Secure
- **Tabele:** chapters, quizzes, submissions
- **RLS:** deschis (demo) — de securizat pentru producție
- **Realtime:** activat pe submissions

## Pagini (hash routing)

| Route | Cine | Ce face |
|-------|------|---------|
| `#/` | Profesor | Dashboard — listă teste create |
| `#/create` | Profesor | Creează test (text/imagine → AI → salvare) |
| `#/quiz/:id` | Profesor | Preview test, editare întrebări, link elev |
| `#/quiz/:id/results` | Profesor | Tabel rezultate cu realtime |
| `#/test/:id` | Elev | Formular nume/clasă → completează test → scor |

## Pași de construcție pentru demo live (60 min)

### Faza 1 — Scheletul (10 min)
1. Creez fișier `index.html` gol
2. Adaug Tailwind CDN + Supabase JS CDN
3. Scriu header cu logo "TeacherTest Pro"
4. Fac routing hash-based simplu (switch pe location.hash)

### Faza 2 — Generare test cu AI (15 min)
5. Pagina `#/create`: textarea + opțiuni (nr. întrebări, dificultate)
6. Adaug tab "Imagine / Screenshot" cu upload + drag & drop
7. Conectez Claude API — trimite text/imagine, primește JSON cu întrebări
8. Salvez testul în Supabase (tabel `quizzes`)
9. Redirect la preview

### Faza 3 — Preview și editare (10 min)
10. Pagina `#/quiz/:id`: afișare întrebări din DB
11. Input-uri editabile pe întrebări și opțiuni
12. Radio button pentru răspuns corect
13. Buton salvare sticky + link de copiat pentru elevi

### Faza 4 — Test elev (10 min)
14. Pagina `#/test/:id`: formular nume, prenume, clasă
15. Afișare quiz cu butoane de selecție
16. La submit: calculare scor, salvare în Supabase (tabel `submissions`)
17. Afișare rezultat cu explicații

### Faza 5 — Dashboard rezultate (10 min)
18. Pagina `#/quiz/:id/results`: tabel cu elevi, scoruri, ✓/✗ per întrebare
19. Medie generală + nr. răspunsuri
20. Supabase Realtime — rezultatele apar automat când elevii trimit

### Faza 6 — Polish (5 min)
21. Dashboard principal `#/` cu lista teste + nr. răspunsuri
22. Animații fade-in, loader, stare goală
23. Test final end-to-end

## Status actual
- [x] Faza 1 — Schelet + routing
- [x] Faza 2 — Generare test AI (text + imagine)
- [x] Faza 3 — Preview + editare întrebări
- [x] Faza 4 — Test elev cu formular
- [x] Faza 5 — Dashboard rezultate cu realtime
- [x] Faza 6 — Polish
- [ ] Deploy Vercel + domeniu (opțional)

## Notă demo live
Aplicația e pre-construită și testată. În live, "refaci" pașii din plan fluent, cu codul deja validat. Nu e vorba de a minti — e vorba de a demonstra procesul fără blocaje tehnice. Poți:
1. Porni de la zero (fișier gol) și cere Claude Code să construiască pas cu pas
2. Sau porni de la un checkpoint intermediar și continui de acolo
3. Sau arăți direct produsul finit și explici cum ai ajuns aici

## De adăugat în viitor
- Autentificare profesor (Supabase Auth)
- Capitole și lecții (organizare ierarhică)
- Export rezultate PDF/Excel
- Mod examen (timer, o întrebare pe pagină)
- Securizare RLS (profesorul vede doar testele lui)
