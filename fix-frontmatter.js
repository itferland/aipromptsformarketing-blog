#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Polyfill __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Simple YAML frontmatter parser and generator
function parseFrontmatter(content) {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = content.match(frontmatterRegex);
    
    if (!match) {
        return {
            frontmatter: {},
            content: content,
            hasFrontmatter: false
        };
    }
    
    const yamlContent = match[1];
    const bodyContent = match[2];
    
    // Simple YAML parser for basic key-value pairs
    const frontmatter = {};
    const lines = yamlContent.split('\n');
    
    for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#')) {
            const colonIndex = trimmed.indexOf(':');
            if (colonIndex > 0) {
                const key = trimmed.substring(0, colonIndex).trim();
                let value = trimmed.substring(colonIndex + 1).trim();
                
                // Remove quotes if present
                if ((value.startsWith('"') && value.endsWith('"')) || 
                    (value.startsWith("'") && value.endsWith("'"))) {
                    value = value.slice(1, -1);
                }
                
                frontmatter[key] = value;
            }
        }
    }
    
    return {
        frontmatter,
        content: bodyContent,
        hasFrontmatter: true
    };
}

function generateFrontmatter(frontmatter) {
    const lines = ['---'];
    
    // Ensure required fields are present
    Object.keys(frontmatter).forEach(key => {
        const value = frontmatter[key];
        if (typeof value === 'string' && value.includes('"')) {
            lines.push(`${key}: '${value}'`);
        } else {
            lines.push(`${key}: "${value}"`);
        }
    });
    
    lines.push('---');
    return lines.join('\n');
}

function titleCase(str) {
    return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function processMarkdownFile(filePath) {
    console.log(`Processing: ${path.basename(filePath)}`);
    
    const content = fs.readFileSync(filePath, 'utf8');
    const parsed = parseFrontmatter(content);
    
    // Generate title from filename if not present
    const filename = path.basename(filePath, '.md');
    const generatedTitle = titleCase(filename.replace(/-/g, ' '));
    
    // Ensure required fields exist
    if (!parsed.frontmatter.title) {
        parsed.frontmatter.title = generatedTitle;
    }
    
    if (!parsed.frontmatter.description) {
        parsed.frontmatter.description = `${parsed.frontmatter.title} - Latest insights and analysis`;
    }
    
    if (!parsed.frontmatter.pubDate) {
        // Try to extract date from existing date field or use today
        const existingDate = parsed.frontmatter.date || new Date().toISOString().split('T')[0];
        parsed.frontmatter.pubDate = existingDate;
    }
    
    // Generate the new content
    const newFrontmatter = generateFrontmatter(parsed.frontmatter);
    const newContent = `${newFrontmatter}\n\n${parsed.content}`;
    
    // Write back to file
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`  ✅ Updated: ${path.basename(filePath)}`);
}

function main() {
    const postsDir = path.join(__dirname, 'src', 'content', 'posts');
    
    if (!fs.existsSync(postsDir)) {
        console.error(`❌ Error: Directory ${postsDir} does not exist`);
        process.exit(1);
    }
    
    console.log('🔍 Fixing frontmatter in all blog posts...\n');
    
    const files = fs.readdirSync(postsDir)
        .filter(file => file.endsWith('.md'))
        .map(file => path.join(postsDir, file));
    
    if (files.length === 0) {
        console.log('No markdown files found in the posts directory.');
        return;
    }
    
    files.forEach(processMarkdownFile);
    
    console.log('\n🎉 All done! Now run:');
    console.log('  git add .');
    console.log('  git commit -m "Fix missing frontmatter fields in all blog posts"');
    console.log('  git push');
}

// Run the script
main(); 