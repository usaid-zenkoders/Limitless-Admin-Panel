/**
 * Live URL that checks if the app is in production or development.
 */
const IS_LIVE = false;

/**
 * Production URL that will be treated as global start-point and is connected to production backend API.
 */
// const PRODUCTION_URL = process?.env?.PRODUCTION_URL as string;

/**
 * Local URL that will be treated as global start-point and is connected to local backend or AWS Elastic API.
 */
const LOCAL_URL = "http://localhost:8000" as string;

/**
 * Base URL that will be treated as global start-point.
 */
// export const BASE_URL = IS_LIVE ? PRODUCTION_URL : LOCAL_URL;

export const URL = {
  // ======================== Authentication ========================

  ADMIN_LOGIN: `${LOCAL_URL}/admin/login`,
  GET_ALL_USERS: (
    page?: number,
    limit?: number,
    search?: string,
    role?: string,
    status?: string
  ) => {
    let url = `${LOCAL_URL}/admin/users`;
    if (page) url += `?page=${page}`;
    if (limit) url += `&limit=${limit}`;
    if (search) url += `&search=${search}`;
    if (role) url += `&role=${role.toLowerCase()}`;
    if (status) url += `&status=${status}`;
    return url;
  },
};
