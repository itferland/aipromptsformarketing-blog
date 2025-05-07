#!/usr/bin/env python3
import os
import frontmatter
from PIL import Image, ImageDraw, ImageFont

# Paths
POSTS_DIR = "_posts"
IMAGES_DIR = "assets/images"
os.makedirs(IMAGES_DIR, exist_ok=True)

# Canvas settings
WIDTH, HEIGHT = 1200, 600
BG_COLOR = (50, 50, 50)
TEXT_COLOR = (255, 255, 255)
FONT_PATH = "C:/Windows/Fonts/arial.ttf"
FONT_SIZE = 48

font = ImageFont.truetype(FONT_PATH, FONT_SIZE)

def wrap_text(draw, text, max_width):
    words, lines, line = text.split(), [], ""
    for w in words:
        test_line = f"{line} {w}".strip()
        bbox = draw.textbbox((0, 0), test_line, font=font)
        tw = bbox[2] - bbox[0]
        if tw <= max_width:
            line = test_line
        else:
            lines.append(line)
            line = w
    lines.append(line)
    return lines

for fname in os.listdir(POSTS_DIR):
    if not fname.endswith(".md"):
        continue

    slug = fname[:-3]
    post = frontmatter.load(os.path.join(POSTS_DIR, fname))
    title = post.get("title", slug.replace("-", " ").title())

    img = Image.new("RGB", (WIDTH, HEIGHT), BG_COLOR)
    draw = ImageDraw.Draw(img)

    # Wrap & measure lines
    lines = wrap_text(draw, title, WIDTH - 100)
    line_heights = []
    for l in lines:
        bbox = draw.textbbox((0, 0), l, font=font)
        line_heights.append(bbox[3] - bbox[1])
    total_h = sum(line_heights) + 10 * (len(lines)-1)

    # Draw centered
    y = (HEIGHT - total_h) // 2
    for i, l in enumerate(lines):
        bbox = draw.textbbox((0, 0), l, font=font)
        w = bbox[2] - bbox[0]
        h = bbox[3] - bbox[1]
        x = (WIDTH - w) // 2
        draw.text((x, y), l, font=font, fill=TEXT_COLOR)
        y += h + 10

    out_path = os.path.join(IMAGES_DIR, f"cover-{slug}.jpg")
    img.save(out_path)
    print(f"Generated {out_path}")
