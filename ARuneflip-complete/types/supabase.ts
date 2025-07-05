// types/supabase.ts
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          wallet: string
          join_date: string
          terms_accepted: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          wallet: string
          join_date?: string
          terms_accepted?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          wallet?: string
          join_date?: string
          terms_accepted?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      matches: {
        Row: {
          id: string
          walletA: string
          sideA: 'heads' | 'tails'
          walletB: string | null
          sideB: 'heads' | 'tails' | null
          stake: number
          status: 'waiting' | 'active' | 'completed' | 'cancelled'
          result: 'heads' | 'tails' | null
          winner: string | null
          loser: string | null
          created_at: string
          updated_at: string
          expires_at: string
        }
        Insert: {
          id?: string
          walletA: string
          sideA: 'heads' | 'tails'
          walletB?: string | null
          sideB?: 'heads' | 'tails' | null
          stake: number
          status?: 'waiting' | 'active' | 'completed' | 'cancelled'
          result?: 'heads' | 'tails' | null
          winner?: string | null
          loser?: string | null
          created_at?: string
          updated_at?: string
          expires_at?: string
        }
        Update: {
          id?: string
          walletA?: string
          sideA?: 'heads' | 'tails'
          walletB?: string | null
          sideB?: 'heads' | 'tails' | null
          stake?: number
          status?: 'waiting' | 'active' | 'completed' | 'cancelled'
          result?: 'heads' | 'tails' | null
          winner?: string | null
          loser?: string | null
          created_at?: string
          updated_at?: string
          expires_at?: string
        }
      }
      history: {
        Row: {
          id: string
          match_id: string | null
          winner: string
          loser: string
          stake: number
          side: 'heads' | 'tails'
          timestamp: string
          fee_collected: number
        }
        Insert: {
          id?: string
          match_id?: string | null
          winner: string
          loser: string
          stake: number
          side: 'heads' | 'tails'
          timestamp?: string
          fee_collected?: number
        }
        Update: {
          id?: string
          match_id?: string | null
          winner?: string
          loser?: string
          stake?: number
          side?: 'heads' | 'tails'
          timestamp?: string
          fee_collected?: number
        }
      }
      stats: {
        Row: {
          wallet: string
          total_games: number
          wins: number
          losses: number
          total_wagered: number
          total_won: number
          win_rate: number
          created_at: string
          updated_at: string
        }
        Insert: {
          wallet: string
          total_games?: number
          wins?: number
          losses?: number
          total_wagered?: number
          total_won?: number
          win_rate?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          wallet?: string
          total_games?: number
          wins?: number
          losses?: number
          total_wagered?: number
          total_won?: number
          win_rate?: number
          created_at?: string
          updated_at?: string
        }
      }
      analytics: {
        Row: {
          id: string
          event_type: string
          user_wallet: string | null
          metadata: Json
          timestamp: string
        }
        Insert: {
          id?: string
          event_type: string
          user_wallet?: string | null
          metadata?: Json
          timestamp?: string
        }
        Update: {
          id?: string
          event_type?: string
          user_wallet?: string | null
          metadata?: Json
          timestamp?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
