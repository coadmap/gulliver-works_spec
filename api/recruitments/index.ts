/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  get: {
    query?: {
      /** 職種 */
      'occupation_ids[]'?: string | undefined
      /** 業種 */
      'industry_ids[]'?: string | undefined
      /** 勤務地 */
      'workplace_ids[]'?: string | undefined
      /** 雇用形態 */
      'employment_status_ids[]'?: string | undefined
      /** タイプ */
      type?: string | undefined
      /** 最高金額 */
      max_income?: number | undefined
      /** 最低金額 */
      min_income?: number | undefined
      /** キーワード */
      keyword?: string | undefined
    } | undefined

    status: 200
    /** OK */
    resBody: Types.Inline_response_200_2
  }
}
