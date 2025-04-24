import { createTokenManager } from "../factories/create-token-manager";

const accessTokenName = "passive-income.access-token";

export const tokenManager = createTokenManager({
  accessTokenName,
});
