import fs from 'fs';
import { RESOURCES } from '../src/data.js';

async function checkLinks() {
    console.log(`Checking ${RESOURCES.length} resources for broken links...`);
    let broken = [];

    for (const r of RESOURCES) {
        if (r.website && r.website.startsWith('http')) {
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

                const response = await fetch(r.website, {
                    method: 'HEAD',
                    signal: controller.signal,
                    headers: { 'User-Agent': 'Mozilla/5.0' }
                });
                clearTimeout(timeoutId);

                if (!response.ok && response.status !== 405 && response.status !== 403) {
                    // Some sites block HEAD or scraping (403), so only flag if clearly broken (404, 500, etc)
                    // Retry with GET if HEAD fails
                    const getResponse = await fetch(r.website, {
                        signal: controller.signal,
                        headers: { 'User-Agent': 'Mozilla/5.0' }
                    });
                    if (!getResponse.ok) {
                        console.log(`[BROKEN] ${r.status} - ${r.website} (${r.name})`);
                        broken.push({ name: r.name, url: r.website, status: getResponse.status });
                    }
                }
            } catch (error) {
                console.log(`[ERROR] ${error.message} - ${r.website} (${r.name})`);
                broken.push({ name: r.name, url: r.website, error: error.message });
            }
        }
    }

    console.log('\n--- Report ---');
    if (broken.length === 0) {
        console.log('All links seemingly OK.');
    } else {
        console.log(`${broken.length} broken links found:`);
        console.log(JSON.stringify(broken, null, 2));
    }
}

checkLinks();
