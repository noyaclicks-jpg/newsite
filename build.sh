#!/bin/bash
set -e

echo "Step 1: Installing dependencies..."
pnpm install

echo "Step 2: Cleaning previous builds..."
rm -rf .next out

echo "Step 3: Building Next.js project..."
pnpm build

echo "Build complete! Checking for output directory..."
ls -la out/ || ls -la .next/
