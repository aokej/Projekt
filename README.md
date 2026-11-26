# Projekt

5.3 Planer budżetu domowego
Aplikacja do śledzenia przychodów i wydatków.
Formularz: opis, kwota, typ (przychód/wydatek), kategoria ( select , min. 5 kategorii). Walidacja: opis
niepusty, kwota jest liczbą większą od 0, maks. 2 miejsca po przecinku.
Operacje przechowywane w tablicy obiektów i wyświetlane w tabeli ( append wierszy tr ): opis,
kategoria, kwota (przychód na zielono, wydatek na czerwono), przycisk „Usuń”.
Podsumowanie: suma przychodów, suma wydatków, saldo (kolor zależny od znaku).
Zestawienie wydatków według kategorii: kwota i udział procentowy, z prostym paskiem w CSS
(szerokość proporcjonalna do udziału).
Filtry: typ operacji i kategoria, działające łącznie. Sortowanie po kwocie rosnąco/malejąco.
Edycja istniejącej operacji (wczytanie do formularza i zapis zmian).
Wszystkie dane zapisywane w localStorage ( JSON.stringify / JSON.parse ) i odtwarzane po
odświeżeniu strony.
Minimalna liczba commitów: 8 (start projektu + 7 wymagań)