export interface EntityStateInterface<T> {
    loading: boolean;
    deleting: boolean;
    deleted: boolean;
    message: string;
    success: boolean;
    error: boolean;
    entities: T[];
}
