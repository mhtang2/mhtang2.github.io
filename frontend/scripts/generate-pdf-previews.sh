#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
RESOURCES_DIR="$ROOT/public/resources"
OUTPUT_DIR="$ROOT/public/images/pdf-previews"
MAX_SIZE=1440

mkdir -p "$OUTPUT_DIR"

render_pdf() {
  local pdf_path="$1"
  local base_name
  base_name="$(basename "$pdf_path" .pdf)"
  local output_path="$OUTPUT_DIR/${base_name}.png"

  if command -v qlmanage >/dev/null 2>&1; then
    local tmp_dir
    tmp_dir="$(mktemp -d)"
    qlmanage -t -s "$MAX_SIZE" -o "$tmp_dir" "$pdf_path" >/dev/null 2>&1
    mv "$tmp_dir/$(basename "$pdf_path").png" "$output_path"
    rmdir "$tmp_dir"
    return 0
  fi

  if command -v pdftoppm >/dev/null 2>&1; then
    local tmp_prefix
    tmp_prefix="$(mktemp -t pdf-preview).out"
    pdftoppm -png -f 1 -l 1 -scale-to-x "$MAX_SIZE" -singlefile "$pdf_path" "$tmp_prefix"
    mv "${tmp_prefix}.png" "$output_path"
    return 0
  fi

  echo "Need qlmanage (macOS) or pdftoppm (poppler) to generate PDF previews." >&2
  exit 1
}

count=0
while IFS= read -r -d '' pdf_path; do
  render_pdf "$pdf_path"
  count=$((count + 1))
  echo "Wrote images/pdf-previews/$(basename "$pdf_path" .pdf).png"
done < <(find "$RESOURCES_DIR" -type f -iname '*.pdf' -print0)

echo "Generated $count preview image(s) in public/images/pdf-previews/"
