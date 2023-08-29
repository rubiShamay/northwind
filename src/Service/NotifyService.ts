import { Notyf } from "notyf";

class NotificationService {
    private notification = new Notyf({
        duration: 4000,
        position: { x: 'center', y: 'top' }
    })

    public success(message: string): void {
        const msg =  this.extractErrorMessage(message)
        this.notification.success(msg)
    }
    public error(err: string): void {
        const msg =  this.extractErrorMessage(err)
        this.notification.error(msg)
    }

    private extractErrorMessage(err: any): string {
        if (typeof err === "string") return err;

        if (typeof err.response?.data === "string") return err.response?.data;

        if (typeof err.message === "string") return err.message;
    }

}
const notificationService = new NotificationService()

export default notificationService;