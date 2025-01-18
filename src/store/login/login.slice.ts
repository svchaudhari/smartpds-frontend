import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = `${import.meta.env.VITE_API_BASENAME}/${import.meta.env.VITE_API_SERVICES}/${import.meta.env.VITE_API_VERSION}`;

const transformResponseMiddleware = (response: any) => {
  if (response?.data) {
    return { ...response, transformed: true };
  }
  return response;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: transformHeaders(),
    fetchFn: transformRequestHeader(),
  }),
  endpoints: (builder) => ({
    login: builder.mutation<
      { token: string },
      { username: string; password: string }
    >({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = apiSlice;
function transformRequestHeader():
  | ((input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>)
  | undefined {
  return async (input, init) => {
    const response = await fetch(input, init);
    const data = await response.json();
    const transformedData = transformResponseMiddleware(data);
    return new Response(JSON.stringify(transformedData), {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
  };
}

function transformHeaders() {
  return (headers: any) => {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    headers.set('Content-Type', 'application/json');
    return headers;
  };
}
