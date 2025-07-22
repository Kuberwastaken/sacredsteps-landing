import { users, waitlistEntries, type User, type InsertUser, type WaitlistEntry, type InsertWaitlistEntry } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  addToWaitlist(entry: InsertWaitlistEntry): Promise<WaitlistEntry>;
  getWaitlistEntry(email: string): Promise<WaitlistEntry | undefined>;
  getWaitlistCount(): Promise<number>;
  getAllWaitlistEntries(): Promise<WaitlistEntry[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private waitlistEntries: Map<number, WaitlistEntry>;
  private waitlistByEmail: Map<string, WaitlistEntry>;
  currentUserId: number;
  currentWaitlistId: number;

  constructor() {
    this.users = new Map();
    this.waitlistEntries = new Map();
    this.waitlistByEmail = new Map();
    this.currentUserId = 1;
    this.currentWaitlistId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async addToWaitlist(insertEntry: InsertWaitlistEntry): Promise<WaitlistEntry> {
    // Check if email already exists
    const existing = this.waitlistByEmail.get(insertEntry.email);
    if (existing) {
      throw new Error("Email already exists in waitlist");
    }

    const id = this.currentWaitlistId++;
    const entry: WaitlistEntry = {
      ...insertEntry,
      id,
      createdAt: new Date(),
    };
    
    this.waitlistEntries.set(id, entry);
    this.waitlistByEmail.set(entry.email, entry);
    return entry;
  }

  async getWaitlistEntry(email: string): Promise<WaitlistEntry | undefined> {
    return this.waitlistByEmail.get(email);
  }

  async getWaitlistCount(): Promise<number> {
    return this.waitlistEntries.size;
  }

  async getAllWaitlistEntries(): Promise<WaitlistEntry[]> {
    return Array.from(this.waitlistEntries.values());
  }
}

export const storage = new MemStorage();
