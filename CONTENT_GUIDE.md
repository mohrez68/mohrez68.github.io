# راهنمای مدیریت محتوا

این سایت با Hugo ساخته می‌شود و با **Cloudflare Pages** منتشر می‌شود. برای اضافه‌کردن محتوا فقط با پوشه `content/` کار کنید. بعد از commit و push، Cloudflare Pages به‌صورت خودکار سایت را می‌سازد و تغییرات را منتشر می‌کند.

- ریپو: `mohrez68/mohrez68.github.io`
- شاخه‌ی تولید: `main`
- آدرس سایت: `https://aimlab.ir`

## قانون کلی

هر آیتم یک پوشه مستقل دارد. فایل‌های زبان‌دار داخل همان پوشه قرار می‌گیرند:

- `index.en.md` → نسخه انگلیسی
- `index.fa.md` → نسخه فارسی
- `cover.jpg` / `cover.png` → تصویر شاخص (اختیاری)
- `photo.jpg` → عکس عضو (فقط برای افراد)
- فایل‌های PDF یا تصاویر دیگر → کنار همان `index`ها

اگر فایل یک زبان را نسازید، آن آیتم در آن زبان ساخته نمی‌شود و نمایش داده نمی‌شود. این رفتار عمدی است.

> به `themes/`، `config/`، `layouts/` و تصویر لوگو دست نزنید. این‌ها مربوط به توسعه‌دهنده هستند.

---

## قبل از شروع: آخرین تغییرات را بگیر (pull)

قبل از هر ویرایش، نسخه‌ی محلی را به‌روز کن تا تغییرات دیگران را از دست ندهی.

### با ترمینال

**بار اول** (ریپو را clone کن):

```bash
git clone git@github.com:mohrez68/mohrez68.github.io.git
cd mohrez68.github.io
```

**دفعات بعد** (داخل پوشه‌ی پروژه):

```bash
git pull origin main
```

> اگر SSH روی سیستم تنظیم نیست، ساده‌ترین راه GitHub Desktop است. برای ترمینال با HTTPS هم می‌شود clone کرد، ولی push با HTTPS نیاز به Personal Access Token دارد. برای push باید به ریپو دسترسی Collaborator داشته باشی.

### با GitHub Desktop (برای افراد غیرفنی)

1. از `desktop.github.com` نصب کن و با حساب GitHub وارد شو.
2. `File → Clone repository` و انتخاب `mohrez68/mohrez68.github.io` (بار اول).
3. قبل از ویرایش، **Fetch origin** و بعد **Pull origin** را بزن.
4. فایل‌ها را در پوشه‌ی محلی ویرایش کن.
5. در تب Changes خلاصه‌ی تغییرات را بنویس و **Commit to main** را بزن.
6. در آخر **Push origin** را بزن.

---

## ۱) افزودن پست بلاگ

پوشه بسازید:

```text
content/blog/my-new-post/
  index.en.md
  index.fa.md        (اختیاری)
  cover.jpg          (اختیاری)
```

نمونه `index.en.md`:

```markdown
---
title: "عنوان پست"
date: 2026-05-01
draft: false
description: "یک توضیح کوتاه برای فهرست و SEO."
featured_image: "cover.jpg"
tags: ["هوش مصنوعی", "صوت"]
---

متن پست اینجا نوشته می‌شود.

![توضیح تصویر](cover.jpg)
```

- `date` تاریخ انتشار است و ترتیب فهرست بلاگ را تعیین می‌کند.
- `draft: true` پست را از نسخه منتشرشده مخفی می‌کند.
- برای تصاویر داخل متن از مسیر نسبی (مثل `cover.jpg`) استفاده کنید؛ فایل باید کنار همان `index` باشد.
- اگر پست فرمول ریاضی دارد، `math: true` را به front matter اضافه کنید (بخش ۶ را ببینید).

## ۲) افزودن صفحه پژوهش

```text
content/research/my-area/
  index.en.md
  index.fa.md
  cover.png
```

نمونه `index.en.md`:

```markdown
+++
title = "عنوان حوزه پژوهشی"
description = "توضیح کوتاه برای فهرست."
featured_image = "cover.png"
area = "دسته‌بندی"
weight = 10
+++

## چرا این حوزه اهمیت دارد

متن...
```

- `weight` ترتیب نمایش در فهرست پژوهش را تعیین می‌کند (عدد کوچک‌تر = بالاتر).
- `area` برچسب روی کارت است.
- اگر فایل `cover.jpg` یا `cover.png` را داخل پوشه بگذارید، به‌صورت خودکار به‌عنوان تصویر شاخص استفاده می‌شود؛ نیازی به تغییر front matter نیست.

## ۳) افزودن مقاله (Publication)

```text
content/publications/my-paper/
  index.en.md
  index.fa.md        (اختیاری)
  cover.jpg          (اختیاری)
  paper.pdf          (اختیاری)
```

نمونه `index.en.md`:

```yaml
---
title: "عنوان مقاله"
authors: ["نویسنده یک", "نویسنده دو"]
venue: "نام کنفرانس یا ژورنال"
year: 2026
abstract: "چکیده مقاله."
tags: ["Speech Enhancement"]
external_url: "https://example.org/paper"
weight: 1
---
```

- برای لینک خارجی از `external_url` استفاده کنید، نه `url` (کلمه `url` در Hugo رزرو شده است).
- عنوان در فهرست به صفحه داخلی مقاله لینک می‌شود؛ لینک ناشر جداگانه نمایش داده می‌شود.
- `weight` ترتیب نمایش را تعیین می‌کند.

## ۴) افزودن عضو آزمایشگاه

```text
content/people/first-last/
  index.en.md
  index.fa.md
  photo.jpg          (اختیاری)
```

نمونه `index.en.md`:

```yaml
---
title: "Dr. First Last"
role: "Assistant Professor"
category: "faculty"
bio: "Research interests: ..."
email: "name@example.com"
scholar: "https://scholar.google.com/..."
github: "https://github.com/..."
linkedin: ""
website: ""
weight: 1
---
```

- `category` یکی از `faculty`، `msc` یا `alumni` باشد تا فیلتر اعضا کار کند.
- عکس اختیاری است؛ اگر نباشد آیکون پیش‌فرض نمایش داده می‌شود.
- نام فایل عکس را `photo.jpg` یا `photo.png` بگذارید.
- عکس باید **مربع (۱:۱)** باشد و صورت در مرکز کادر قرار بگیرد؛ حداقل ۶۰۰×۶۰۰ پیکسل و ترجیحاً ۸۰۰×۸۰۰.
- اگر عکس مربع نباشد، کل تصویر داخل قاب نمایش داده می‌شود و اطرافش فضای خالی می‌ماند (بدون برش یا زوم).

---

## ۵) گذاشتن عکس در متن

عکس را کنار همان `index.en.md` / `index.fa.md` بگذارید و در هر جای متن که می‌خواهید این را بنویسید:

```markdown
![نمودار مقایسه‌ی نتایج](results.png)
```

- مسیر **نسبی** باشد (`results.png`)، نه `/images/...`.
- تصویر باید در همان پوشه‌ی پست باشد.
- تصویر به‌صورت خودکار بهینه می‌شود: اگر عرضش بیشتر از ۱۴۰۰px باشد به WebP تبدیل و کوچک می‌شود و `width`/`height` و lazy loading اضافه می‌شود.
- `alt` را همیشه بنویسید؛ هم برای دسترس‌پذیری و هم برای SEO.
- نام فایل: حروف کوچک، بدون فاصله، با خط تیره (`speech-results.png`). فرمت پیشنهادی: `.jpg`، `.png` یا `.webp`.
- قبل از آپلود، عرض تصویر را حداکثر تا ۱۶۰۰px کم کنید تا حجم سایت بالا نرود.

### عکس با کپشن (shortcode figure)

برای نمایش عکس با توضیح زیر آن:

```markdown
{{< figure src="results.png" alt="نمودار نتایج" caption="شکل ۱: مقایسه‌ی نتایج مدل‌ها." >}}
```

پارامترهای اختیاری: `title`، `link`، `target`، `rel`، `width`، `height`، `loading` و `class`.

- `caption` از Markdown پشتیبانی می‌کند (مثلاً `**بولد**`).
- اگر `width` و `height` را ندهید، ابعاد واقعی تصویر خودکار اضافه می‌شود.
- تصاویر بزرگ‌تر از ۱۴۰۰px در همین shortcode هم به WebP تبدیل می‌شوند.

> برای عکس‌های خارجی (با `https://...`) بهینه‌سازی خودکار انجام نمی‌شود؛ بهتر است فایل را داخل همان پوشه‌ی پست قرار دهید.

## ۶) نوشتن فرمول ریاضی

فرمول‌ها با **KaTeX** رندر می‌شوند. برای اینکه فایل‌های KaTeX فقط در صفحات دارای فرمول لود شوند، در front matter همان صفحه این را اضافه کنید:

```yaml
math: true
```

یا در front matterهای TOML:

```toml
math = true
```

### فرمول درون‌خطی

```markdown
فرمول انرژی: $E = mc^2$ است.
```

یا:

```markdown
فرمول انرژی: \(E = mc^2\) است.
```

### فرمول نمایشی

```markdown
$$
\mathrm{SNR} = 10\log_{10}\left(\frac{P_{\text{signal}}}{P_{\text{noise}}}\right)
$$
```

### فرمول چندخطی

```markdown
$$
\begin{aligned}
y &= Wx + b \\
\mathcal{L} &= \frac{1}{N}\sum_{i=1}^{N}(y_i - \hat{y}_i)^2
\end{aligned}
$$
```

### ماتریس

```markdown
$$
A = \begin{bmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22}
\end{bmatrix}
$$
```

### نکته‌های مهم

- `$$` را در خط جداگانه بگذارید.
- داخل `$$ ... $$` خط خالی نگذارید؛ ممکن است پاراگراف را بشکند.
- `math: true` را فقط در صفحاتی بگذارید که فرمول دارند.
- برای متن داخل فرمول از `\text{...}` استفاده کنید. متن فارسی داخل KaTeX خوب رندر نمی‌شود؛ بهتر است فارسی را بیرون فرمول بنویسید.
- برای شماره‌گذاری معادله از `\tag{1}` استفاده کنید.
- اگر علامت دلار را به‌صورت متن می‌خواهید، `\$` بنویسید.
- فرمول‌های طولانی در موبایل به‌صورت افقی اسکرول می‌شوند.

---

## بعد از تغییرات: commit و push

### با ترمینال

```bash
git status                 # ببین چه فایل‌هایی تغییر کرده‌اند
git add content/           # فقط محتوای موردنظر را stage کن
git commit -m "Add new blog post: my-new-post"
git push origin main
```

قبل از push مطمئن شو:

- فقط فایل‌های `content/` (و تصاویر همان پوشه‌ها) stage شده‌اند.
- `public/`، `node_modules/`، `resources/` و فایل‌های `.env` را commit نکن.
- front matter هر دو زبان را چک کرده‌اید.
- نام فایل‌ها بدون فاصله و با حروف کوچک است.

### با GitHub Desktop

1. تغییرات را در تب **Changes** ببین.
2. یک خلاصه‌ی کوتاه بنویس (مثلاً `Add new blog post`).
3. **Commit to main** را بزن.
4. **Push origin** را بزن.

### اگر push رد شد

اگر کسی قبل از تو push کرده باشد:

```bash
git pull --rebase origin main
git push origin main
```

اگر conflict داشتی و مطمئن نیستی، تغییراتت را ذخیره کن و از نگهدارنده کمک بگیر. هرگز `git push --force` نزن.

## بعد از push چه می‌شود؟

Cloudflare Pages به‌صورت خودکار از شاخه‌ی `main` بیلد می‌کند و سایت را منتشر می‌کند. معمولاً ۱ تا ۲ دقیقه طول می‌کشد.

برای دیدن وضعیت: Cloudflare dashboard → **Workers & Pages** → پروژه‌ی `mohrez68-github-io` → **Deployments**.

اگر بیلد شکست بخورد، نسخه‌ی قبلی سایت همچنان بالا می‌ماند. لاگ بیلد را ببین و خطا را برطرف کن.

## خطاهای رایج

### خطاهای محتوا

- فراموش‌کردن `---` یا `+++` در ابتدا و انتهای front matter
- استفاده از `url` به‌جای `external_url` در مقاله
- نام‌گذاری فایل تصویر با فاصله (بهتر است از خط تیره استفاده کنید)
- نبودن فایل تصویری که در front matter یا متن به آن اشاره شده است
- مسیر مطلق یا اشتباه برای عکس (باید نسبی و کنار `index` باشد)
- نبودن عکس در همان پوشه‌ی پست

### خطاهای فرمول

- فراموش‌کردن `math: true` در front matter
- خط خالی داخل `$$ ... $$`
- استفاده از دستورهای پشتیبانی‌نشده‌ی LaTeX
- استفاده از `$` برای متن عادی بدون escape (`\$`)

### خطاهای بیلد

در Cloudflare → پروژه → **Deployments** → آخرین بیلد را باز کن و لاگ را ببین. اگر مطمئن نیستی، متن خطا را برای نگهدارنده بفرست.

### push کردن گیر می‌کند

اگر `git push` روی پورت ۲۲ قطع یا کند شد، در `~/.ssh/config` این را اضافه کن:

```sshconfig
Host github.com
  HostName ssh.github.com
  Port 443
  User git
```

---

## پیش‌نمایش محلی (اختیاری)

برای دیدن سایت روی سیستم خودت:

```bash
npm install
npm run dev
```

سپس `http://localhost:1313` را باز کن. برای این کار Hugo Extended نسخه‌ی `0.123.7` و Node.js لازم است. برای ویرایش ساده‌ی محتوا، این مرحله اختیاری است و همان Cloudflare بعد از push سایت را می‌سازد.

## برای نگهدارنده‌ها

- ریپو: `mohrez68/mohrez68.github.io`
- شاخه‌ی تولید: `main`
- پروژه‌ی Cloudflare Pages: `mohrez68-github-io`
- Build command: `npm ci && hugo --minify --cleanDestinationDir`
- Output directory: `public`
- `HUGO_VERSION = 0.123.7` (این مقدار را تغییر ندهید)
- دامنه: `aimlab.ir` (DNS روی Cloudflare)
- KaTeX در `static/katex/` قرار دارد و در `head.html` فقط برای صفحاتی که `math: true` دارند لود می‌شود.
