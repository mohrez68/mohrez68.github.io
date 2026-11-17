#!/bin/bash
# Build script for CI (GitHub Pages/Vercel) or local production build
set -e

hugo --minify --cleanDestinationDir
