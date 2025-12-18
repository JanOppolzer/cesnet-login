# cesnet-login

Přihlašovací stránka sdružení [CESNET](https://www.cesnet.cz) pro různé webové služby, které nabízejí kromě federovaného přihlášení i lokální účty.

## Použití

Stačí naklonovat repozitář, nainstalovat závislosti a vygenerovat produkční verzi, která se generuje do adresáře `dist/`.

```bash
git clone https://github.com/JanOppolzer/cesnet-login
cd cesnet-login
npm install
npm run prod
```

Úpravy lze provádět přímo v souboru `./index.html`, následně je nutné provést generování produkční verze. Pro úpravy vzhledu důrazně doporučuji podívat se na [Tailwind CSS](https://tailwindcss.com).

## Náhled

Jak vypadá vygenerovaná přihlašovací stránka si můžete prohlédnout na adrese [janoppolzer.github.io/cesnet-login](https://janoppolzer.github.io/cesnet-login).

## Předchozí verze

[Původně podobná stránka](https://github.com/JanOppolzer/cesnet-dms) vznikla pro aplikaci DMS, ale nakonec došlo k jejímu využití i na dalších systémech.

Tamní verze je však poněkud zastaralá &mdash; používá "výběhový" Laravel Mix a Tailwind CSS v3. Tato verze využívá Tailwind CSS v4 a přešel jsem u ní z Laravel Mixu na modernější Vite. Předchozí verzi prozatím nechávám z historických důvodů, ale časem ji archivuji, nebo dokonce smažu.

## Kontakt

Jan Oppolzer <jan.oppolzer@cesnet.cz>
