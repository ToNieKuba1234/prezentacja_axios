export type SlideType = {
    title: string;
    content: string;
    isCentered: boolean;
  };
  
export const slides: SlideType[] = [
    {
      title: "AXIOS - PREZENENTACJA",
      content: "autorzy: Jarek i Kuba 2G",
      isCentered: true
    },

    {
        title: "Co to jest axios?",
        content: `
        • ZEWNĘTRZNA BIBLIOTEKA do pobierania danych z API
        • Działa w przeglądarkach oraz w Node.js
        • JEST WRAPPEREM oferującym prostszy i czytelniejszy kod niż fetch
        • Po stronie serwera używa natywnego modułu http z Node.js
        • Po stronie klienta (w przeglądarkach) korzysta z XMLHttpRequest
        • Ułatwia obsługę zapytań HTTP z auto przetwarzaniem odpowiedzi na JSON`,
        isCentered: false
    },

    {
        title: "Do czego się tego używa?",
        content: `
        ✅ Wysyłanie zapytań XMLHttpRequest z przeglądarki (czyli standardowe żądania AJAX)
        ✅ Wysyłanie zapytań HTTP z Node.js (na backendzie)
        ✅ Obsługuje Promise (czyli .then(), .catch() - idealne do pracy z asynchronicznością)
        ✅ Możliwość przechwytywania żądań i odpowiedzi (interceptory)
        ✅ Obsługuje anulowanie zapytań
        ✅ Obsługuje timeouty - można ustawić maksymalny czas na odpowiedź
        ✅ Automatyczne tworzenie parametrów w URL-u (serializacja zagnieżdżonych danych)
        ✅ Automatyczne przetwarzanie odpowiedzi jako JSON
        ✅ Pokazuje postęp wysyłania i pobierania danych (zarówno w przeglądarce jak i w Node.js)
        ✅ Chroni przed XSRF (Cross-Site Request Forgery) - po stronie klienta`,
        isCentered: false
    },

    {
        title: "Axios vs Fetch",
        content: `
        
        `,
        isCentered: false
    }
];