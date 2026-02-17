export type ApiMeta = {
  cursor?: string;
  hasMore?: boolean;
  total?: number;
};

export type ApiSuccess<T> = {
  data: T;
  meta?: ApiMeta;
};

export type ProblemField = {
  field: string;
  message: string;
};

export type ProblemDetails = {
  type: string;
  title: string;
  status: number;
  detail: string;
  errors?: ProblemField[];
};

export class ApiError extends Error {
  readonly problem: ProblemDetails;

  constructor(problem: ProblemDetails) {
    super(problem.detail);
    this.problem = problem;
    this.name = "ApiError";
  }
}
