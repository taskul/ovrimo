import fs from 'fs';
import path from 'path';

const DB_FILE = path.join(process.cwd(), 'db.json');

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
};

export type Subscription = {
  id: string;
  email: string;
  status: 'active' | 'unsubscribed';
  createdAt: string;
};

export type Newsletter = {
  id: string;
  subject: string;
  content: string;
  sentAt: string | null;
  createdAt: string;
};

export type Database = {
  messages: ContactMessage[];
  subscriptions: Subscription[];
  newsletters: Newsletter[];
};

export function getDb(): Database {
  try {
    if (!fs.existsSync(DB_FILE)) {
      const defaultDb: Database = { messages: [], subscriptions: [], newsletters: [] };
      fs.writeFileSync(DB_FILE, JSON.stringify(defaultDb, null, 2));
      return defaultDb;
    }
    const data = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Failed to read db.json', error);
    return { messages: [], subscriptions: [], newsletters: [] };
  }
}

export function saveDb(data: Database): void {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Failed to write to db.json', error);
  }
}
