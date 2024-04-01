import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const dumydata = createApi({
    reducerPath : 'dumyapi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://hakimhub-api-dev-wtupbmwpnq-uc.a.run.app/api/v1/",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    
      endpoints: (builder) => ({
        getallhospitals: builder.query({
          query: () => "search?institutions=true&articles=false&doctors=false",
        }),
        fetchHospitalsWithPagination: builder.query({
          query: ({ from, size }) =>
            `search?institutions=true&articles=false&doctors=false&from=${from}&size=${size}`,
        }),
        search: builder.query({
          query: ({ keyword }) =>
            `search?keyword=${keyword}&institutions=true&articles=false&doctors=false`,
        }),
      }),
})


export const {useGetallhospitalsQuery} = dumydata;



// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// // Define an API service using createApi
// export const hospitalApiSlice = createApi({
//   reducerPath: "api",
 

// });

// // Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
// export const {
//   useFetchHospitalsQuery,
//   useFetchHospitalsWithPaginationQuery,
//   useSearchQuery,
// } = hospitalApiSlice;