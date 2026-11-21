# راهنمای مدیریت محتوا

این سایت با Hugo ساخته می‌شود. برای اضافه‌کردن محتوا فقط با پوشه `content/` کار کنید. بعد از commit و push، GitHub Actions سایت را می‌سازد و تغییرات را منتشر می‌کند.

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

## بعد از افزودن

```bash
git add content/
git commit -m "Add new content"
git push
```

بعد از push، GitHub Actions به‌طور خودکار سایت را می‌سازد. اگر build شکست خورد، صفحه Actions خطا را نشان می‌دهد. رایج‌ترین خطاها:

- فراموش‌کردن `---` یا `+++` در ابتدا و انتهای front matter
- استفاده از `url` به‌جای `external_url` در مقاله
- نام‌گذاری فایل تصویر با فاصله (بهتر است از خط تیره استفاده کنید)
- نبودن فایل تصویری که در front matter یا متن به آن اشاره شده است
