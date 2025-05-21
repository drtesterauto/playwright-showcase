# Playwright Showcase

This project demonstrates end-to-end testing using [Playwright](https://playwright.dev/). It includes cross-browser testing, mobile emulation, visual validation, and CI integration.

## 🚀 Getting Started
```bash
npm install
npx playwright install
npm test
```

## 📂 Tests Overview
- `todo-app.spec.ts`: Adds and completes a to-do item.
- `sauce-login.spec.ts`: Login tests on saucedemo.com.
- `mobile.spec.ts`: Responsive test on iPhone 13.

## ✅ Run Test Report
```bash
npm run test:report
```

## 🔄 CI
This repo runs tests automatically on push via GitHub Actions.