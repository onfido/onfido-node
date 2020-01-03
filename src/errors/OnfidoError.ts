export class OnfidoError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "OnfidoError";
  }
}
