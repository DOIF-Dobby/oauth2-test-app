export type BaseResponse = {
  code: string;
  message: string;
};

export type BaseResponseDetail<T> = BaseResponse & {
  detail: T;
};

export type BaseResponseContent<T> = BaseResponseDetail<{
  content: Array<T>;
}>;

export type Stock = {
  stockId: number;
  standardCode: string;
  shortCode: string;
  nameKor: string;
  shortNameKor: string;
  nameEng: string;
  listingDate: string;
  marketType: string;
  securityType: string;
  securityTypeName: string;
  stockType: string;
  stockTypeName: string;
};
