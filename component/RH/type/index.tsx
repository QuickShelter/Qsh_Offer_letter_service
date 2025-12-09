export interface DataResponse {
  user: User;
  mortgage: Mortgage;
  wallet: Wallet;
  property: Property;
  hash: string;
  application : Application 
}

/* ---------------- USER ---------------- */

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  avatar: string;
  country: string;
  updated_at: string | Date;
  is_first_time_login: number;
  employment_status: string | null;
  monthly_net_salary: string | null;
  roles: string; // JSON string like '["user"]'
  phone: string;
  email_verified: number;
  bvn_verified: number;
  bvn: string;
  gender: string | null;
  dob: string | null;
  identity_document: string | null;
  identity_document_verified: number;
  is_nhf_active: number;
  pfa: string | null;
  rsa: string | null;
  business_sector: string | null;
  years_of_work: number | null;
  suspended: number;
  created_at: string | Date;
  extra_name: string | null;
  other_phone_number: string | null;
  name_of_employer: string | null;
  referrer: string | null;
  corp_id: number | null;
  added_by: number | null;
  payment_method: string | null;
  address: string | undefined;
  suspension_status_reason: string | null;
}

/* ---------------- MORTGAGE ---------------- */

export interface Mortgage {
  id: number;
  user_id: number;
  property_id: number;
  building_id: number;
  unit_id: number;
  application_id: number;
  is_joint: number;
  type: string;
  status: string;
  user_next_action: string | null;
  admin_next_action: string | null;
  current_status_turnaround_time: string | null;
  current_status_reason: string | null;
  property_cost: string;
  interest_per_annum: number;
  rsa_balance: string;
  monthly_payment: string;
  equity_percent: number;
  equity_amount: string;
  equity_without_rsa: string;
  loan_percent: number;
  loan_amount: string;
  equity_from_rsa_percent: number;
  equity_from_rsa_amount: string;
  duration_in_months: number;
  created_at: string | Date;
  updated_at: string | Date;
  deleted_at: string | Date | null;
  address: string | null;
}

/* ---------------- WALLET ---------------- */

export interface Wallet {
  id: number;
  user_id: number;
  currency: string;
  customer_id: string;
  bank_name: string;
  account_number: string;
  account_name: string;
  balance: string;
  created_at: string | Date;
  updated_at: string | Date;
  enabled: number;
  wallet_owner: string;
}

/* ---------------- PROPERTY ---------------- */

export interface Property {
  id: number;
  poster_id: number;
  type: string;
  units: number;
  multiple_buildings: number;
  buildings_count: number;
  model_3d_image: string; // JSON string array
  floor_plan_image: string; // JSON string array
  aerial_image: string; // JSON string array
  property_documents: string; // JSON string array
  title: string;
  address: string;
  state: string;
  city: string;
  price: string;
  created_at: string | Date;
  updated_at: string | Date;
  project_id: number;
  finished_status: string;
  display_image: string;
  youtube_url: string | null;
  status: string;
  administrative_fee: number;
  deleted_at: string | Date | null;
  project_property_id: number;
  pending_price: string | null;
  about: string;
  ready_for_purchase: number;
  finished_price: string;
  pending_finished_price: string | null;
  owner_type: string;
  payment_methods: string; // JSON string array
  partly_finished_price: string | null;
  pending_partly_finished_price: string | null;
  finished_statuses: string;
}

export interface Application {
  id : string | number; 
  plan : string | number;
  total_price: string | number;
  created_at: string ;
  is_finished_property: boolean;
  property_finished_type: string | null;
  contribution: string | undefined

}