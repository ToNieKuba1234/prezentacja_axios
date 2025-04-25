export type SlideType = {
    title: string;
    content: string;
    isCentered: boolean;
  };
  
export const slides: SlideType[] = [
    {
      title: "AXIOS - PREZENENTACJA",
      content: "Autorzy: Yarek i Kuba 2G",
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
        • Wysyłanie zapytań XMLHttpRequest z przeglądarki (czyli standardowe żądania AJAX)
        • Wysyłanie zapytań HTTP z Node.js (na backendzie)
        • Obsługuje Promise (czyli .then(), .catch() - idealne do pracy z asynchronicznością)
        • Możliwość przechwytywania żądań i odpowiedzi (interceptory)
        • Obsługuje anulowanie zapytań
        • Obsługuje timeouty - można ustawić maksymalny czas na odpowiedź
        • Automatyczne tworzenie parametrów w URL-u (serializacja zagnieżdżonych danych)
        • Automatyczne przetwarzanie odpowiedzi jako JSON
        • Pokazuje postęp wysyłania i pobierania danych (zarówno w przeglądarce jak i w Node.js)
        • Chroni przed XSRF (Cross-Site Request Forgery) - po stronie klienta`,
        isCentered: false
    },

    {
        title: "Axios vs Fetch",
        content: `
        Instalacja:
            • Axios wymaga instalacji przez npm install. Fetch jest wbudowany, nie wymaga instalacji.
        Obsługa błędów:
            • Axios obsługuje błędy automatycznie za pomocą try/catch. W Fetch obsługa błędów jest ręczna, np. if (!res.ok).
        Parsowanie danych:
            • W Axios dane są parsowane automatycznie (np. res.data). W Fetch należy ręcznie wywołać res.json() do parsowania danych.
        Obsługa tokenów:
            • Axios obsługuje tokeny bardzo prosto, np. przez nagłówki. W Fetch trzeba ręcznie ustawić nagłówki i zarządzać tokenami.
        Obsługa timeoutów:
            • W Axios jest wbudowana obsługa timeoutów. W Fetch timeouty trzeba implementować samodzielnie.
        Czytelność:
            • W Axios kod jest bardziej czytelny i krótszy. W Fetch kod jest dłuższy i wymaga więcej sprawdzania.
        Obsługa przeglądarki:
            • Axios działa tylko w nowoczesnych przeglądarkach. Fetch działa wszędzie, w tym w starszych wersjach Internet Explorer.
        `,
        isCentered: false
    },

    {
        title: "Kiedy używać czego?",
        content: `
        Axios:
            • Złożony projekt, autoryzacja, błędy
            • Potrzebujesz timeoutów
        Fetch:
            • Prosty projekt, tylko pobieranie
            • Bardzo prosty kod i chcesz native API
        `,
        isCentered: false
    },

    {
        title: "Podsumowanie",
        content: `
        fetch – dobry, ale surowy. Trzeba ręcznie sprawdzać błędy, parsować dane.

        axios – wygodny, czytelny, ma dodatkowe funkcje jak interceptory, timeouty i lepszą obsługę błędów.

        W dużych projektach i w pracy z backendem prawie zawsze używa się axios.

        Jeśli tworzysz prosty projekt — fetch spokojnie wystarczy. Ale jak chcesz łatwiej obsługiwać błędy, 
        nagłówki, tokeny, albo masz większy projekt — axios daje więcej wygody i czystszy kod. W React zwykle 
        polecamy axios, bo skraca ilość boilerplate’u.
        `,
        isCentered: false
    },

    {
        title: "DZIĘKUJEMY ZA UWAGĘ!",
        content: `Autorzy: Yarek i Kuba 2G`,
        isCentered: false
    }
];