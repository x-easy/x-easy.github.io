#!/bin/bash
# 建立所有目錄
mkdir -p src/content/posts src/content/pages src/content/drafts \
         src/tpl/layouts src/tpl/partials src/tpl/shortcodes \
         src/styles/base src/styles/skins \
         src/scripts src/assets/ui src/assets/content/'{post-slug}' src/assets/images src/assets/fonts \
         public bin dist/web/posts/example-post dist/web/posts/hello-blogger \
         dist/web/pages/about dist/web/pages/privacy dist/web/pages/terms \
         dist/web/assets dist/blogger-xml .github/workflows

# 建立所有檔案並確保不為空
for file in src/content/posts/example-post.md src/content/posts/hello-blogger.md \
      src/content/pages/about.md src/content/pages/privacy.md src/content/pages/terms.md \
      src/content/drafts/draft-sample.md src/tpl/layouts/index.html src/tpl/layouts/post.html \
      src/tpl/layouts/page.html src/tpl/layouts/404.html src/tpl/partials/nav.html \
      src/tpl/partials/footer.html src/tpl/partials/sidebar.html src/tpl/partials/head.html \
      src/tpl/partials/seo.html src/tpl/partials/blogger-fallback.html \
      src/tpl/shortcodes/ad-slot.html src/tpl/shortcodes/info-card.html src/tpl/shortcodes/code-block.html \
      src/styles/base/reset.css src/styles/base/variables.css src/styles/base/typography.css \
      src/styles/skins/light.css src/styles/skins/dark.css src/styles/main.css \
      src/scripts/search.js src/scripts/theme-engine.js src/scripts/router.js \
      src/scripts/path-resolver.js src/scripts/utils.js src/assets/ui/logo.svg \
      src/assets/ui/icon-sprite.svg src/assets/images/post-cover-sample.jpg \
      src/assets/images/avatar.png src/assets/fonts/Inter-Regular.woff2 \
      src/assets/fonts/Inter-Bold.woff2 public/favicon.ico public/robots.txt \
      public/CNAME public/.nojekyll bin/fetch-blogger.js bin/build.js \
      bin/img-opt.js bin/injector.js bin/manifest-gen.js dist/web/index.html \
      dist/web/posts/example-post/index.html dist/web/posts/hello-blogger/index.html \
      dist/web/pages/about/index.html dist/web/pages/privacy/index.html \
      dist/web/pages/terms/index.html dist/web/assets/main.css dist/web/assets/main.js \
      dist/blogger-xml/example-post.html dist/blogger-xml/hello-blogger.html \
      .github/workflows/deploy.yml config.yml package.json README.md; do
  touch "$file"
done
