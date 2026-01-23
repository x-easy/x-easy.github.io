#!/usr/bin/env bash
set -e

echo "== Mobispace / GitHub Pages 升級腳本 =="

# ---------- 1. 建立必要目錄（若已存在不會報錯） ----------
echo "[1/4] 建立目錄結構"
mkdir -p \
  src/tpl/layouts \
  src/tpl/partials \
  src/scripts \
  public

# ---------- 2. 建立 404.html（僅在不存在時建立） ----------
if [ ! -f src/tpl/layouts/404.html ]; then
  echo "[2/4] 新增 404.html（Blogger 舊網址轉跳緩衝）"
  cat > src/tpl/layouts/404.html <<'EOF'
<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="utf-8">
  <title>404</title>
  <script>
    const p = location.pathname;
    fetch('/manifest.json')
      .then(r => r.json())
      .then(list => {
        const hit = list.find(x =>
          x.blogger_url && new URL(x.blogger_url).pathname === p
        );
        location.replace(hit ? hit.url : '/');
      })
      .catch(() => location.replace('/'));
  </script>
</head>
<body>Redirecting…</body>
</html>
EOF
else
  echo "[2/4] 404.html 已存在，略過"
fi

# ---------- 3. 建立 SEO partial ----------
if [ ! -f src/tpl/partials/seo.html ]; then
  echo "[3/4] 新增 SEO partial"
  cat > src/tpl/partials/seo.html <<'EOF'
<title>{{ title }}</title>
<meta name="description" content="{{ description }}">
<link rel="canonical" href="{{ canonical }}">

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "{{ title }}",
  "datePublished": "{{ date }}",
  "author": {
    "@type": "Person",
    "name": "{{ author }}"
  }
}
</script>
EOF
else
  echo "[3/4] seo.html 已存在，略過"
fi

# ---------- 4. 建立 manifest.json（僅在不存在時） ----------
if [ ! -f public/manifest.json ]; then
  echo "[4/4] 建立 manifest.json（暫用手動版）"
  cat > public/manifest.json <<'EOF'
[
  {
    "title": "GitHub 控制 Blogger 的實驗",
    "url": "/posts/try-gh-bl/",
    "blogger_url": "https://example.blogspot.com/2026/01/try-gh-bl.html"
  }
]
EOF
else
  echo "[4/4] manifest.json 已存在，略過"
fi

echo "== 完成：Repo 已具備 404 / SEO / Blogger 轉跳基礎 =="
