# Once — առցանց հրավիրատոմսերի կայք

Ստատիկ կայք (HTML, CSS, JavaScript), որը հրապարակվում է GitHub Pages-ով։
Բրենդ՝ **Once** («Պահեր, որ լինում են մեկ անգամ»)։ Գույներն ու տառատեսակները՝ `assets/css/main.css`-ի `:root`-ում, լոգոն՝ `assets/img/logo.svg`։

## Կառուցվածք

```
index.html                 ← գլխավոր էջ (կատալոգ, ինչպես է աշխատում, պատվեր)
assets/
  css/main.css             ← գլխավոր էջի ոճեր
  img/                     ← լոգո, բրենդի նկարներ
templates/                 ← ԴԵՄՈ ձևանմուշներ (երևում են կատալոգում)
  wedding/w01/             ← հարսանեկան, տարբերակ 1
  baptism/                 ← մկրտություն (b01, b02 …)
  birthday/                ← ծննդյան տոն (d01, d02 …)
i/                         ← ՊԱՏՎԵՐՆԵՐ (կատալոգում չեն երևում, միայն link-ով)
  anna-karen-7k2m/
apps-script/Code.gs        ← Google Sheets-ի կոդը հյուրերի պատասխանների համար
```

Յուրաքանչյուր ձևանմուշ ամբողջական է իր թղթապանակում (index.html, style.css,
script.js, նկարներ, երաժշտություն), որ պատճենելիս ոչինչ չկոտրվի։

## Նոր պատվեր պատրաստելը

1. Պատճենեք ձևանմուշի թղթապանակը (օրինակ՝ `templates/wedding/w01/`) `i/` թղթապանակի մեջ։
2. Անվանեք `անուն-անուն-4պատահականնիշ`, օրինակ՝ `i/anna-karen-7k2m/`։
3. `index.html`-ում փոխեք անունները, ամսաթիվը, հասցեները, քարտեզի հղումները։
4. Փոխարինեք նկարները (նույն անուններով) և `music.mp3`-ը։
5. `script.js`-ում փոխեք `WEDDING_DATE`-ը և `FORM_ENDPOINT`-ը (տես ներքևում)։
6. Ստուգեք, որ `<meta name="robots" content="noindex">` տողը կա։
7. Commit արեք։ 1–2 րոպե հետո էջը բացվում է՝ `domain.am/i/anna-karen-7k2m/`։
8. Այդ թղթապանակի հղումը ՉԵՆՔ դնում գլխավոր էջում։

## Google Sheets (հյուրերի պատասխաններ)

Յուրաքանչյուր զույգի համար՝ առանձին Sheet.

1. Ստեղծեք նոր Google Sheet, անվանեք, օրինակ՝ «Աննա և Կարեն — պատասխաններ»։
2. Extensions → Apps Script։
3. Ջնջեք եղած կոդը և տեղադրեք `apps-script/Code.gs`-ի ամբողջ պարունակությունը։ Պահպանեք (Save)։
4. Deploy → New deployment → ⚙ → Web app։
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Deploy → Authorize access → ընտրեք Ձեր հաշիվը → Advanced → Go to … (unsafe) → Allow։
6. Պատճենեք Web app URL-ը (ավարտվում է `/exec`-ով)։
7. Տեղադրեք այն պատվերի `script.js`-ում՝ `const FORM_ENDPOINT = "...";`
8. Փորձարկեք ձևը։ Sheet-ում կհայտնվի «Պատասխաններ» թերթը նոր տողով։
9. Sheet-ը Share արեք զույգի հետ (Viewer), որ տեսնեն պատասխանները։

Եթե `Code.gs`-ը հետո փոխեք, պետք է Deploy → Manage deployments → Edit → New version։

## GitHub Pages և domain

1. Repo → Settings → Pages → Source: «Deploy from a branch», Branch: `main`, `/ (root)`։
2. Կայքը կբացվի `https://<username>.github.io/<repo>/` հասցեով։
3. Domain-ը գնելուց հետո՝ Settings → Pages → Custom domain → գրեք domain-ը → Save։
4. Domain-ի գնման կայքում ավելացրեք DNS records (A records GitHub-ի IP-ներով և
   `www`-ի համար CNAME → `<username>.github.io`)։ Ճիշտ արժեքները՝
   https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
5. Մի քանի ժամից միացրեք «Enforce HTTPS»։

## Կարևոր

- Repo-ն public է․ մի պահեք այստեղ հյուրերի ցուցակներ, հեռախոսահամարներ կամ գաղտնաբառեր։
- Ամեն փոփոխությունից հետո ստուգեք հեռախոսում և համակարգչում։
