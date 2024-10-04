export const getCategories = async (): Promise<string[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FRONT}/api/categories`);
    const data = await response.json();

    return data;
}