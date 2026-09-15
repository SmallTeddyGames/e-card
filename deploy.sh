#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"
pnpm run build
pnpm exec gh-pages -d dist
