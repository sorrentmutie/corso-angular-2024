export interface Notification {
    title: string;
    message: string;
    level: "info" | "warning" | "error" | "success";
}