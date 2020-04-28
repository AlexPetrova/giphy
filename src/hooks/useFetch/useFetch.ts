import { useState, useEffect } from "react";

export function useFetch<TResponse>(url: string) {
    const [response, updateResponse] = useState<TResponse | undefined>(undefined);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const json: TResponse = await response.json();
            updateResponse(json);
        };
        fetchData();
    }, [url]);

    return response;
}