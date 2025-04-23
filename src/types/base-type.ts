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
