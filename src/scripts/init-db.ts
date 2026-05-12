import { initDb, addProduct } from '../lib/db';
import { products } from '../data/products';
import dotenv from 'dotenv';
import path from 'path';

// Load .env.development.local if it exists
dotenv.config({ path: path.join(process.cwd(), '.env.development.local') });
dotenv.config({ path: path.join(process.cwd(), '.env') });

async function main() {
  console.log('Initializing database...');
  try {
    await initDb();
    console.log('Tables created successfully.');

    console.log('Migrating initial products...');
    for (const product of products) {
      try {
        await addProduct(product);
        console.log(`Migrated product: ${product.name}`);
      } catch (err) {
        console.log(`Product ${product.name} already exists or failed:`, err instanceof Error ? err.message : err);
      }
    }
    console.log('Migration complete.');
  } catch (error) {
    console.error('Initialization failed:', error);
  }
}

main();
