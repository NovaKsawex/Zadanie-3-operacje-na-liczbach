let a = parseFloat(prompt("Podaj liczbę"));

// Zad 1
document.writeln(`Podana liczba: ${a}</p>`);
// Zad 2
document.writeln(`Przeciwna liczba: ${-a}</p>`);
// Zad 3
document.writeln(`Podana liczba + 15: ${a + 15}</p>`);
// Zad 4
document.writeln(`Podana liczba + 0.5: ${a + 0.5}</p>`);
// Zad 5
document.writeln(`kwadrat podanej liczby: ${Math.pow(a, 2)}</p>`);
// Zad 6
document.writeln(`Wartość dzielenia przez 2: ${a / 2.0}</p>`);
// Zad 7
document.writeln(`Wartość reszty dzielenia przez 2: ${a % 2}</p>`);
// Zad 8
document.writeln(`Liczba o jeden większa: ${a++}</p>`);
// Zad 9
document.writeln(`Liczba o jeden mniejsza: ${a--}</p>`);
// Zad 10
document.writeln(`Dzielenie przez 3, zaokrąglone w dół: ${Math.floor(a / 3.0)}</p>`);
// Zad 11
document.writeln(`Dzielenie przez 3, zaokrąglone w górę: ${Math.ceil(a / 3.0)}</p>`);
// Zad 12
document.writeln(`Dzielenie przez 3, zaokrąglone do najbliższej całkowitej: ${Math.round(a / 3.0)}</p>`);
// Zad 13
document.writeln(`Pierwiastek z podanej liczby: ${Math.sqrt(a)}</p>`);
// Zad 14
document.writeln(`Wynik iloczynu wprowadzonej liczby z liczbą losową z przedziału 0-50: ${Math.round(Math.random() * 50.0) * a}</p>`);
// Zad 15
document.writeln(`Wratość absolutna: ${Math.abs(a)}</p>`);
