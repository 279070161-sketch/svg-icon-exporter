@echo off
chcp 65001 >nul
echo ════════════════════════════════════════
echo    SVG Icon Exporter · GitHub 部署工具
echo ════════════════════════════════════════
echo.

git add .
git commit -m "update: deploy latest changes" 2>nul
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ✅ 代码已成功推送至 GitHub！
    echo 🌐 您的在线访问地址（等 1-2 分钟生效）：
    echo    https://279070161-sketch.github.io/svg-icon-exporter/
) else (
    echo.
    echo ❌ 推送失败。请确认您已在 GitHub 上创建名为 svg-icon-exporter 的仓库。
    echo 新建仓库地址：https://github.com/new
)

echo.
pause
