/* eslint-disable */
export type Account = {
  id: string
  email: string
  email_verification_status: 'unspecified' | 'request' | 'verified'
  profile: AccountProfile
  work_histories?: WorkHistory[] | undefined
  academic_histories: AcademicHistory[]
  email_verification_token?: string | undefined
  last_notification_read_at?: string | undefined
}

export type Recruitment = {
  id: string
  title: string
  occupation?: Occupation | undefined
  industry?: Industry | undefined
  workplace?: Prefecture | undefined
  job_description?: string | undefined
  work_conditions?: string | undefined
  qualification_requirement?: string | undefined
  company: Company
  status: 'active' | 'inactive' | 'draft'
}

export type InterestedList = {
  id: string
  name: string
  account: Account
  recruitments?: Recruitment[] | undefined
}

export type Company = {
  id: string
  name: string
  name_kana: string
  head_office_location: string
  year_of_establishment: string
  hp_url?: string | undefined
  phone?: string | undefined
  capital: number
  is_listed: boolean
  representative: string
  representative_kana: string
  net_sales?: string | undefined
  numbers_of_employees?: string | undefined
  average_age?: number | undefined
  business_summary: string
  corporate_pr?: string | undefined
  industries?: Industry[] | undefined
  cover_image_url?: string | undefined
}

/** STIを使って実装する */
export type AccountNotification = {
  id: string
  content: string
  created_at: string
  /** 「未読」「既読」 */
  is_read: boolean
}

export type Room = {
  id: string
  account: Account
  company: Company
}

export type Message = {
  id: string
  content: string
  account: Account
  room: Room
}

export type Applicant = {
  id: string
  recruitment: Recruitment
  account: Account
  /** 採用側の場合のみ存在、未対応, 対応中, 対応済み, 採用・契約締結済み */
  management_status: 'backlog' | 'in_progress' | 'closed' | 'signed'
  created_at?: string | undefined
  updated_at?: string | undefined
}

/** dateの日付は月初で統一 */
export type WorkHistory = {
  id: string
  /** 「在職中」「離職中」 */
  is_employed: boolean
  occupation: Occupation
  industry: Industry
  position: string
  annual_income: number
  management_experience: number
  job_summary?: string | undefined
  since_date: string
  until_date?: string | undefined
  name: string
}

/** dateの日付は月初で統一 */
export type AcademicHistory = {
  id: string
  name: string
  faculty?: string | undefined
  since_date: string
  until_date: string
  /** 「大学院」「大学」「専門学校」「短期大学」「高校」 */
  type: 'graduate_school' | 'university' | 'vocational_school' | 'junior_college' | 'high_school'
}

/** STIを使って実装する */
export type AccountProfile = {
  id: string
  first_name: string
  last_name: string
  first_name_kana: string
  last_name_kana: string
  gender: 'MALE' | 'FEMALE' | 'OTHER'
  phone: string
  postal_code?: string | undefined
  address?: string | undefined
  date_of_birth: string
  biography?: string | undefined
}

/** 職種「大項目」 */
export type OccupationMainCategory = {
  id: string
  name: string
  occupation_sub_categories?: OccupationSubCategory[] | undefined
}

/** 業種カテゴリー */
export type IndustryCategory = {
  id: string
  name: string
  industries?: Industry[] | undefined
}

export type EmploymentStatus = {
  id: string
  name: string
}

export type Hope = {
  id: string
  /** 転職希望時期(Nヶ月以内) */
  time_to_change_jobs?: number | undefined
  annual_income?: number | undefined
  workplace?: Prefecture | undefined
  occupations?: Occupation[] | undefined
  employment_statuses?: EmploymentStatus[] | undefined
  account: Account
}

export type Prefecture = {
  id: string
  name: string
}

/** 職種 */
export type Occupation = {
  id: string
  name: string
}

/** 業種 */
export type Industry = {
  id: string
  name: string
}

/** 職種「中項目」 */
export type OccupationSubCategory = {
  id: string
  name: string
  occupations?: Occupation[] | undefined
}

export type _accounts__id__account = {
  email?: string | undefined
}

export type Inline_object = {
  account?: _accounts__id__account | undefined
}

export type Inline_response_200 = {
  interested_lists?: InterestedList[] | undefined
}

export type _accounts__account_id__interested_lists_interested_list = {
  name: string
  recruitment_ids?: string[] | undefined
}

export type Inline_object_1 = {
  interested_list?: _accounts__account_id__interested_lists_interested_list | undefined
}

export type _interested_lists__id__interested_list = {
  name?: string | undefined
  recruitments?: Recruitment[] | undefined
}

export type Inline_object_2 = {
  interested_list?: _interested_lists__id__interested_list | undefined
}

export type Inline_response_200_1 = {
  followings?: Company[] | undefined
}

export type _accounts__account_id__followings_following = {
  company_id: string
}

export type Inline_object_3 = {
  following?: _accounts__account_id__followings_following | undefined
}

export type Inline_response_200_2 = {
  recruitments?: Recruitment[] | undefined
}

export type Inline_response_200_3 = {
  account_notifications?: AccountNotification[] | undefined
}

export type Inline_response_200_4 = {
  rooms?: Room[] | undefined
}

export type Inline_object_4 = {
  room?: _accounts__account_id__followings_following | undefined
}

export type Inline_response_200_5 = {
  messages?: Message[] | undefined
}

export type _rooms__room_id__messages_message = {
  account_id: string
  content: string
}

export type Inline_object_5 = {
  message?: _rooms__room_id__messages_message | undefined
}

export type Inline_response_200_6 = {
  applicants?: Applicant[] | undefined
}

export type _accounts__account_id__applicants_applicant = {
  recruitment_id: string
}

export type Inline_object_6 = {
  applicant?: _accounts__account_id__applicants_applicant | undefined
}

export type _work_histories__id__work_history = {
  /** 「在職中」「離職中」 */
  is_employed?: boolean | undefined
  occupation_id?: string | undefined
  industry_id?: string | undefined
  position?: string | undefined
  annual_income?: number | undefined
  management_experience?: number | undefined
  job_summary?: string | undefined
  since_date?: string | undefined
  until_date?: string | undefined
  name?: string | undefined
}

export type Inline_object_7 = {
  work_history?: _work_histories__id__work_history | undefined
}

export type _academic_histories__id__academic_history = {
  name?: string | undefined
  faculty?: string | undefined
  since_date?: string | undefined
  until_date?: string | undefined
  /** 「大学院」「大学」「専門学校」「短期大学」「高校」 */
  type?: 'graduate_school' | 'university' | 'vocational_school' | 'junior_college' | 'high_school' | undefined
}

export type Inline_object_8 = {
  academic_history?: _academic_histories__id__academic_history | undefined
}

export type Inline_response_200_7 = {
  work_histories?: WorkHistory[] | undefined
}

export type _accounts__account_id__work_histories_work_history = {
  /** 「在職中」「離職中」 */
  is_employed: boolean
  occupation_id: string
  industry_id: string
  position: string
  annual_income: number
  management_experience: number
  job_summary?: string | undefined
  since_date: string
  until_date?: string | undefined
  name: string
}

export type Inline_object_9 = {
  work_history?: _accounts__account_id__work_histories_work_history | undefined
}

export type Inline_response_200_8 = {
  academic_histories?: AcademicHistory[] | undefined
}

export type _accounts__account_id__academic_histories_academic_history = {
  name: string
  faculty?: string | undefined
  since_date: string
  until_date: string
  /** 「大学院」「大学」「専門学校」「短期大学」「高校」 */
  type: 'graduate_school' | 'university' | 'vocational_school' | 'junior_college' | 'high_school'
}

export type Inline_object_10 = {
  academic_history?: _accounts__account_id__academic_histories_academic_history | undefined
}

export type _accounts__account_id__profile_profile = {
  first_name: string
  last_name: string
  first_name_kana: string
  last_name_kana: string
  gender: 'MALE' | 'FEMALE' | 'OTHER'
  phone: string
  postal_code?: string | undefined
  address?: string | undefined
  date_of_birth: string
  biography?: string | undefined
}

export type Inline_object_11 = {
  profile?: _accounts__account_id__profile_profile | undefined
}

export type _accounts__account_id__profile_profile_1 = {
  first_name?: string | undefined
  last_name?: string | undefined
  first_name_kana?: string | undefined
  last_name_kana?: string | undefined
  gender?: 'MALE' | 'FEMALE' | 'OTHER' | undefined
  phone?: string | undefined
  postal_code?: string | undefined
  address?: string | undefined
  date_of_birth?: string | undefined
  biography?: string | undefined
}

export type Inline_object_12 = {
  profile?: _accounts__account_id__profile_profile_1 | undefined
}

export type Inline_response_200_9 = {
  occupation_main_categories?: OccupationMainCategory[] | undefined
}

export type Inline_response_200_10 = {
  industry_categories?: IndustryCategory[] | undefined
}

export type Inline_response_200_11 = {
  employment_statuses?: EmploymentStatus[] | undefined
}

export type Inline_object_13 = {
  interested_list?: _accounts__account_id__applicants_applicant | undefined
}

export type Inline_response_200_12 = {
  companies?: Company | undefined
}

export type Inline_response_200_13 = {
  hopes?: Hope[] | undefined
}

export type _accounts__account_id__hopes_hope = {
  /** 何ヶ月以内に転職したいか */
  time_to_change_job: number
  annual_income: number
  type: 'career' | 'project'
  /** StateのID */
  workplace_id: string
  employment_status_ids: string[]
  occupation_ids: string[]
}

export type Inline_object_14 = {
  hope: _accounts__account_id__hopes_hope
}

export type _hopes__id__hope = {
  /** 何ヶ月以内に転職したいか */
  time_to_change_job?: number | undefined
  annual_income?: number | undefined
  type?: 'career' | 'project' | undefined
  /** StateのID */
  workplace_id?: string | undefined
  employment_status_ids?: string[] | undefined
  occupation_ids?: string[] | undefined
}

export type Inline_object_15 = {
  hope?: _hopes__id__hope | undefined
}

export type Inline_response_200_14 = {
  prefectures?: Prefecture[] | undefined
}
